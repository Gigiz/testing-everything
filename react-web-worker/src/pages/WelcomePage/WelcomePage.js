import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import * as userService from '@src/services/users/users';

import MainContainer from '@src/components/MainContainer/MainContainer';

const WelcomePage = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    const users = await userService.fetchUsers();
    console.log(users);
  };

  const sortDescendingNumberOfComments = () => {
    const sortedUserDescending = userService.sortUsersByCommentsNumberDescending(users);
    setUsers(sortedUserDescending);
  };

  return <MainContainer>
    <div>
      <Grid container spacing={2} justify='center'>
        <Grid item>
          <Button variant='contained' color='primary'>
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
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {users.map((user, index) => (
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
      </Grid>
    </Container>
  </MainContainer>
};

export default WelcomePage;

function useStyles() {
  return makeStyles(theme => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    cardContent: {
      flexGrow: 1,
    },
  }))();
}
