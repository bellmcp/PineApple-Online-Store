import React from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  IconButton,
  Box,
} from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import currencyFormat from 'utils/currencyFormat'
import * as actions from '../actions'

const useStyles = makeStyles((theme) => ({
  product: {
    display: 'flex',
  },
  productDetails: {
    flex: 1,
  },
  image: {
    width: 250,
  },
}))

export default function CartProduct({ id, image, name, price }) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const remove = () => {
    dispatch(actions.removeFromCart(id))
  }

  return (
    <Box>
      <Card className={classes.product} variant="outlined" spacing={2}>
        <CardMedia image={image} title={name} className={classes.image} />
        <CardContent className={classes.productDetails}>
          <Box mx={1} my={1}>
            <Typography
              variant="h5"
              component="h2"
              style={{ fontWeight: 500 }}
              gutterBottom
            >
              {name}
            </Typography>
            <Grid container alignItems="center" justify="space-between">
              <Grid item>
                <Typography variant="body1" color="textSecondary">
                  {currencyFormat(price)}
                </Typography>
              </Grid>
              <Grid item>
                <IconButton aria-label="delete" size="small" onClick={remove}>
                  <Delete></Delete>
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}
