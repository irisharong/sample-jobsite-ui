import '@fake-db';
import React from "react";
import ReactDOM from "react-dom";
import Routes from "app/route/Routes";
import {createTheme, MuiThemeProvider} from '@material-ui/core/styles'
import ReactGA from 'react-ga';

import { Provider } from "react-redux";
import store from "store/rootReducer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: '#1E3E85',
    },
    secondary: {
      main: '#52B4DA',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 16,
      },
      containedSecondary: {
        color: '#fff',
      },
    }, 
  }, 
});

// Google Anaylytics
const TRACKING_ID = "UA-209082847-1";
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview('/landingpage');


ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Routes />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
