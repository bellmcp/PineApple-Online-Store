import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Paper, Typography, Button, Box } from '@material-ui/core'
import CurrencyFormat from 'utils/currencyFormat'

import * as productActions from '../actions'
import * as cartActions from 'modules/cart/actions'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  content: {
    height: '100%',
  },
  image: {
    height: 200,
    borderRadius: '3px',
  },
  amountContainer: {
    marginBottom: theme.spacing(2),
  },
  amount: {
    padding: theme.spacing(0, 2),
  },
}))

export default function ProductDetails() {
  // const [product, setProduct] = useState()
  const classes = useStyles()
  const theme = useTheme()
  const history = useHistory()
  const { id } = useParams() // {id: "2"} <<< STRING!!!
  const isMediumUp = useMediaQuery(theme.breakpoints.up('md'))
  const dispatch = useDispatch()
  const [product] = useSelector((state) => state.products.items) // [ ... ]
  const productIds = useSelector((state) => state.cart.productIds)
  const exists = productIds.includes(id)

  useEffect(() => {
    const action = productActions.loadProduct(id)

    dispatch(action)
  }, [dispatch, id])

  // useEffect(() => {
  //   const loadProduct = async () => {
  //     const { data } = await axios.get(`/products/${id}`)

  //     setProduct(data)
  //   }

  //   loadProduct()
  // }, [id])

  const addToCart = () => {
    dispatch(cartActions.addToCart(id))
  }

  const buyNow = () => {
    addToCart()
    history.push('/cart')
  }

  if (!product) return null

  return (
    <Box my={4}>
      <Paper className={classes.root} variant="outlined">
        <Grid
          container
          spacing={6}
          justify={isMediumUp ? 'flex-start' : 'center'}
        >
          <Grid item style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={product.image}
              alt={product.name}
              className={classes.image}
            />
          </Grid>
          <Grid
            item
            style={{ maxWidth: isMediumUp ? 'calc(100% - 600px)' : '' }}
          >
            <Grid
              container
              className={classes.content}
              direction="column"
              justify="space-around"
              style={{ padding: 10 }}
            >
              <Grid item>
                <Typography
                  variant="h4"
                  component="h1"
                  style={{ fontWeight: 500 }}
                  gutterBottom
                >
                  {product.name}
                </Typography>
                <Typography variant="body1">
                  {CurrencyFormat(product.price)}
                </Typography>
                <Box mt={4} mb={2}>
                  <Typography variant="body1" color="textSecondary">
                    {product.desc}
                  </Typography>
                </Box>
              </Grid>
              {exists ? (
                <Typography
                  variant="body1"
                  color="secondary"
                  style={{ fontWeight: 500 }}
                >
                  The product has been added to your cart
                </Typography>
              ) : (
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={buyNow}
                    disableElevation
                    style={{ marginRight: 12 }}
                  >
                    Buy Now
                  </Button>
                  <Button
                    variant="outlined"
                    color="textPrimary"
                    onClick={addToCart}
                    disableElevation
                  >
                    Add to Cart
                  </Button>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}
