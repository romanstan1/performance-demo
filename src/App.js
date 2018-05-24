import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from './Nav'
import Loadable from 'react-loadable';
import Home from './Home'
import styled from 'styled-components'

const Loading = () => <div>Loading...</div>

const Footer = styled.footer`
  background: #08167c;
  padding: 10px 5%;
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  text-align: center;
  height: 50px;
`;

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
  Striped.preload()
  Plain.preload()
  Basket.preload()
  return <div>
    <Nav/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/plain" component={Plain}/>
      <Route exact path="/striped" component={Striped}/>
      <Route exact path="/basket" component={Basket}/>
      <Route component={Home}/>
    </Switch>
    <Footer/>
  </div>
}

export default App
