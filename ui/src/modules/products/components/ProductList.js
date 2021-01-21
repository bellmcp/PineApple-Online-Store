import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { Typography, Grid, CircularProgress, Box } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'

import CategoryList from './CategoryList'
import ProductItem from './ProductItem'
import * as actions from '../actions'

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
  },
  progress: {
    textAlign: 'center',
  },
}))

export default function ProductList() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { isLoading, items: products } = useSelector((state) => state.products)
  const { search } = useLocation()
  const { category } = queryString.parse(search) //Return Key (Category) and Value

  // const [products, setProducts] = useState([])
  // const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   const loadProducts = async () => {
  //     setIsLoading(true)
  //     const { data } = await axios.get(`/products${search}`) //FETCH ONLY MATCHED

  //     setProducts(data)
  //     setIsLoading(false)
  //   }

  //   loadProducts()
  // }, [search])

  useEffect(() => {
    const action = actions.loadProducts(search)

    dispatch(action)
  }, [dispatch, search])

  return (
    <div>
      <Box mt={2}>
        <CategoryList></CategoryList>
      </Box>
      <Box mt={4} mb={5}>
        <Typography
          variant="h4"
          component="h1"
          className={classes.title}
          style={{ fontWeight: 500 }}
        >
          {category || 'Products'}
        </Typography>
      </Box>
      {isLoading ? (
        <div className={classes.progress}>
          <CircularProgress color="secondary"></CircularProgress>
        </div>
      ) : (
        <Grid container spacing={6}>
          {products.map((product) => (
            <ProductItem key={product.id} {...product}></ProductItem>
          ))}
        </Grid>
      )}
    </div>
  )
}
