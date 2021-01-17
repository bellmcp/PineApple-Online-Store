import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  IconButton,
} from '@material-ui/core'
import { Delete } from '@material-ui/icons'

import currencyFormat from 'utils/currencyFormat'

const useStyles = makeStyles((theme) => ({
  product: {
    display: 'flex',
  },
  productDetails: {
    flex: 1,
  },
  image: {
    width: 150,
  },
}))

export default function CartProduct({ image, name, price }) {
  const classes = useStyles()

  return (
    <Card className={classes.product}>
      <CardMedia image={image} title={name} className={classes.image} />
      <CardContent className={classes.productDetails}>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <div>{currencyFormat(price)}</div>
          </Grid>
          <Grid item>
            <IconButton aria-label="delete" size="small">
              <Delete></Delete>
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
