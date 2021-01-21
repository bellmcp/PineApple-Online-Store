import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CssBaseline, useMediaQuery } from '@material-ui/core'
import { grey, blue } from '@material-ui/core/colors'
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import * as actions from '../actions'

export default function Layout() {
  const dispatch = useDispatch()
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const darkMode = useSelector((state) => state.ui.darkMode)

  useEffect(() => {
    const action = actions.setDarkMode(prefersDarkMode)

    dispatch(action)
  }, [prefersDarkMode, dispatch])

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: grey[50],
      },
      secondary: {
        main: blue[500],
      },
      background: {
        default: darkMode ? '#111' : '#fafafa',
        paper: darkMode ? '#212121' : '#fff',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </ThemeProvider>
  )
}
