import moxios from 'moxios'
import configureStore from 'store/configureStore'
import { loadProducts, loadProduct } from './actions'

beforeEach(() => {
  moxios.install()
})
afterEach(() => {
  moxios.uninstall()
})

describe('products action creator', () => {
  test('adds all products to store', () => {
    const products = [
      {
        id: 1,
        name: 'Product',
        desc: 'Description',
        image: 'Url',
        category: 'Category',
        price: 100,
      },
      {
        id: 2,
        name: 'Product',
        desc: 'Description',
        image: 'Url',
        category: 'Category',
        price: 100,
      },
    ]
    const store = configureStore()

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: products,
      })
    })

    return store.dispatch(loadProducts('')).then(() => {
      const newState = store.getState()
      expect(newState.products.items).toEqual(products)
    })
  })

  test('adds user selected product to store', () => {
    const products = [
      {
        id: 1,
        name: 'Product',
        desc: 'Description',
        image: 'Url',
        category: 'Category',
        price: 100,
      },
    ]
    const store = configureStore()

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: products,
      })
    })

    return store.dispatch(loadProduct('1')).then(() => {
      const newState = store.getState()
      expect(newState.products.items).toEqual([products])
    })
  })
})
