import { useEffect, useState, useContext } from 'react';
import { getUsers } from "../../service/api";
import { Box, makeStyles } from '@material-ui/core';

import Conversation from './Conversation';
import { AccountContext } from '../../context/AccountProvider'

const useStyles = makeStyles({
    conversations_container: {
        height: '81vh',
        overflow: 'overlay'
    }
})

const Conversations = ({ searchQuery }) => {

    const classes = useStyles();
    const [users, setUsers] = useState([]);
    const { account, socket, setActiveUsers } = useContext(AccountContext);

    useEffect(async () => {
        console.log("useEffect getUsers");
        const fetchData = async () => {
            const users = await getUsers();
            const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase()))
            console.log(filteredUsers);
            setUsers(filteredUsers);
        }
        fetchData();
    }, [searchQuery])

    useEffect(() => {
        socket.current.emit('addUser', account.googleId);
        socket.current.on('getUsers', users => {
            setActiveUsers(users);
        })
    }, [account])

    // getUsers();

    return (
        <Box className={classes.conversations_container}>
            {
                users.map(user => (
                    user.googleId !== account.googleId) &&
                    <Conversation user={user}/>
                )
            }
        </Box>
    )
}

export default Conversations;