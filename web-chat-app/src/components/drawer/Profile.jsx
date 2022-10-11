import { Box, makeStyles, Typography } from "@material-ui/core";
import { useContext } from 'react';
import { AccountContext } from "../../context/AccountProvider";

const useStyles = makeStyles({
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        padding: '18px 0'
    },
    displayPicture: {
        width: 200,
        height: 200,
        borderRadius: '50%'
    },
    nameContainer: {
        background: '#FFFFFF',
        padding: '12px 30px 2px',
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.08)',
        '& :first-child': {
            fontSize: 14,
            color: '#009688'
        },
        '& :last-child': {
            color: '#4A4A4A',
            margin: '14px 0'
        }
    },
    descriptionContainer: {
        padding: '10px 20px 20px 30px',
        '& > *': {
            fontSize: 12,
            color: 'rgba(0, 0, 0, 0.45)'
        }
    }
})
const Profile = () => {
    const classes = useStyles();
    const { account } = useContext(AccountContext);

    return (
        <>
            <Box className={classes.imageContainer}>
                <img src={account.imageUrl} alt="display-picture-big" className={classes.displayPicture} />
            </Box>
            <Box className={classes.nameContainer}>
                <Typography>Your Name</Typography>
                <Typography>{account.name}</Typography>
            </Box>
            <Box className={classes.descriptionContainer}>
                <Typography>This is not your username or pin. This name will be visible to your WhatsApp Contacts</Typography>
            </Box>
            <Box  className={classes.nameContainer}>
                <Typography>About</Typography>
                <Typography>Full of Enthusiasm</Typography>
            </Box>
        </>
    )
}

export default Profile;