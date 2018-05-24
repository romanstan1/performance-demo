import React from 'react'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload';
import {lightgrey, mediumgrey, darkgrey, backgroundgrey, offwhite} from '../colors'
import Button from '@material-ui/core/Button';
import homeOne from './assets/home100.jpg'
import homeTwo from './assets/home200.jpg'
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .lazyload-placeholder {
    background: ${mediumgrey};
  }
  .imageWrap {
    max-height: 600px;
    width: 100%;
    height: 70vw;
    margin: 0px 0;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      overflow: hidden;
      height: auto;
      display: block;
      width: 100%;
      position: absolute;
      top: 50%;
      transform: translate(0%, -50%);
    }
  }
  .infoBox {
    padding: 25px 0;
    width: 100%;
    h2 {
      font-size: 16px;
      padding: 12px 35px;
      color: ${darkgrey};
    }
    div.content {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      span {
        width: 50%;
        font-size: 13px;
        color: ${mediumgrey};
        padding: 12px 35px;
      }
    }
  }
`

const MenuButton = styled.div`
  transform: translateY(80px);
  li {
    font-size: 14px;
    font-family: 'Raleway', sans-serif;
    color: ${backgroundgrey};
    border-radius: 40px;
    border: 1px solid ${backgroundgrey};
    background:rgb(252, 252, 252, 0);
    padding: 6px 22px;
    &:hover {
      color: ${darkgrey};
      background:rgb(252, 252, 252, 0.9)
    }
  }
`

const Home = () =>
  <StyledHome>
    <LazyLoad height={300} offset={100}>
      <div className='imageWrap'>
        <img src={homeOne} alt=""/>
        <MenuButton>
          <Link to="glasses">
            <MenuItem>Shop Glasses</MenuItem>
          </Link>
        </MenuButton>
      </div>
    </LazyLoad>
    <LazyLoad height={300} offset={100}>
      <div className='imageWrap'>
        <img src={homeTwo} alt=""/>

        <MenuButton>
          <Link to="sunglasses">
            <MenuItem>Shop Sunglasses</MenuItem>
          </Link>
        </MenuButton>

      </div>
    </LazyLoad>

    <div className="infoBox">
      <h2>Products</h2>
      <div className="content">
        <span>Sunglasses</span> <span>Glasses</span>
        <span>Contact Lenses</span> <span>Accessories</span>
      </div>
      <div className="divider"/>
      <h2>Visit a store</h2>
      <div className="content">
        <span>Find a location</span><span>Book an eye test</span>
      </div>
      <div className="divider"/>
      <h2>About us</h2>
      <div className="content">
        <span>Our story</span> <span>Blog</span>
        <span>Careers</span> <span>Menu Item</span>
        <span>Menu Item</span> <span>Menu Item</span>
      </div>
    </div>
  </StyledHome>

export default Home;
