import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import {
  TextField,
  CardActions,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  form: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  submitBtn: {
    flex: 1,
  },
}))

export default function Delivery({ onSubmit }) {
  const classes = useStyles()

  return (
    <form autoComplete="off">
      <Card>
        <CardContent className={classes.form}>
          <Typography variant="h5" component="h2">
            Delivery Information
          </Typography>
          <TextField
            variant="outlined"
            label="Name"
            placeholder="Enter your fullname"
            name="name"
            fullWidth
          />
          <TextField
            type="email"
            variant="outlined"
            label="Email"
            placeholder="Enter your email"
            name="email"
            fullWidth
          />
          <TextField
            multiline
            rows={4}
            variant="outlined"
            label="Address"
            placeholder="Enter your address"
            name="address"
            fullWidth
          />
        </CardContent>
        <CardActions>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submitBtn}
          >
            Place Order
          </Button>
        </CardActions>
      </Card>
    </form>
  )
}
