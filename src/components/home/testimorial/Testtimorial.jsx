import React from 'react'
import {ImQuotesRight} from "react-icons/im"
import Heading from 'components/common/Heading'
import { customer } from 'components/assets/data/data'
export const Testtimorial = () => {
    const customerList = customer.map((customerList)=>(
        <div className="card">
            <button>
                <ImQuotesRight/>
            </button>
            <p>"{customerList.desc}"</p>
            <h3>{customerList.name}</h3>
            <span>{customerList.post}</span>
        </div>
    ))
  return (
    <>
        <section className="customer">
            <Heading title="Top selling Products" desc="See our Amazing products"/>
            <div className="content">
                {customerList}
            </div>
        </section>

    </>
  )
}
