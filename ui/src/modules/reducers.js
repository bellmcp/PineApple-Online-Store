import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import ui from 'modules/ui/reducer'
import products from 'modules/products/reducer'
import cart from 'modules/cart/reducer'

//ROOT REDUCER
export default (history) =>
  combineReducers({
    router: connectRouter(history),
    ui,
    products,
    cart,
  })
