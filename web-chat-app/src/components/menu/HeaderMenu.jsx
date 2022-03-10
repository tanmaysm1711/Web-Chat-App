import { useContext, useState } from 'react';
import { Chat, MoreVert } from '@material-ui/icons';
import { Menu, MenuItem, makeStyles } from '@material-ui/core';

import { GoogleLogout } from 'react-google-login';

import { clientId } from '../../constants/data';

import { AccountContext } from '../../context/AccountProvider';

const useStyles = makeStyles({
    menuItem: {
        fontSize: 14,
        padding: '15px 60px 5px 24px',
        color: '#4A4A4A'
    },
    logout: {
        border: 'none!important',
        boxShadow: 'none!important',
        '& > *': {
            padding: '0px!important'
        }
    }
})

const HeaderMenu = () => {
    const [open, setOpen] = useState(false);
    const { setAccount } = useContext(AccountContext);
    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    }

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }

    const onLogoutSuccess = () => {
        alert("You have successfully logged out!");
        console.clear();
        setAccount('');
    }

    return (
        <>
            <MoreVert onClick={handleClick}/>
            <Menu
                id="basic-menu"
                anchorEl={open}
                open={open}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem className={classes.menuItem} onClick={handleClose}>Profile</MenuItem>
                <MenuItem className={classes.menuItem} onClick={handleClose}>
                    <GoogleLogout
                        clientId={clientId}
                        buttonText="Logout"
                        onLogoutSuccess={onLogoutSuccess}
                        className={classes.logout}
                    >

                    </GoogleLogout>
                </MenuItem>
            </Menu>
        </>
    )
}

export default HeaderMenu;