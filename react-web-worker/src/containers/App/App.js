import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Main from '@src/containers/Main/Main';
import Header from '@src/components/Header/Header';

const App = () => <BrowserRouter>
  <CssBaseline />
  <Header />
  <Main />
</BrowserRouter>;

export default App;
