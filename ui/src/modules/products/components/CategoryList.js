import React from 'react'
import {
  DesktopWindows,
  Tablet,
  PhoneAndroid,
  Watch,
  Tv,
  Headset,
  HomeRounded,
  DevicesOther,
} from '@material-ui/icons'
import { Grid } from '@material-ui/core'
import CategoryItem from './CategoryItem'
import { makeStyles } from '@material-ui/core/styles'

const CATEGORIES = [
  {
    title: 'Computer',
    Icon: DesktopWindows,
  },
  {
    title: 'Tablet',
    Icon: Tablet,
  },
  {
    title: 'Phone',
    Icon: PhoneAndroid,
  },
  {
    title: 'Watch',
    Icon: Watch,
  },
  {
    title: 'TV',
    Icon: Tv,
  },
  {
    title: 'Music',
    Icon: Headset,
  },
  {
    title: 'Home',
    Icon: HomeRounded,
  },
  {
    title: 'Other',
    Icon: DevicesOther,
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
}))

export default function CategoryList() {
  const classes = useStyles()

  return (
    <Grid container justify="space-evenly" spacing={4} className={classes.root}>
      {CATEGORIES.map((category) => (
        <CategoryItem key={category.title} {...category}></CategoryItem>
      ))}
    </Grid>
  )
}
