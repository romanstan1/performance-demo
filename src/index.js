import React from 'react'
import {render} from 'react-dom'
import App from './App'
import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
import configureStore from "./store/configureStore";
import { injectGlobal } from 'styled-components';
import { ConnectedRouter } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'

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
  }
  html {
    background-color: #f4f4f4;
  }
  body {
    background-color: #f8f8f8;
    font-family: 'Raleway', sans-serif;
    max-width: 750px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`
