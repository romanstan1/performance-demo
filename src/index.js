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

render(
  <Provider store={store}>
    <ConnectedRouter onUpdate={() => console.log('updated')} history={history}>
      <App />
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
    outline: none;
  }
  html {
    background-color: #f4f4f4;
  }
  body {
    background-color: ${backgroundgrey};
    max-width: 510px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  div.divider {
    max-width: 510px;
    padding: 20px;
    width: 100%;
    &::after {
      content:'';
      width: 100%;
      display: block;
      border-bottom: 1px solid ${lightgrey};
    }
  }
`
