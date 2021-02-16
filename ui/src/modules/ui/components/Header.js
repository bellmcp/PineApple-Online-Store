import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink, useHistory } from 'react-router-dom'
import {
  AppBar,
  Link,
  Toolbar,
  IconButton,
  Badge,
  Typography,
  Tooltip,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
  ShoppingCart,
  Brightness4 as Dark,
  Brightness7 as Light,
} from '@material-ui/icons'
import logo from 'assets/images/logo.png'
import logoDark from 'assets/images/logo_dark.png'
import * as actions from '../actions'

const useStyles = makeStyles((theme) => ({
  logoImage: {
    height: 24,
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
  const history = useHistory()
  const dispatch = useDispatch()
  const darkMode = useSelector((state) => state.ui.darkMode)
  const cartCount = useSelector((state) => state.cart.productIds).length

  const navigateToCart = () => history.push('/cart')
  //history.goBack()
  //history.goForward()

  const toggleDarkMode = () => {
    dispatch(actions.toggleDarkMode())
  }

  return (
    <AppBar
    data-test=""
      position="fixed"
      elevation={0}
      style={{
        backdropFilter: 'saturate(180%) blur(20px)',
        WebkitBackdropFilter: 'saturate(180%) blur(20px)',
        backgroundColor: !darkMode
          ? 'hsla(0,0%,100%,.65)'
          : 'rgba(29,29,31,0.72)',
        borderBottom: !darkMode
          ? '1px solid hsla(0,0%,53.3%,.4)'
          : '1px solid hsla(0,0%,10%,.4)',
      }}
    >
      <Toolbar>
        <Link
          component={RouterLink}
          to="/products"
          color="inherit"
          underline="none"
          className={classes.logoLink}
        >
          <img
            src={!darkMode ? logo : logoDark}
            alt="PineApple"
            className={classes.logoImage}
          />
        </Link>
        <Link
          component={RouterLink}
          to="/products"
          color="inherit"
          underline="none"
        >
          <Typography
            variant="h5"
            style={{ fontWeight: 500 }}
            color={!darkMode ? '' : 'primary'}
          >
            PineApple
          </Typography>
        </Link>
        <div className={classes.spacer}></div>
        <Tooltip title="Toggle light/dark theme">
          <IconButton
            color={!darkMode ? 'inherit' : ''}
            onClick={toggleDarkMode}
          >
            {!darkMode ? <Dark></Dark> : <Light></Light>}
          </IconButton>
        </Tooltip>
        <Tooltip title="Shopping cart">
          <IconButton
            color={!darkMode ? 'inherit' : ''}
            onClick={navigateToCart}
          >
            <Badge badgeContent={cartCount} color="secondary">
              <ShoppingCart></ShoppingCart>
            </Badge>
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  )
}
