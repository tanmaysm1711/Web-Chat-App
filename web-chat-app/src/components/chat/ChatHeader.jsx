import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { useContext } from 'react';
import { UserContext } from '../../context/UserProvider';
import { MoreVert, Search } from '@material-ui/icons';
import { AccountContext } from '../../context/AccountProvider';

const useStyles = makeStyles({
    header: {
        display: 'flex',
        height: 35,
        background: '#EDEDED',
        padding: '10px 16px',
        alignItems: 'center',
    },
    display_picture: {
        width: 37,
        height: 37,
        borderRadius: '50%',
        padding: '0px 2px'
    },
    name: {
        marginLeft: 10
    },
    status: {
        fontSize: 12,
        marginLeft: 10,
        color: 'rgba(0, 0, 0, 0.6)'
    },
    right_container: {
        marginLeft: 'auto',
        '& > *': {
            padding: 8,
            fontSize: 22,
            color: '#919191'
        }
    }
});

const ChatHeader = () => {
    const { person } = useContext(UserContext);
    const classes = useStyles();

    const { activeUsers } = useContext(AccountContext);

    return (
        <Box className={classes.header}>
            <img src={person.imageUrl} className={classes.display_picture}/>
            <Box>
                <Typography className={classes.name}>{person.name}</Typography>
                <Typography className={classes.status}>
                {
                    activeUsers?.find(user => user.userId === person.googleId) ? 'Online' : 'Offline'
                }</Typography>
            </Box>
            <Box className={classes.right_container}>
                <Search />
                <MoreVert />
            </Box>
        </Box>
    )
}

export default ChatHeader;