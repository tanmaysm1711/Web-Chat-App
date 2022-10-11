import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useContext, useEffect, useState } from 'react';

import { AccountContext } from '../../context/AccountProvider';
import { getConversation, setConversation } from '../../service/api.js';
import { UserContext } from '../../context/UserProvider';

const useStyles = makeStyles({
    conversation_container: {
        display: 'flex',
        flexDirection: 'row',
        margin: 10,
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        '&:hover': {
            cursor: 'pointer',
            background: 'rgba(50, 51, 55, 0.20)'
        }
    },
    conversation_container_left_component: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'    
    },
    conversation_container_right_component: {
        marginRight: 10,
    },
    display_picture_container: {
        width: 60,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    display_picture: {
        borderRadius: '50%',
        height: 40,
        width: 40
    },
    user_details_container: {
        // width: '100%'
    },
    last_message_time: {
        fontSize: '0.7rem'
    }
})

const Conversation = ({ user }) => {
    const userDisplayImageUrl = user.imageUrl;
    const userDisplayName = user.name;
    const classes = useStyles();

    const { account, newMessageFlag } = useContext(AccountContext);
    const { setPerson } = useContext(UserContext);

    const [message, setMessage] = useState({});

    useEffect(() => {
        console.log("useEffect getConversation");
        const getConversationMessage = async () => {
            const data = await getConversation({ senderId: account.googleId, receiverId: user.googleId });
            setMessage({ text: data.message, timestamp: data.updatedAt});
        }
        getConversationMessage();
    }, [newMessageFlag])

    const setUser = async () => {
        setPerson(user);
        await setConversation({ senderId: account.googleId, receiverId: user.googleId });
    }

    let time = new Date(message.timestamp).getHours() + ":" + new Date(message.timestamp).getMinutes();
    if (new Date(message.timestamp).getHours() < 10 && new Date(message.timestamp).getMinutes() < 10) {
        time = "0" + new Date(message.timestamp).getHours() + ":0" + new Date(message.timestamp).getMinutes();
    } else if (new Date(message.timestamp).getHours() < 10) {
        time = "0" + new Date(message.timestamp).getHours() + ":" + new Date(message.timestamp).getMinutes();
    } else if (new Date(message.timestamp).getMinutes() < 10) {
        time = new Date(message.timestamp).getHours() + ":0" + new Date(message.timestamp).getMinutes();
    }

    return (
        <>
            <Box className={classes.conversation_container} onClick={() => setUser()}>
                <Box className={classes.conversation_container_left_component}>    
                    <Box className={classes.display_picture_container}>
                        <img src={userDisplayImageUrl} className={classes.display_picture} />
                    </Box>
                    <Box className={classes.user_details_container}>
                        <Typography>{userDisplayName}</Typography>
                        <Typography>{message.text}</Typography>
                    </Box>
                </Box>
                <Box className={classes.conversation_container_right_component}>
                    {
                        message.text &&
                        <Typography className={classes.last_message_time}>
                            {time}
                        </Typography>
                    }
                </Box>
            </Box>
        </>
    )
}

export default Conversation;