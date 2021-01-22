import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid, Box } from '@material-ui/core'
import currencyFormat from 'utils/currencyFormat'
import CartProduct from './CartProduct'

const useStyles = makeStyles((theme) => ({
  products: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  price: {
    color: theme.palette.secondary.main,
    marginTop: theme.spacing(2),
  },
}))

export default function Order() {
  const classes = useStyles()
  const price = useSelector((state) => state.cart.price)
  const products = useSelector((state) => state.products.items)

  return (
    <>
      <div className={classes.products}>
        {products.map((product) => (
          <CartProduct key={product.id} {...product}></CartProduct>
        ))}
      </div>
      {products.length > 0 && (
        <Box my={4} mx={2}>
          <Grid container justify="space-between">
            <Typography variant="h5" component="h3" style={{ fontWeight: 500 }}>
              Total
            </Typography>
            <Typography
              variant="h5"
              component="h3"
              style={{ fontWeight: 500 }}
              color="secondary"
            >
              {currencyFormat(price)}
            </Typography>
          </Grid>
        </Box>
      )}
    </>
  )
}
