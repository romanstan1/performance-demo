import React from 'react'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload';

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .lazyload-placeholder {
    background: grey;
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
    height: 70vh;
    background: #f8f8f8;
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

    </div>
</StyledHome>

export default Home
