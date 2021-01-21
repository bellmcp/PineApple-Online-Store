import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { makeStyles } from '@material-ui/core/styles'
import {
  TextField,
  Button,
  CardActions,
  Card,
  CardContent,
  Typography,
  Divider,
  Box,
} from '@material-ui/core'

import * as actions from '../actions'

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
  const dispatch = useDispatch()
  const history = useHistory()
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(
      yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        address: yup.string().required(),
      })
    ),
  })

  console.log(errors)

  const submit = (deliveryInfo) => {
    const action = actions.checkout(deliveryInfo)
    dispatch(action)
    history.push('/')
  }

  return (
    <form onSubmit={handleSubmit(submit)} autoComplete="off">
      <Card variant="outlined">
        <Box m={1}>
          <CardContent className={classes.form}>
            <Typography
              variant="h5"
              component="h2"
              Divider
              style={{ fontWeight: 500 }}
            >
              Delivery Information
            </Typography>
            <Box mb={1}>
              <Divider />
            </Box>
            <TextField
              size="small"
              color="secondary"
              inputRef={register}
              variant="outlined"
              label="Name"
              placeholder="Enter your fullname"
              name="name"
              fullWidth
              helperText={errors.name?.message || ''}
              error={!!errors.name}
            />
            <TextField
              size="small"
              color="secondary"
              inputRef={register}
              type="email"
              variant="outlined"
              label="Email"
              placeholder="Enter your email"
              name="email"
              fullWidth
              helperText={errors.email?.message || ''}
              error={!!errors.email}
            />
            <TextField
              size="small"
              color="secondary"
              inputRef={register}
              multiline
              rows={4}
              variant="outlined"
              label="Address"
              placeholder="Enter your address"
              name="address"
              fullWidth
              helperText={errors.address?.message || ''}
              error={!!errors.address}
            />
          </CardContent>
          <CardActions>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              className={classes.submitBtn}
              disableElevation
            >
              Check Out
            </Button>
          </CardActions>
        </Box>
      </Card>
    </form>
  )
}
