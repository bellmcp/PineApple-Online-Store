import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProductRoutes from 'modules/products/components/Routes'
import CartRoutes from 'modules/cart/components/Routes'

export default function Routes() {
  return (
    <Switch>
      <Route path="/products">
        <ProductRoutes></ProductRoutes>
      </Route>
      <Route path="/cart">
        <CartRoutes></CartRoutes>
      </Route>
    </Switch>
  )
}
