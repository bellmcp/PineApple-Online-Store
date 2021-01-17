import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Typography, Grid, CircularProgress } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import CategoryList from './CategoryList'
import ProductItem from './ProductItem'

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  progress: {
    textAlign: 'center',
  },
}))

export default function ProductList() {
  const classes = useStyles()
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true)
      const { data } = await axios.get('/products')

      setProducts(data)
      setIsLoading(false)
    }

    loadProducts()
  }, [])

  return (
    <div>
      <Typography variant="h4" component="h1" className={classes.title}>
        All Products
      </Typography>
      <CategoryList></CategoryList>
      {isLoading ? (
        <div className={classes.progress}>
          <CircularProgress color="secondary"></CircularProgress>
        </div>
      ) : (
        <Grid container spacing={2}>
          {products.map((product) => (
            <ProductItem key={product.id} {...product}></ProductItem>
          ))}
        </Grid>
      )}
    </div>
  )
}
