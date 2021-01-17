import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Delivery from './Delivery'
import Order from './Order'

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
}))

export default function Cart() {
  const classes = useStyles()

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
