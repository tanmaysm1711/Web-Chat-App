import { Box, InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { EmojiEmotionsOutlined, AttachFile, Mic } from '@material-ui/icons';

// 

const useStyles = makeStyles(theme => ({
    footer: {
        height: '55px',
        background: '#EDEDED',
        // width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '0px 15px',
        '& > *': {
            margin: 5,
            color: '#919191'
        }
    },
    clipIcon: {
        transform: 'rotate(40deg)'
    },
    messageBox: {
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        width: '100%'
    },
    inputRoot: {
        color: 'inherit',
        width: '100%'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: 25,
        fontSize: 14,
        height: 20
    }
}))

const Footer = ({ sendText, setMessageValue, messageValue }) => {
    const classes = useStyles();

    return (
        <Box className={classes.footer}>
            <EmojiEmotionsOutlined />
            <AttachFile className={classes.clipIcon}/>
            <Box className={classes.messageBox}>
                <InputBase 
                    placeholder='Type A Message'
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onKeyPress={(e) => sendText(e)}
                    value={messageValue}
                    onChange={(e) => setMessageValue(e.target.value)}
                />
            </Box>
            <Mic />
        </Box>
    )
}

export default Footer;