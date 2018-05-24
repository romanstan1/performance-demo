import React from 'react'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload';
import {lightgrey, mediumgrey, darkgrey, backgroundgrey} from '../colors'


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
`;
const homeImages = (ctx => ctx.keys().map(ctx))(require.context('./assets', true, /.*/))

const Home = () =>
<StyledHome>
    {
      homeImages.map(img =>
      <LazyLoad height={300} offset={100} key={img}>
        <div className='imageWrap'>
          <img src={img} alt=""/>
        </div>
      </LazyLoad>
      )
    }
    <div className="infoBox">

      <h2>Products</h2>
      <div className="content">
        <span>Sunglasses</span> <span>Eyeglasses</span>
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

export default Home
