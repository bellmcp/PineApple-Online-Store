import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Delivery from './Delivery'
import Order from './Order'

import * as actions from '../actions'

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
}))

export default function Cart() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const productIds = useSelector((state) => state.cart.productIds)

  useEffect(() => {
    dispatch(actions.loadCart())
  }, [dispatch])

  if (productIds.length === 0) {
    return <p className={classes.title}>No order found</p>
  }

  return (
    <>
      <Typography variant="h4" component="h1" className={classes.title}>
        Order Summary
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={8}>
          <Order></Order>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Delivery></Delivery>
        </Grid>
      </Grid>
    </>
  )
}
