import { Box, makeStyles, InputBase } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    component: {
        background: '#F6F6F6',
        height: 43,
        display: 'flex',
        alignItems: 'center'
    },
    search: {
        position: 'relative',
        borderRadius: 18,
        background: '#FFFFFF',
        margin: '0 13px',
        width: '100%'
    },
    searchIcon: {
        position: 'absolute',
        color: '#919191',
        padding: theme.spacing(0, 2),
        height: '100%',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center'
    },
    inputRoot: {
        width: '100%'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: 65,
        fontSize: 14,
        height: 15,
        width: '100%'
    }
}))

const Search = ({ setSearchQuery }) => {
    const classes = useStyles();

    return (
            <Box className={classes.component}>
                <Box className={classes.search}>
                    <Box className={classes.searchIcon}>
                        <SearchIcon />
                    </Box>
                    <InputBase
                        placeholder='Search for a chat...'
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput
                        }}
                        inputProps={{ 'aria-label': 'search'}}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </Box>
            </Box>
    )
}

export default Search;