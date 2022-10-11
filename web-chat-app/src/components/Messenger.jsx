import React, { useContext } from 'react';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';

import { AccountContext } from '../context/AccountProvider';
import Login from './account/Login';
import ChatBox from './ChatBox';

const useStyles = makeStyles({
    loginHeader: {
        height: 200,
        background: '#00BFA5',
        // boxShadow: 'none'
    },
    header: {
        height: 115,
        background: '#128C7E',
        // boxShadow: 'none'
    }
})

const Messenger = () => {
    const classes = useStyles();
    const { account } = useContext(AccountContext);
    
    return (
        <>
            <AppBar className={account ? classes.header : classes.loginHeader}>
                <Toolbar></Toolbar>
            </AppBar>
            {account ? <ChatBox/> : <Login/>}
            {/* <Login /> */}
        </>
    )
}

export default Messenger;