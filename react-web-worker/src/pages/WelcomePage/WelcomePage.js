import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import MainContainer from '@src/components/MainContainer/MainContainer';

const WelcomePage = ({ history }) => {
  const classes = useStyles();

  return <MainContainer>
    <Container className={classes.cardGrid} maxWidth='md'>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={4}>
          <Card>
            <CardHeader
              title='React Web Worker'
              subheader='2019'
            />
            <CardContent className={classes.cardContent}>
              <Typography>
                React meets Web Worker
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small' color='primary' onClick={() => { history.push('/sorting-user'); }}>
                Show me more
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Card>
            <CardHeader
              title='Todo'
              subheader='2019'
            />
            <CardContent className={classes.cardContent}>
              <Typography>
                Todo
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small' color='primary'>
                
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Card>
            <CardHeader
              title='Todo'
              subheader='2019'
            />
            <CardContent className={classes.cardContent}>
              <Typography>
                Todo
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small' color='primary'>
                
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </MainContainer>
};

export default withRouter(WelcomePage);

function useStyles() {
  return makeStyles(theme => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
  }))();
}
