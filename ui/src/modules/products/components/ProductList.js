import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import queryString from 'query-string'
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
  const { search } = useLocation()
  const { category } = queryString.parse(search) //Return Key (Category) and Value
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true)
      const { data } = await axios.get(`/products${search}`) //FETCH ONLY MATCHED

      setProducts(data)
      setIsLoading(false)
    }

    loadProducts()
  }, [search])

  return (
    <div>
      <Typography variant="h4" component="h1" className={classes.title}>
        {category || 'All'} Products
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
