import React from 'react';
// import Home from "./Home";
// import Striped from "./ProductListing/Striped";
// import Plain from "./ProductListing/Plain";
// import Basket from "./Basket";
import Loadable from 'react-loadable';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Loadable from 'react-loadable';


const Loading = () => <div>Loading...</div>

const Home = Loadable({
  loader: () => import("./Home"),
  loading: Loading,
})

const Striped = Loadable({
  loader: () => import('./ProductListing/Striped'),
  loading: Loading,
})

const Plain = Loadable({
  loader: () => import('./ProductListing/Plain'),
  loading: Loading,
})

const Basket = Loadable({
  loader: () => import('./Basket'),
  loading: Loading,
})

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/striped",
    exact: true,
    component: Striped
  },
  {
    path: "/plain",
    exact: true,
    component: Plain
  },
  {
    path: "/basket",
    exact: true,
    component: Basket
  },
  {
    component: Home
  }
];

export default routes;
