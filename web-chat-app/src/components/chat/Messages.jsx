import { useState, useContext, useEffect, useRef } from 'react';
import { Box, makeStyles } from '@material-ui/core';

import Footer from './Footer';
import Message from './Message';

import { AccountContext } from '../../context/AccountProvider';
import { sendNewMessage, getMessages } from '../../service/api.js';


const useStyles = makeStyles({
    wrapper: {
        backgroundImage: `url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'})`,
        backgroundSize: '50%'
    },
    component: {
        height: 'calc(100vh - 142px)',
        paddingInline: 10,
        overflowY: 'scroll'
    }
})

const Messages = ({ conversation, person }) => {
    const classes = useStyles();
    
    const [messageValue, setMessageValue] = useState();
    const [messages, setMessages] = useState([]);
    const [incomingMessage, setIncomingMessage] = useState(null);

    const { account, socket, setNewMessageFlag, newMessageFlag } = useContext(AccountContext);

    const scrollRef = useRef();

    useEffect(() => {
        socket.current.on('getMessage', data => {
            setIncomingMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            })

            setNewMessageFlag(prev => !prev);
        })
    }, [newMessageFlag])

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ transition: 'smooth'});
    })

    useEffect(() => {
        incomingMessage && conversation?.members?.includes(incomingMessage.sender) &&
            setMessages(prev => [...prev, incomingMessage])

    }, [incomingMessage, conversation])

    useEffect(() => {
        const getMessageDetails = async () => {
            let response = await getMessages(conversation._id);
            setMessages(response.data);
        }
        getMessageDetails();
    }, [conversation?._id, person._id, newMessageFlag])

    const receiverId = conversation?.members?.find(member => member !== account.googleId);

    const sendText = async (e) => {
        let code = e.keyCode || e.which;
        if(!messageValue) return;

        if (code === 13) {
            // Message Object created when enter button is pressed
            let message = {
                sender: account.googleId,
                conversationId: conversation._id,
                text: messageValue
            }

            // Emitting a signal 
            socket.current.emit('sendMessage', {
                senderId: account.googleId,
                receiverId,
                text: messageValue
            })

            console.log('This message has been sent to database: ', message);

            await sendNewMessage(message);
            setMessageValue('');
            setNewMessageFlag(prev => !prev);
        }
    }

    return (
        <Box className={classes.wrapper}>
            <Box className={classes.component}>
                {
                    messages && messages.map(message => (
                        <Box ref={scrollRef}>
                            <Message message={message}/>
                        </Box>
                    ))
                }
            </Box>
            <Footer sendText={sendText} setMessageValue={setMessageValue} messageValue={messageValue}/>
        </Box>
    )
}

export default Messages;