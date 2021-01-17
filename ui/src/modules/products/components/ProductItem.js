import React from 'react'
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Chip,
} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import CurrencyFormat from 'utils/currencyFormat'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 200,
  },
  footer: {
    marginTop: theme.spacing(2),
  },
}))

export default function ProductItem({
  id,
  image,
  name,
  desc,
  category,
  price,
}) {
  const classes = useStyles()

  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Card>
        <CardActionArea>
          <CardMedia image={image} title={name} className={classes.media} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              component="p"
              color="textSecondary"
            >
              {desc}
            </Typography>
            <Grid
              container
              alignItems="center"
              justify="space-between"
              className={classes.footer}
            >
              <span>{CurrencyFormat(price)}</span>
              <Chip label={category} size="small"></Chip>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
