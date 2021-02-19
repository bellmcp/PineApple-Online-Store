import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { Typography, Grid, CircularProgress, Box } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'

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

  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(9)
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  )

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i)
  }
  const paginate = (event, value) => {
    setCurrentPage(value)
  }

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
    setCurrentPage(1)
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
        <>
          <Grid container spacing={6}>
            {currentProducts.map((product) => (
              <ProductItem key={product.id} {...product}></ProductItem>
            ))}
          </Grid>
          <Grid
            container
            spacing={1}
            direction="row"
            justify="center"
            alignItems="center"
            alignContent="center"
            wrap="nowrap"
          >
            <Box mt={6}>
              <Pagination count={pageNumbers.length} onChange={paginate} />
            </Box>
          </Grid>
        </>
      )}
    </div>
  )
}
