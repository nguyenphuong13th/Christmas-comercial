import { products } from 'components/assets/data/data'
import Heading from 'components/common/Heading'
import React, { useState } from 'react'
import ProductItems from './ProductItems'

export default function Product() {
  const [data,setData] = useState(products)
  return (
    <div>

      <section className="product">
        <div className="container">
          <Heading title={"Trendings Products"} desc={'Check the hostest designs of the week .These rising stars are worth your attention'}/>
        </div>
          <ProductItems data = {data}/>
      </section>

    </div>
  )
}
