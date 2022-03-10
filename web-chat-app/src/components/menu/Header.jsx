import { useContext  } from "react";
import { Box, makeStyles } from "@material-ui/core";
import { Chat, MoreVert } from '@material-ui/icons';

import { AccountContext } from '../../context/AccountProvider';
import HeaderMenu from "./HeaderMenu";

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
        borderRadius: 999 
    },
    menuIconsPalette: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        // background: '#A2A2A2',
        borderRadius: 999,
        '& > *': {
            fontSize: 22,
            color: '#919191',
            paddingBlock: 5
        },
        '& :first-child': {
            fontSize: 20,
            paddingRight: 7.5
        },
        '& :last-child': {
            paddingLeft: 7.5
        }
    }
})

// Component
const Header = () => {
    const classes = useStyles();
    const { account } = useContext(AccountContext);

    return(
        <Box className={classes.header}>
            <img className={classes.avatar} src={account.imageUrl} alt="display-picture" />
            <Box className={classes.menuIconsPalette}>
                <Chat />
                <HeaderMenu />
            </Box>
        </Box>
    )
}
    
export default Header;