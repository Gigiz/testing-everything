import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import LaunchScreen from '@src/components/LaunchScreen/LaunchScreen';

const WelcomePage = lazy(() => import('@src/pages/WelcomePage/WelcomePage'));

const Main = () => <Suspense fallback={<LaunchScreen />}>
  <Switch>
    <Route exact path='/' component={WelcomePage} />
    <Route render={() => <div>404</div>} />
  </Switch>
</Suspense>;

export default Main;
