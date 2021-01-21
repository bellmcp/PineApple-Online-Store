import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Toolbar, Snackbar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Routes from './Routes'

import * as actions from '../actions'

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(2, 0),
  },
}))

export default function Content() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const flashMessage = useSelector((state) => state.ui.flashMessage)

  const closeFlashMessage = () => dispatch(actions.clearFlashMessage())

  return (
    <main className={classes.content}>
      <Container maxWidth="lg">
        <Toolbar></Toolbar>
        <Routes></Routes>
        {flashMessage && (
          <Snackbar
            open
            message={flashMessage}
            action={
              <Button color="inherit" size="small" onClick={closeFlashMessage}>
                Close
              </Button>
            }
          ></Snackbar>
        )}
      </Container>
    </main>
  )
}
