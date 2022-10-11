import { Drawer, Box, Typography, makeStyles } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

import Profile from './Profile';

const useStyles = makeStyles({
    header: {
        background: '#00BFA5',
        height: 97,
        color: '#FFFFFF',
        display: 'flex',
        '& > *': {
            marginTop: 'auto',
            padding: 16,
            fontWeight: 600
        }
    },
    profileComponent: {
        background: '#EDEDED',
        height: '85%'
    }
})

const ProfileDrawer = ({ open, setOpen}) => {
    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    }
    
    return (
        <Drawer open={open} onClose={handleClose}>
            <Box className={classes.header}>
                <ArrowBack onClick={handleClose}/>
                <Typography>Profile</Typography>
            </Box>
            <Box className={classes.profileComponent}>
                <Profile />
            </Box>
        </Drawer>
    )
}

export default ProfileDrawer;