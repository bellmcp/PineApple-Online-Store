import { ADD_TO_CART, REMOVE_FROM_CART } from './actions'
import { LOAD_PRODUCTS_SUCCESS } from 'modules/products/actions'

const initialState = {
  price: 0,
  productIds: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const { productId } = action.payload

      if (state.productIds.includes(productId)) return state //product already exists

      return {
        ...state,
        productIds: [...state.productIds, productId], // [1, 2, 3, new]
      }
    }
    case REMOVE_FROM_CART:
      return {
        ...state,
        productIds: state.productIds.filter(
          (id) => +id !== action.payload.productId //deleted matched productId //+ is covert string to num
        ),
      }
    case LOAD_PRODUCTS_SUCCESS:
      let price = 0
      for (let product of action.payload.products) {
        price += product.price
      }
      return { ...state, price }
    default:
      return state
  }
}
