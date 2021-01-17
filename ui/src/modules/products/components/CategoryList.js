import React from 'react'
import {
  Headset,
  Watch,
  CameraAlt,
  Nature,
  Computer,
  Book,
  InvertColors,
  Visibility,
} from '@material-ui/icons'
import { Grid } from '@material-ui/core'
import CategoryItem from './CategoryItem'
import { makeStyles } from '@material-ui/core/styles'

const CATEGORIES = [
  {
    title: 'Headphone',
    Icon: Headset,
  },
  {
    title: 'Watch',
    Icon: Watch,
  },
  {
    title: 'Camera',
    Icon: CameraAlt,
  },
  {
    title: 'Nature',
    Icon: Nature,
  },
  {
    title: 'Computer',
    Icon: Computer,
  },
  {
    title: 'Book',
    Icon: Book,
  },
  {
    title: 'Lotion',
    Icon: InvertColors,
  },
  {
    title: 'Eyeglass',
    Icon: Visibility,
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
    <Grid container justify="center" spacing={2} className={classes.root}>
      {CATEGORIES.map((category) => (
        <CategoryItem key={category.title} {...category}></CategoryItem>
      ))}
    </Grid>
  )
}
