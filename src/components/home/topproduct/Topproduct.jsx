import { topProducts } from 'components/assets/data/data'
import Heading from 'components/common/Heading'
import React, { useState } from 'react'
import ProductItems from '../products/ProductItems'

export const Topproduct = () => {
    //need to clarify all of this technic
    const [data,setData] = useState(topProducts)
    // use set to stored unique data on category and concat them with "all" to make an array of string about all category title
    const allCatagories =['all',...new Set(data.map((item) => item.category))]
    const [category,setCategory] = useState(allCatagories)
    const handleFilter = (categoryList) =>{
        // filter if catagoryList có trong item category return that item
        const newItem = topProducts.filter((item) => categoryList.includes(item.category))
        setData(newItem);

        if(categoryList === "all") {
            setData(topProducts)
            return
        }
    }
    const categoryList = category.map((categoryList) => (
        // when click set categoryList as a parameter
        <button key={categoryList.id} className="button" onClick={()=> handleFilter(categoryList)}>
            {categoryList}
        </button>
    ))
  return (
    <>
    <section className="topproduct">
        <div className="container">
            <div className="head">
                <Heading title="Top selling Products" desc="See our Amazing products"/>
                <div className="category">
                    {categoryList}
                </div>
            </div>
            <ProductItems data = {data}/>
        </div>
    </section></>
  )
}

