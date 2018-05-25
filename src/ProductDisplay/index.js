import React, {Component} from 'react'
import {Style, Shipping, Recommended} from './style'
import {CTAButton} from '../modules/AddButton'
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import MenuItem from '@material-ui/core/MenuItem';
import {connect} from 'react-redux'
import {addToBasket} from './actions'


const recommendedAssets= (ctx => ctx.keys().map(ctx))(require.context('./recommended', true, /.*/))

const recommendedBrands =  [
  'Specsavers',
  'Aurora',
  'Specsavers'
]
const recommendedPrices =  [
  '79',
  '129',
  '89'
]

class ProductDisplay extends Component {
  constructor(props) {
    super(props)
    const routeDetails = props.match.params.id.split('-')
    this.state = {
      brand: routeDetails[0],
      price: routeDetails[1],
      image: `${routeDetails[2]}.jpg`,
      color: 'jet black elclipse',
      added: false
    }
  }

  handleChange = e => {
    this.setState({ color: e.target.value })
  }

  handleAddToBasket = () => {
    const {brand, price, image, color} = this.state
    this.props.dispatch(addToBasket(brand, price, image, color))
    this.setState({added: true})
  }
  componentDidUpdate() {
    if(this.state.added) {
      setTimeout(()=> this.setState({added: false}), 1500)
    }
  }

  render() {
    const {image, price, brand, added} = this.state
    return (
      <Style>

        {/* <div className={added?"notification-bar active" :"notification-bar"}>
          Successfully added to basket!
        </div> */}

        <div className='image-wrap'>
          <img src={'/' + image} alt=""/>
          <div className="text">
            <div className="name">{brand}</div>
            <div className="price">£{price}</div>
          </div>
        </div>

        <div className='radios'>
          <Radio
            checked={this.state.color === 'jet black elclipse'}
            onChange={this.handleChange}
            value="jet black elclipse"
            name="radio-button-demo"
            color="default"
            classes={{ root: 'black'}}
          />
          <Radio
            checked={this.state.color === 'whiskey tortoise'}
            onChange={this.handleChange}
            value="whiskey tortoise"
            name="radio-button-demo"
            color="default"
            classes={{ root: 'whiskey'}}
          />
          <Radio
            checked={this.state.color === 'midnight blue'}
            onChange={this.handleChange}
            value="midnight blue"
            name="radio-button-demo"
            color='default'
            classes={{ root: 'midnight'}}
          />
        </div>
        <div className='color'>{this.state.color}</div>

        <CTAButton>
          <MenuItem onClick={this.handleAddToBasket}>
            {added? 'Successfully added!' :  'Add To Basket'}
          </MenuItem>
        </CTAButton>

        <Shipping>
          <h3>Free shipping and returns on every order</h3>
          <p>
            We have a 30-day, hassle-free return or exchange policy as well as a one-year,
            no scratch guarantee for our lenses;
            we'll replace your scratched lenses for free within the first 12 months.
          </p>
        </Shipping>
        <Recommended>
          <h3>Recommended</h3>

          {
            recommendedAssets.map((img, i) =>
              <div className='image-wrap' key={img}>
                <img src={img} alt=""/>
                <div className="text">
                  <div className="name">{recommendedBrands[i]}</div>
                  <div className="price">£{recommendedPrices[i]}</div>
                </div>
              </div>
            )
          }

        </Recommended>
      </Style>
    )
  }
}

export default connect(state => ({
}))(ProductDisplay)
