import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  AppBar,
  Link,
  Toolbar,
  Switch,
  FormControlLabel,
  IconButton,
  Badge,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ShoppingCart } from '@material-ui/icons'
import logo from 'assets/images/logo.png'

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer,
  },
  logoImage: {
    width: 30,
    height: 30,
  },
  logoLink: {
    marginRight: theme.spacing(2),
  },
  spacer: {
    flexGrow: 1, //fill the remaining space -> push to right
  },
}))

export default function Header() {
  const classes = useStyles()

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Link
          component={RouterLink}
          to="/"
          color="inherit"
          underline="none"
          className={classes.logoLink}
        >
          <img
            src={logo}
            alt="Bellmcp Shopping"
            className={classes.logoImage}
          />
        </Link>
        <Link
          component={RouterLink}
          to="/products"
          color="inherit"
          underline="none"
        >
          Products
        </Link>
        <div className={classes.spacer}></div>
        <FormControlLabel
          control={<Switch color="secondary"></Switch>}
          label="Dark"
        ></FormControlLabel>
        <IconButton color="inherit">
          <Badge badgeContent={5} color="secondary">
            <ShoppingCart></ShoppingCart>
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
