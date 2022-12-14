import React from 'react'
import {Hero} from "../home/hero/Hero"
import { Card } from "../home/hero/Card"
import Product from '../home/products/Product'
import { Banner } from './banner/Banner'
import { Topproduct } from './topproduct/Topproduct'
import { Price } from './price/Price'
import { Testtimorial } from './testimorial/Testtimorial'
import { Blog } from './blog/Blog'

export const Home = () => {
  return (
    <>
      <Hero/>
      <Card/>
      <Product/>
      <Banner/>
      <Topproduct/>
      <Price/>
      <Testtimorial/>
      <Blog/>
    </>
  )
}
