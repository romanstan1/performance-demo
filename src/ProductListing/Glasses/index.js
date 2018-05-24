import React from 'react'
import {Styles} from './style'
import landingImage from './glasses.jpg'

const allAssets = (ctx => ctx.keys().map(ctx))(require.context('./assets', true, /.*/))


const brandNames = [
  'Specsavers',
  'Aurora',
  'Specsavers',
  'Jeff Banks',
  'Specsavers',
  'Specsavers',
  'Kylie Minogue',
  'Specsavers',
  'Cath Kidston'
]
const Glasses = () =>
<Styles>
  <div className="landing-image">
    <img src={landingImage} alt=""/>
  </div>

  <div className="heading">All Glasses</div>
  <div className="subheading">Designed in-house and crafted from top-tier materials</div>

  {
    allAssets.map({img, i} =>
    <div className='image-wrap' key={img}>
      <img src={img} alt=""/>
      <div>
        <div className="name">{brandNames[0]}</div>
        <div className="price"></div>
      </div>
    </div>
    )
  }
</Styles>
export default Glasses
