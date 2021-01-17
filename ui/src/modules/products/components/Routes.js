import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import ProductList from './ProductList'
import ProductDetails from './ProductDetails'

export default function Routes() {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route path={`${path}/:id`}>
        <ProductDetails></ProductDetails>
      </Route>
      <Route path={path}>
        <ProductList></ProductList>
      </Route>
    </Switch>
  )
}
