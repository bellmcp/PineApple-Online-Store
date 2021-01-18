import { combineReducers } from 'redux'

import ui from 'modules/ui/reducer'
import products from 'modules/products/reducer'
import cart from 'modules/cart/reducer'

//ROOT REDUCER
export default combineReducers({
  ui,
  products,
  cart,
})
