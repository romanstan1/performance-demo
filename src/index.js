import React from 'react'
import {render} from 'react-dom'
import App from './App'
import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
import configureStore from "./store/configureStore";
import { injectGlobal } from 'styled-components';
import { ConnectedRouter } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import {lightgrey, mediumgrey, darkgrey, backgroundgrey, offwhite} from './colors'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const history = createBrowserHistory()

const preloadedStore = {}

const store = configureStore(preloadedStore);

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      // Name of the rule
      root: {
        // Some CSS
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        background: `linear-gradient(45deg, rgba(255, 255, 255, .9) 30%, rgba(255, 255, 255, .9) 90%)`,
        // background: 'red',
        borderRadius: 50,
        // border: `2px solid ${offwhite}`,
        opacity: 1,
        color: darkgrey,
        textTransform: 'none',
        height: 36,
        padding: '12px 20px',
        // boxShadow: '0 3px 5px 2px rgba(255, 255, 255, .1)',
      },
    },
  },
});

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
)

injectGlobal`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }
  html {
    background-color: #f4f4f4;
  }
  body {
    background-color: ${backgroundgrey};
    max-width: 750px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  div.divider {
    max-width: 710px;
    margin: 20px;
    width: calc(100vw - 40px);
    border-bottom: 1px solid ${lightgrey};
  }
`
