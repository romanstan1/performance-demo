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
import InfoBox from '../modules/InfoBox';

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .lazyload-placeholder {
    background: ${mediumgrey};
  }
  .imageWrap {
    position: relative;
    font-size: 0;
    img {
      max-width: 100%;
      height: auto;
    }
  }
`

const MenuButton = styled.div`
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
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
          <Link to="/glasses">
            <MenuItem>Shop Glasses</MenuItem>
          </Link>
        </MenuButton>
      </div>
    </LazyLoad>
    <LazyLoad height={300} offset={100}>
      <div className='imageWrap'>
        <img src={homeTwo} alt=""/>

        <MenuButton>
          <Link to="/sunglasses">
            <MenuItem>Shop Sunglasses</MenuItem>
          </Link>
        </MenuButton>

      </div>
    </LazyLoad>
    <InfoBox/>
  </StyledHome>

export default Home;
