import React from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
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
  desc: {
    display: '-webkit-box',
    WebkitLineClamp: 4,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
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
  const history = useHistory()
  const { path } = useRouteMatch()

  const navigateToDetails = () => history.push(`${path}/${id}`)

  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Card onClick={navigateToDetails} variant="outlined">
        <CardActionArea>
          <CardMedia image={image} title={name} className={classes.media} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ fontWeight: 500 }}
            >
              {name}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              component="p"
              color="textSecondary"
              className={classes.desc}
            >
              {desc}
            </Typography>
            <Grid
              container
              alignItems="center"
              justify="space-between"
              className={classes.footer}
            >
              <Typography variant="body2">{CurrencyFormat(price)}</Typography>
              <Chip
                label={category}
                size="medium"
                color="secondary"
                variant="outlined"
                style={{ fontWeight: 500 }}
              ></Chip>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
