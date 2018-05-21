import React from 'react'
import {render} from 'react-dom'
import App from './App'
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store/configureStore";

// render(
//   <App/>,
//   document.getElementById('root')
// )
//

const preloadedStore = {
  someData: '123'
}

const store = configureStore(preloadedStore);

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
