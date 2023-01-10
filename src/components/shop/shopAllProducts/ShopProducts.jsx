import { products } from 'components/assets/data/data'
import Heading from 'components/common/Heading'
import React, { useState } from 'react'
import ShopProductItems from './ShopProductItems'

export default function ShopProducts() {
  const [data,setData] = useState(products)

  return (
    <div>

      <section className="product_shop">
        <div className="container">
          <Heading title={"All Our Products"} desc={'Check the tastest Cake of the week .These rising stars are worth your attention'}/>
        </div>
          <ShopProductItems data = {data}/>
      </section>

    </div>
  )
}
