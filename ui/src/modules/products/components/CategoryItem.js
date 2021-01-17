import React from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { Grid, Chip } from '@material-ui/core'

export default function CategoryItem({ title, Icon }) {
  const history = useHistory()
  const { path } = useRouteMatch()

  const filterProductsByCategory = () =>
    history.push(`${path}?category=${title}`) //QUERY STRING

  return (
    <Grid item onClick={filterProductsByCategory}>
      <Chip icon={<Icon />} label={title} clickable color="primary"></Chip>
    </Grid>
  )
}
