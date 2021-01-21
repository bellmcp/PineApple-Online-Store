import React from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Grid, Chip } from '@material-ui/core'

export default function CategoryItem({ title, Icon }) {
  const history = useHistory()
  const { path } = useRouteMatch()
  const darkMode = useSelector((state) => state.ui.darkMode)

  const filterProductsByCategory = () =>
    history.push(`${path}?category=${title}`) //QUERY STRING

  return (
    <Grid item onClick={filterProductsByCategory}>
      <Chip
        icon={<Icon />}
        label={title}
        clickable
        color={!darkMode ? 'primary' : 'default'}
        variant={!darkMode ? 'default' : 'outlined'}
        style={{ border: 'none' }}
      ></Chip>
    </Grid>
  )
}
