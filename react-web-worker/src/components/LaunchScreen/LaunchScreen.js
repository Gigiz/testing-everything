import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const LaunchScreen = () => {
  const classes = useStyles();
  return <div className={classes.circularProgress}><CircularProgress /></div>;
};

export default LaunchScreen;

function useStyles() {
  return makeStyles(() => ({
    circularProgress: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '50vh',
    },
  }))();
}
