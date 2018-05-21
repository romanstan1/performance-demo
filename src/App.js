import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import './index.css'

const App = () =>
  <div>
    <Switch>
      {routes.map((route, i) => <Route key={i} {...route} />)}
    </Switch>
  </div>

export default App
