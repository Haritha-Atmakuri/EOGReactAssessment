import React from 'react';
import createStore from './store/index';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
import { 
 MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import {
  Grid
} from '@material-ui/core';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import { actions } from './store/actions';
import Dashboard from './components/Dashboard';
import MapVisualization from './components/MapVisualization';
import GraphVisualization from './components/GraphVisualization';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

import NowWhat from './components/NowWhat';
import { BrowserRouter } from 'react-router-dom';
// import Main from './components/main';

const store = createStore();
const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(39,49,66)',
    },
    secondary: {
      main: 'rgb(197,208,222)',
    },
    background: {
      default: 'rgb(226,231,238)',
    },
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <BrowserRouter>
      <Wrapper>
        <Header />
        <Grid container spacing={10}>
          <Grid item xs={4}>
            <Dashboard />
          </Grid>
          <Grid item xs={8}>
            <GraphVisualization />
          </Grid>
          <Grid item xs={12}>
            <MapVisualization />
          </Grid>
        </Grid>
      </Wrapper>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>
);

export default App;
