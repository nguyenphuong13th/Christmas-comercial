import { price } from 'components/assets/data/data'
import Heading from 'components/common/Heading'
import React from 'react'

export const Price = () => {

    const priceItem = price.map((priceItem)=>(
        <div className="box">
            <h3>{priceItem.name}</h3>
            <h1>
                <span>$</span>
                {priceItem.price}
                <label htmlFor="">/user per month</label>
                <p>{priceItem.desc}</p>
                <button className="button">
                    Get Started
                </button>
                <ul>
                    {priceItem.list.map((lists)=>(
                        <li>
                            <i>{lists.icon}</i>
                            <i>{lists.para}</i>
                        </li>

                    ))}
                </ul>
            </h1>
        </div>
    ))
  return (
    <>
        <section className="price">
            <Heading title='Choose the plan' desc="The best price is here"/>
            <div className="content">
                {priceItem}
            </div>
        </section>
    </>
  )
}
