import {lightgrey, mediumgrey, darkgrey, backgroundgrey} from '../../colors'
import styled from 'styled-components'

export const Styles = styled.div`
  padding: 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
  text-align: center;
  background: white;
  div.landing-image {
    max-height: 260px;
    overflow: hidden;
    display: flex;
    height: 40vw;
    position: relative;
    width: 100%;
    img {
      position: absolute;
      top:50%;
      transform: translateY(-50%);
      left: 0;
      width: 100%;
      height:auto;
    }
  }
  div.heading {
    margin: 10px;
    padding-top: 30px;
    font-weight: 600;
    font-size: 19px;
  }
  div.subheading {
    margin: 10px;
    font-size: 15px;
    padding: 0 10%;
  }
  div.image-wrap {
    width: 100%;
    padding: 10px 0px;
    img {
      display: block;
      width: 100%;
    }
  }
`;
