import { Box, makeStyles, Typography } from "@material-ui/core";
import { useContext, useEffect } from "react";
import { AccountContext } from "../../context/AccountProvider";

const useStyles = makeStyles({
    message_container_user: {
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'column',
        paddingBlock: 2.5
    },
    message_text_user: {
        width: 'fit-content',
        background: '#FFFFFF',
        paddingBlock: 10,
        paddingInline: 15,
        margin: 0,
        wordBreak: 'break-word',
        borderRadius: 999,
        borderTopRightRadius: 5
    },
    message_container_reciever: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        paddingBlock: 2.5
    },
    message_text_reciever: {
        width: 'fit-content',
        background: '#FFFFFF',
        paddingBlock: 10,
        paddingInline: 15,
        margin: 0,
        wordBreak: 'break-word',
        borderRadius: 999,
        borderTopLeftRadius: 5
    },
    message_timestamp: {
        fontSize: 10,
        marginInline: 15,
        marginBlock: 2.5,
        float: 'right',
        color: '#616161'
    }
})

const Message = ({ message }) => {
    // Calling the styles to be used by the message container
    const classes = useStyles();
    const { account } = useContext(AccountContext);
    console.log(account);
    console.log(message);

    const formatDateTime = (date) => {
        return date < 10 ? '0' + date : date;
    }
    return (
        <Box className={ account.googleId == message.sender ? classes.message_container_user : classes.message_container_reciever }>    
            <Typography className={ account.googleId == message.sender ? classes.message_text_user : classes.message_text_reciever } id="message_text">{message.text}</Typography>
            <Typography className={classes.message_timestamp}>{formatDateTime(new Date(message.createdAt).getHours())}:{formatDateTime(new Date(message.createdAt).getMinutes())}</Typography>
        </Box>
    )
}

export default Message;