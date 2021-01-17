import React from 'react'
import { CssBaseline } from '@material-ui/core'
import Header from './Header'
import Content from './Content'

export default function Layout() {
  return (
    <>
      <CssBaseline></CssBaseline>
      <Header></Header>
      <Content></Content>
    </>
  )
}
