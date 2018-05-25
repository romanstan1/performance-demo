import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from './Nav'
import Footer from './Footer'
import Loadable from 'react-loadable';
import Home from './Home'
// import ProductListing from './ProductListing'
import {lightgrey, mediumgrey, darkgrey, backgroundgrey} from './colors'

const Loading = () => <div>Loading...</div>

const ProductListing = Loadable({
  loader: () => import(/* webpackPrefetch: true */ './ProductListing'),
  loading: Loading,
})

const ProductDisplay = Loadable({
  loader: () => import(/* webpackPrefetch: true */ './ProductDisplay'),
  loading: Loading,
})

const Basket = Loadable({
  loader: () => import(/* webpackPrefetch: true */ './Basket'),
  loading: Loading,
})

const App = () => {
  ProductDisplay.preload()
  ProductListing.preload()
  Basket.preload()
  return <div>
    <Nav/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/sunglasses" component={ProductListing} />
      <Route exact path="/glasses" component={ProductListing} />
      <Route exact path="/basket" component={Basket}/>
      <Route exact path="/pdp/:id" component={ProductDisplay}/>
      <Route component={Home}/>
    </Switch>
    <Footer/>
  </div>
}
export default App
