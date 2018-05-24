import React from 'react'
import {render} from 'react-dom'
import App from './App'
import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
import configureStore from "./store/configureStore";
import { injectGlobal } from 'styled-components';
import { ConnectedRouter } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import {lightgrey, mediumgrey, darkgrey, backgroundgrey} from './colors'


const history = createBrowserHistory()

const preloadedStore = {}

const store = configureStore(preloadedStore);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
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
