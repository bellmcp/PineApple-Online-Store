import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Cart from './Cart'

export default function Routes() {
  return (
    <Switch>
      <Route path="/cart">
        <Cart></Cart>
      </Route>
    </Switch>
  )
}
