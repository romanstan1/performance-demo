import React, {Component, Fragment} from 'react'
import {Styles} from './style'
import landingGlassesImage from './assets/glasses.jpg'
import landingSunglassesImage from './assets/sunglasses.jpg'
import Divider from '@material-ui/core/Divider';
import {Link} from 'react-router-dom'

const glassesAssets = (ctx => ctx.keys().map(ctx))(require.context('./assets/glasses', true, /.*/))
const sunglassesAssets = (ctx => ctx.keys().map(ctx))(require.context('./assets/sunglasses', true, /.*/))

const brandNames = [
  'The Spectacle Store',
  'Aurora',
  'The Spectacle Store',
  'Jeff Banks',
  'The Spectacle Store',
  'The Spectacle Store',
  'Kylie Minogue',
  'The Spectacle Store',
  'Cath Kidston'
]
const prices = [
  '79',
  '120',
  '89',
  '129',
  '79',
  '79',
  '169',
  '79',
  '129'
]

const glassesContent = {
  heading: 'Glasses',
  subheading: 'Designed in-house and crafted from top-tier materials',
  landingImage: landingGlassesImage,
  assets: glassesAssets
}

const sunglassesContent = {
  heading: 'Sunglasses',
  subheading: 'Designed in-house and crafted from top-tier materials',
  landingImage: landingSunglassesImage,
  assets: sunglassesAssets
}

function getRouteContent(url) {
  const route = url.substring(1)
  let content
  if(route === 'glasses') {  content = glassesContent}
  else { content = sunglassesContent }
  return content
}

export default class ProductListing extends Component {

  state = {
    content: getRouteContent(this.props.match.url)
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    const previousUrl = this.props.match.url
    const nextUrl = nextProps.match.url
    if(previousUrl !== nextUrl) {
      this.setState({content: getRouteContent(nextUrl)})
    }
  }
  render() {
    const {content} = this.state
    return (
      <Fragment>
        <Styles>
          <div className="landing-image">
            <img src={content.landingImage} alt=""/>
          </div>

          <div className="heading">{content.heading} </div>
          <div className="subheading">{content.subheading} </div>
          <br/><br/>
          <Divider style={{width:'100%'}} />

          {
            content.assets.map((img, i) => {
              const brand = brandNames[i%9]
              const price = prices[i%9]
              return (
                <Link to={`/pdp/${brand}-${price}-${img.slice(1, -4)}`} key={img}>
                <div className='image-wrap'>
                  <img src={img} alt=""/>
                  <div className="text">
                    <div className="name">{brand}</div>
                    <div className="price">£{price}</div>
                  </div>
                </div>
              </Link>
              )
            })
          }
          <br/>
        </Styles>
      </Fragment>
    )
  }
}
