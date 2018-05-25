import React, {Component} from 'react'
import {Style, AddButton} from './style'
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import MenuItem from '@material-ui/core/MenuItem';


export default class ProductDisplay extends Component {
  constructor(props) {
    super(props)
    const routeDetails = props.match.params.id.split('-')
    this.state = {
      brand: routeDetails[0],
      price: routeDetails[1],
      image: `${routeDetails[2]}.jpg`,
      color: 'jet black elclipse'
    }
  }

  handleChange = e => {
    this.setState({ color: e.target.value })
  }

  handleAddToBasket = e => {
    this.setState({ color: e.target.value })
  }

  render() {
    const {image, price, brand} = this.state
    return (
      <Style>
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
        <AddButton>
          <MenuItem>Add To Basket</MenuItem>
        </AddButton>

        <div className='shipping'>
          <h3>Free shipping and returns on every order</h3>
          <p>
            We have a 30-day, hassle-free return or exchange policy as well as a one-year,
            no scratch guarantee for our lenses;
            we'll replace your scratched lenses for free within the first 12 months.
          </p>
        </div>
        <div className='recommended'>
          <h3>Recommended</h3>
          
        </div>
      </Style>
    )
  }
}
