import React from 'react'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload';

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    padding-top: 20px;
  }
  .lazyload-placeholder {
    background: grey;
  }
  .imageWrap {
    height: 300px;
    width: 90%;
    margin: 20px 0;
    background: lightgrey;
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
`;
const homeImages = (ctx => ctx.keys().map(ctx))(require.context('./assets', true, /.*/))

// var image = document.images[0];
// var downloadingImage = new Image();
// downloadingImage.onload = function(){
//     image.src = this.src;
// };
// downloadingImage.src = "https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg?resize=640%2C426"

const Home = () =>
<StyledHome>
  <h2>Home Page</h2>
    {
      homeImages.map(img =>
      <LazyLoad height={300} offset={100} key={img}>
        <div className='imageWrap'>
          <img src={img} alt=""/>
        </div>
      </LazyLoad>
      )
    }
</StyledHome>

export default Home
