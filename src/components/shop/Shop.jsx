import React from 'react'
import ShopProducts from './shopAllProducts/ShopProducts'
import {  ShopCard } from './shophero/ShopCard'
import { ShopHero } from './shophero/ShopHero'

export const Shop = () => {
  return (
    <>
        <ShopHero/>
        <ShopCard/>
        <ShopProducts/>

    </>
  )
}
