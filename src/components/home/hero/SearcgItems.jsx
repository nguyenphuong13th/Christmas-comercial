import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiSearch, FiShoppingBag } from 'react-icons/fi'

export const SearcgItems = ({value,product,onSearch}) => {


    const productItems = product
      .filter((productItems) => {
        const searchKey = value.toLowerCase();
        const title = productItems.title.toLowerCase();
        // return item which value input from Hero search input must be the same with the first word or letter of title in data file
        return searchKey && title.startsWith(searchKey) ;
      }).slice(0, 10).map((productItems) => (
        <div className="box" key={productItems.id}>
          <div className="img">
            <img
              src={require("components/assets" + productItems.cover)}
              alt=""
            />
            <div className="overlay">
              <button className="button">
                <FiShoppingBag />
              </button>
              <button className="button">
                <AiOutlineHeart />
              </button>
              <button
                className="button"
              >
                <FiSearch />
              </button>
            </div>
          </div>
          <div className="detail">
            <h3>{productItems.title}</h3>
            <p>{productItems.author}</p>
            <h4>Price: ${productItems.price}</h4>
          </div>
        </div>
      ));

  return (
    <>
        <section className="searchItems">
            {productItems}
        </section>
    </>
  )
}
