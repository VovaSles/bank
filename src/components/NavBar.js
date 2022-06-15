import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Link to={'/'} style={{ textDecoration: 'none', color: "#FFFFFF" }}>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                    </Link>
                    <Link to={'/exercises'} style={{ textDecoration: 'none', color: "#FFFFFF" }}>
                        <Typography variant="h6" color="inherit" component="div">
                            Exercises
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar