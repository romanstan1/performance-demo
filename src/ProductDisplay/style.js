import styled from 'styled-components'
import {lightgrey, mediumgrey, darkgrey, backgroundgrey, electricblue} from '../colors'

export const Style = styled.div`
  background: white;
  padding: 0 0 20px 0;
  div.image-wrap {
    width: 100%;
    position: relative;
    img {
      height:auto;
      max-width: 100%;
    }
    div.text {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      bottom: 0px;
      width: 100%;
      div.name {
        font-weight: 600;
        font-size: 17px;
      }
      div.price {
        margin-top: 5px;
        font-size: 15px;
      }
    }
  }
  div.radios {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    .black svg {
      fill: black;
    }
    .whiskey svg {
      fill: #877882;
    }
    .midnight svg {
      fill: #042666;
    }
  }
  div.color {
    font-style: italic;
    width: 100%;
    font-size: 14px;
    text-align: center;
    text-transform: capitalize;
    margin-top: 8px;
    color: ${darkgrey};
  }
`

export const AddButton = styled.div`
  li {
    margin: 50px auto 20px auto;
    width: 200px;
    justify-content: center;
    font-size: 14px;
    font-family: 'Raleway', sans-serif;
    color: ${backgroundgrey};
    border-radius: 40px;
    ${'' /* border: 1px solid ${darkgrey}; */}
    background:${electricblue};
    ${'' /* background:rgb(252, 252, 252, 0); */}
    padding: 10px 28px;
    text-align: center;
    span {

    }
    &:hover {
      ${'' /* color: ${darkgrey}; */}
      background:${darkgrey};
      ${'' /* background:rgb(252, 252, 252, 0.9) */}
    }
  }
`
