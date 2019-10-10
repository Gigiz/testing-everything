import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import * as userService from '@src/services/users/users';
import LaunchScreen from '@src/components/LaunchScreen/LaunchScreen';
import MainContainer from '@src/components/MainContainer/MainContainer';

const SortingUserList = () => {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(updateCurrentTime, 1000);

    fetchAllUsers();

    return (() => {
      userService.stopWebWorker();
      clearInterval(intervalId);
    });
  }, []);

  const updateCurrentTime = () => {
    setCurrentTime(new Date());
  };

  const fetchAllUsers = async () => {
    setLoading(true);
    const users = await userService.fetchUsers();
    setUsers(users);
    setLoading(false);
  };

  const sortAscendingNumberOfComments = async () => {
    const sortedUserAscending = await userService.sortUsersByCommentsNumberAscending(users);
    setUsers(sortedUserAscending);
  };

  const sortDescendingNumberOfComments = () => {
    const sortedUserDescending = userService.sortUsersByCommentsNumberDescending(users);
    setUsers(sortedUserDescending);
  };

  return <MainContainer>
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
    <div>
      <Grid container spacing={2} justify='center'>
        <Grid item>
          <Button variant='contained' color='primary' onClick={() => sortAscendingNumberOfComments()}>
            Sort Acending Number of Comments
          </Button>
        </Grid>
        <Grid item>
          <Button variant='outlined' color='primary' onClick={() => sortDescendingNumberOfComments()}>
            Sort Descending Number of Comments
          </Button>
        </Grid>
      </Grid>
    </div>
    <Container className={classes.cardGrid} maxWidth='md'>
      {isLoading && <LaunchScreen />}
      {!isLoading && <Grid container spacing={4}>
        {users.slice(0, 20).map((user, index) => (
          <Grid item key={index} xs={12} sm={12} md={12}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar src={user.profilePicture} className={classes.avatar} />
                }
                title={user.name}
                subheader={user.registrationDate.toString()}
              />
              <CardContent className={classes.cardContent}>
                <Typography>
                  {user.profileDescription}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small' color='primary'>
                  {user.commentsNumber} comments
              </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>}
    </Container>
  </MainContainer>
};

export default SortingUserList;

function useStyles() {
  return makeStyles(theme => ({
    headerContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    headerButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    cardContent: {
      flexGrow: 1,
    },
  }))();
}
