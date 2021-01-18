import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CssBaseline, useMediaQuery } from '@material-ui/core'
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles'
import Header from './Header'
import Content from './Content'
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
        main: '#1abc9c',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <Header></Header>
      <Content></Content>
    </ThemeProvider>
  )
}
