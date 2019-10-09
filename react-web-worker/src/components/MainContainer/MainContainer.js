import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const MainContainer = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.main}>
    <div className={classes.root}>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  </div>
};

export default MainContainer;

function useStyles() {
  return makeStyles(theme => ({
    main: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: theme.spacing(2),
    },
    root: {
      flexGrow: 1,
      flex: '1 0 100%',
    },
    content: {
      height: '100%',
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(1)
      },
    },
  }))();
}
