import { useContext } from 'react';
import { Dialog, withStyles, Box, Typography, makeStyles, List, ListItem } from '@material-ui/core'
import { GoogleLogin } from 'react-google-login';

import { AccountContext } from '../../context/AccountProvider';

import { addUser } from '../../service/api';

import './loginStyle.css';

const useStyles = makeStyles({
    component: {
        display: 'flex'
    },
    leftComponent: {
        padding: '56px 0px 56px 56px'
    },
    rightComponent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'fit-content'
    },
    qrCode: {
        position: 'relative',
        width: 264,
        height: 264,
        padding: '50px 50px 50px 50px'
    },
    googleLoginButton: {
        position: 'absolute'
    },
    title: {
        fontSize: 24
    }
})

const styles = {
    dialogPaper: {
        height: '95%',
        width: '60%',
        marginTop: '12%',
        maxHeight: '100%',
        maxWidth: '100%'
    }
}

const Login = ({ classes }) => {
    const classname = useStyles();
    const qrurl = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';
    const clientId = '701287101220-354vjuggl0tt508louuoo1vpjjfj1dap.apps.googleusercontent.com';
    
    const { account, setAccount } = useContext(AccountContext);

    const onLoginSuccess = async (res) => {
        setAccount(res.profileObj);
        await addUser(res.profileObj);
    }

    const onLoginFailure = () => {
        console.log("Login Failed");
    }
    
    return (
        <Dialog 
            open={true}
            classes={{ paper: classes.dialogPaper }}
        >
            <Box className={classname.component}>
                <Box className={classname.leftComponent}>
                    <Typography className={classname.title}>To use WhatsApp on your computer:</Typography>
                    <List>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap Menu or Settings and select Linked Devices</ListItem>
                        <ListItem>3. Point your phone to this screen and capture the code</ListItem>
                    </List>
                </Box>
                <Box className={classname.rightComponent}>
                    <img src={qrurl} alt='qr' className={classname.qrCode} />
                    <GoogleLogin 
                        clientId = {clientId}
                        buttonText = "Login"
                        onSuccess = {onLoginSuccess}
                        onFailure = {onLoginFailure}
                        cookiePolicy = {'single_host_origin'}
                        className = 'google_login_button'
                    />
                </Box>
            </Box>
        </Dialog>
    )
}

export default withStyles(styles)(Login);