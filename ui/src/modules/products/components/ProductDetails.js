import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
// import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Paper, Typography, ButtonGroup, Button } from '@material-ui/core'

import * as productActions from '../actions'
import * as cartActions from 'modules/cart/actions'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  content: {
    height: '100%',
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
    <Paper className={classes.root}>
      <Grid
        container
        spacing={2}
        justify={isMediumUp ? 'flex-start' : 'center'}
      >
        <Grid item>
          <img src={product.image} alt={product.name} />
        </Grid>
        <Grid item>
          <Grid
            container
            className={classes.content}
            direction="column"
            justify="space-between"
          >
            <Grid item>
              <Typography variant="h4" component="h1">
                {product.name}
              </Typography>
              <p>{product.desc}</p>
            </Grid>
            {!exists && (
              <Grid item>
                <ButtonGroup
                  variant="contained"
                  color="primary"
                  aria-label="primary button group"
                >
                  <Button onClick={buyNow}>Buy Now</Button>
                  <Button onClick={addToCart}>Add to Cart</Button>
                </ButtonGroup>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}
