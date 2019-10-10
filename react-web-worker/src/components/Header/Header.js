import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const Header = () => {
  const classes = useStyles();

  return <AppBar position='static'>
    <Toolbar>
      <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
        <MenuIcon />
      </IconButton>
      <Typography variant='h6' className={classes.title}>
        <Link className={classes.link} to='/'>React Examples Kit</Link>
      </Typography>
    </Toolbar>
  </AppBar>;
};

export default Header;

function useStyles() {
  return makeStyles(theme => ({
    title: {
      flexGrow: 1,
    },
    link: {
      color: 'white',
      textDecoration: 'none',
    },
  }))();
}