import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from './Nav'
import Loadable from 'react-loadable';
import Home from './Home'
import styled from 'styled-components'
import {lightgrey, mediumgrey, darkgrey, backgroundgrey} from './colors'

const Loading = () => <div>Loading...</div>

const Footer = styled.footer`
  background: #fff;
  padding: 40px 5% 20px 5%;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
  text-align: center;
  h3 {
    color: ${darkgrey};
    text-align: center;
    font-weight: 400;
    font-size: 16px;
  }
  input {
    display: block;
    height: 38px;
    line-height: 38px;
    outline: none;
    ${'' /* text-align:  */}
    text-indent: 10px;
    width: calc(100% - 100px);
    margin: 20px 50px;
    border: 1px solid ${lightgrey};
    :focus {
      ::placeholder {
      color: white;
      }
    }
    ::placeholder {
      color: ${mediumgrey};
      font-size: 13px;
      font-family: "Raleway", sans-serif;
    }
  }
  h4 {
    color: ${mediumgrey};
    text-align: center;
    font-weight: 400;
    font-size: 13px;
    margin: 20px 40px;
  }
  div.content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    span {
      color: #676f78;
      font-size: 12px;
      margin: 10px;
    }
  }
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
    <Footer>
      <h3>Sign up to our newsletter</h3>
      <input type="text" placeholder="Enter email address"/>
      <h3>Get in touch!</h3>
      <h4>We’re available by phone (0203 567 9200) and chat every day, 9 a.m – 9 p.m.</h4>

      <div className="divider"/>

      <div className='content'>
        <span>Terms and conditions</span>
        <span>Privacy </span>
        <span>Cookie policy</span>
      </div>


    </Footer>
  </div>
}

export default App
