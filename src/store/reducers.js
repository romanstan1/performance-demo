
const initialState = {
  basket: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET": {
      return {
        ...state,
        basket: [].concat(state.basket, action.payload)
      }
    }
    case "": {
      return {
        ...state,
        basket: [].concat(state.basket, action.payload)
      }
    }
    default:
      return state;
  }
}
