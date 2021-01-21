import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import { Typography, Grid, Box, Button } from '@material-ui/core'

import Delivery from './Delivery'
import Order from './Order'

import * as actions from '../actions'

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    fontWeight: 500,
    marginBottom: theme.spacing(2),
  },
}))

export default function Cart() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const productIds = useSelector((state) => state.cart.productIds)

  useEffect(() => {
    dispatch(actions.loadCart())
  }, [dispatch])

  const goBack = () => {
    history.push('/products')
  }

  if (productIds.length === 0) {
    return (
      <Box my={10}>
        <Grid container direction="column" justify="center">
          <Typography variant="h4" component="h1" className={classes.title}>
            Your bag is empty
          </Typography>
          <Button
            color="secondary"
            size="large"
            variant="text"
            onClick={goBack}
          >
            Continue Shopping
          </Button>
        </Grid>
      </Box>
    )
  }

  return (
    <>
      <Box mt={4} mb={5}>
        <Typography variant="h4" component="h1" className={classes.title}>
          Order Summary
        </Typography>
      </Box>
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
