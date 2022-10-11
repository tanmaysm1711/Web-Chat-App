import { Dialog, withStyles, Box, makeStyles } from '@material-ui/core';
import Menu from './menu/Menu';
import Chat from './chat/Chat';

const useStyles = makeStyles({
    component: {
        display: 'flex'
    },
    leftComponent: {
        minWidth: 380
    },
    rightComponent: {
        width: 'calc(100% - 380px)',
        borderLeft: '1px Solid rgba(0, 0, 0, 0.14)'
    }
})

const styles = {
    dialogPaper: {
        height: '95%',
        width: '91%',
        maxHeight: '100%',
        maxWidth: '100%',
        overflow: 'hidden'
    }
}

const ChatBox = ({ classes }) => {
    const classname = useStyles();

    return (
        <Dialog 
            open={true} 
            classes={{ paper : classes.dialogPaper }}
            BackdropProps = {{style : {backgroundColor: 'unset'}}}>
            <Box className={classname.component}>
                <Box className={classname.leftComponent}>
                    <Menu />
                </Box>
                <Box className={classname.rightComponent}>    
                    <Chat />
                </Box>
            </Box>
        </Dialog>
    )
}

export default withStyles(styles)(ChatBox);