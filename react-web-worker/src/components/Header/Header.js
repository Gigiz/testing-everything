import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const Header = () => {
  const classes = useStyles();
  const [ currentTime, setCurrentTime ] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(updateCurrentTime, 1000);

    return (() => {
      clearInterval(intervalId);
    });
  }, []);

  const updateCurrentTime = () => {
    setCurrentTime(new Date());
  };

  return (
    <div className={classes.headerContent}>
      <Container maxWidth='md'>
        <Typography component='h2' variant='h3' align='center' color='textPrimary' gutterBottom>
          React meets Web Worker
        </Typography>
        <Typography variant='h5' align='center' color='textSecondary' paragraph>
          blablabla
        </Typography>
        <Typography variant='h5' align='center' color='textSecondary' paragraph>
          {`${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`}
        </Typography>
      </Container>
    </div>
  );
};

export default Header;

function useStyles() {
  return makeStyles(theme => ({
    headerContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    headerButtons: {
      marginTop: theme.spacing(4),
    },
  }))();
}