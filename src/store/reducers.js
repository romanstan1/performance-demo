
const initialState = {
  someData: '123'
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CATEGORIES_SUCCESS": {
    }
    case "SWIPE_SUBJECT": {
    }
    default:
      return state;
  }
}
