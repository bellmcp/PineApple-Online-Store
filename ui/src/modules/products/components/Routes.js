import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProductList from './ProductList'
import ProductDetails from './ProductDetails'

export default function Routes() {
  return (
    <Switch>
      <Route path="/products/:id">
        <ProductDetails></ProductDetails>
      </Route>
      <Route path="/products">
        <ProductList></ProductList>
      </Route>
    </Switch>
  )
}
