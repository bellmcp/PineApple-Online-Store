import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import currencyFormat from 'utils/currencyFormat'
import CartProduct from './CartProduct'

const useStyles = makeStyles((theme) => ({
  products: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  price: {
    color: theme.palette.secondary.main,
    textAlign: 'right',
    marginTop: theme.spacing(2),
  },
}))

export default function Order() {
  const classes = useStyles()
  const price = 4500
  const products = [
    {
      id: 1,
      name: 'Headphone Limited Edition',
      desc:
        'หูฟัง อุ๋งอุ๋ง ของแท้ พร้อมแผงควบคุมอัจฉริยะ และ รองรับ สมาร์ทโฟนทุกรุ่นในจักรวาล เสียงใส เบสแบบจัดเต็ม',
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=350&q=80',
      category: 'Headphone',
      price: 500,
    },
    {
      id: 2,
      name: 'Apple Watch รุ่นเก๊',
      desc:
        'ต้องการนาฬิกาก็อปปี้เกรดดีใช่ไหม ต้องรุ่นนี้เลย ซื้อไปรับรองพังในสามนาที',
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=350&q=80',
      category: 'Watch',
      price: 1500,
    },
    {
      id: 3,
      name: 'โลชั่นช่วยให้ผมร่วงมากขึ้น',
      desc: 'หมดปัญหาผมเยอะเกินไป กับโลชั่นลดปริมาณผม ร่วงหมดหัวได้ใน 1 วินาที',
      image:
        'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=350&q=80',
      category: 'Lotion',
      price: 2500,
    },
  ]

  return (
    <>
      <div className={classes.products}>
        {products.map((product) => (
          <CartProduct key={product.id} {...product}></CartProduct>
        ))}
      </div>
      {products.length > 0 && (
        <Typography variant="h5" component="h3" className={classes.price}>
          {currencyFormat(price)}
        </Typography>
      )}
    </>
  )
}
