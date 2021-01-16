import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

// MAKE STYLES
const useStyles = makeStyles((theme) => ({
  root: {
    //it rendered to DOM as class name 'makeStyles-root-1' -> prevent conflict class name between components
    padding: theme.spacing(2), // input * 8px
    margin: theme.spacing(1, 2), // '8px 16px'
    backgroundColor: theme.palette.primary.main, //material ui blue
    color: theme.palette.common.white,

    //NESTED SELECTOR (& refer to root)
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
})) //return hook

export default function App() {
  const classes = useStyles()

  return <div className={classes.root}>Hello</div>
}
