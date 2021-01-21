import axios from 'axios'
import * as uiActions from 'modules/ui/actions'
import * as productActions from 'modules/products/actions'

const ADD_TO_CART = 'app/cart/ADD_TO_CART'
const REMOVE_FROM_CART = 'app/cart/REMOVE_FROM_CART'
const CHECKOUT_SUCCESS = 'app/cart/CHECKOUT_SUCCESS'

function addToCart(productId) {
  return (dispatch) => {
    dispatch(
      uiActions.setFlashMessage('The product has been added to your cart')
    )

    dispatch({
      type: ADD_TO_CART,
      payload: {
        productId,
      },
    })
  }
}

function loadCart() {
  return (dispatch, getState) => {
    const {
      cart: { productIds },
    } = getState()

    if (productIds.length === 0) {
      return dispatch(productActions.clearProducts())
    }

    // [1, 2, 3] => id=1&id=2id=3
    const query = productIds.map((id) => `id=${id}`).join('&') // ['id=1', 'id=2', 'id=3'].join('&')
    dispatch(productActions.loadProducts(`?${query}`))
  }
}

function removeFromCart(productId) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: {
        productId,
      },
    })

    dispatch(loadCart()) //RELOAD THE CART
  }
}

function checkout(deliveryInfo) {
  return async (dispatch, getState) => {
    const {
      cart: { productIds, price },
    } = getState()

    const { data } = await axios.post('/orders', {
      deliveryInfo,
      productIds,
      price,
    })

    dispatch({ type: CHECKOUT_SUCCESS, payload: { order: data } })
    dispatch(uiActions.setFlashMessage('Your order has been placed'))
  }
}

export {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT_SUCCESS,
  addToCart,
  loadCart,
  removeFromCart,
  checkout,
}
