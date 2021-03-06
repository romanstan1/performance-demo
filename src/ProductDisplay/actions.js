
import uuid from 'uuid/v4'

export const addToBasket = (brand, price, image, color) => (
  {
    type: 'ADD_TO_BASKET',
    payload: { brand, price, image, color, id: uuid() }
  })
