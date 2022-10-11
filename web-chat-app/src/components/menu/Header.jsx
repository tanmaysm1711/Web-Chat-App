import { useContext, useState } from "react";
import { Box, makeStyles } from "@material-ui/core";
import { Chat } from '@material-ui/icons';

import { AccountContext } from '../../context/AccountProvider';
import HeaderMenu from "./HeaderMenu";
import ProfileDrawer from '../drawer/ProfileDrawer';

const useStyles = makeStyles({
    header: {
        height: 35,
        background: '#EDEDED',
        padding: '10px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    avatar: {
        height: 35,
        width: 35,
        borderRadius: 10 
    },
    menuIconsPalette: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& > *': {
            fontSize: 22,
            color: '#919191',
            transition: 'all 0.2s ease',
            borderRadius: 10
        },
        '& :hover': {
            cursor: 'pointer',
            background: 'rgba(50, 51, 55, 0.24)',
            color: '#FFFFFF'
        },
        '& :first-child': {
            fontSize: 20,
            padding: 7.5,
        },
        '& :last-child': {
            padding: 5,
            marginLeft: 5
        }
    }
})

// Component
const Header = () => {
    const classes = useStyles();
    const { account } = useContext(AccountContext);
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(true);
    }

    return(
        <>
            <Box className={classes.header}>
                <img className={classes.avatar} onClick={() => toggleDrawer()} src={account.imageUrl} alt="display-picture" />
                <Box className={classes.menuIconsPalette}>
                    <Chat />
                    <HeaderMenu />
                </Box>
            </Box>
            <ProfileDrawer open={open} setOpen={setOpen}/>
        </>
    )
}
    
export default Header;