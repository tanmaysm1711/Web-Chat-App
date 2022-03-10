import { Dialog, withStyles, Box, makeStyles } from '@material-ui/core';
import Menu from './menu/Menu';

const useStyles = makeStyles({
    component: {
        display: 'flex'
    },
    leftComponent: {
        minWidth: 380
    },
    rightComponent: {
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
                    {/* Chat List Component */}
                    <Menu />
                </Box>
                <Box className={classname.rightComponent}>    
                    Messaging Component
                </Box>
            </Box>
        </Dialog>
    )
}

export default withStyles(styles)(ChatBox);