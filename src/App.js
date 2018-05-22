import React from "react";
import { Route, Switch } from "react-router-dom";
// import routes from "./routes";
import Nav from './Nav'
import Loadable from 'react-loadable';
import Home from './Home'

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Loadable from 'react-loadable';
//
// const Loading = () => <div>Loading...</div>;
//
// const Home = Loadable({
//   loader: () => import('./routes/Home'),
//   loading: Loading,
// });
//
// const About = Loadable({
//   loader: () => import('./routes/About'),
//   loading: Loading,
// });
//
// const App = () => (
//   <Router>
//     <Switch>
//       <Route exact path="/" component={Home}/>
//       <Route path="/about" component={About}/>
//     </Switch>
//   </Router>
// );

// https://reactjs.org/docs/code-splitting.html

const Loading = () => <div>Loading...</div>

// const Home = Loadable({
//   loader: () => import("./Home"),
//   loading: Loading,
// })

const Striped = Loadable({
  loader: () => import(/* webpackPrefetch: true */ './ProductListing/Striped'),
  loading: Loading,
})

const Plain = Loadable({
  loader: () => import(/* webpackPrefetch: true */ './ProductListing/Plain'),
  loading: Loading,
})

const Basket = Loadable({
  loader: () => import(/* webpackPrefetch: true */ './Basket'),
  loading: Loading,
})

const App = () => {
  setTimeout(() => {
    Striped.preload()
    Plain.preload()
    Basket.preload()
  }
  ,0)
  return <div>
    <Nav/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/plain" component={Plain}/>
      <Route exact path="/striped" component={Striped}/>
      <Route exact path="/basket" component={Basket}/>
    </Switch>
  </div>
}

export default App

// {routes.map((route, i) => <Route key={i} {...route} />)}
