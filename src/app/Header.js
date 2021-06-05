import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appbar: {
        alignItems: 'center',
    },
    title: {
        flexGrow: 1,
        display: 'block',
        fontSize: '2.5rem',
        textAlign: 'center',
        color: 'black',
        textTransform: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(5),
            width: 'auto',
        },

    },
    SearchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&focus:': {
                width: '20ch',
            },
        },
    },

}));

export const Header = () => {
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState('');

    const onSearchTermChange = e => setSearchTerm(e.target.value);

    let history = useHistory();

    const onSearchSubmit = e => {
        e.preventDefault();
        setSearchTerm('');
        history.push(`/search/${searchTerm}`)
    }

    return (
        <div className={classes.root}>
            <AppBar position='static' style={{ background: '#FF5700' }} className={classes.appbar}>
                <Toolbar>
                    <Button component={Link} to='/r/popular' className={classes.title} size='medium'>
                        Reddit Client
                    </Button>
                    <div className={classes.search}>
                        <div className={classes.SearchIcon}>
                            <SearchIcon />
                        </div>
                        <form onSubmit={onSearchSubmit}>
                            <InputBase
                                value={searchTerm}
                                required
                                onChange={onSearchTermChange}
                                placeholder='Search'
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </form>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};