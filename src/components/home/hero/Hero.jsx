import { products } from 'components/assets/data/data'
import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { SearcgItems } from './SearcgItems'

export const Hero = ()=> {
    // value from search input
    const[value,setValue] = useState("")
    // set value from keyboard to search input
    const handleOnChange = (e)=>{
        setValue(e.target.value)
    }
    // key ===value
    const onSearch = (key)=>{
        setValue(key)
    }
  return (
    <>
        <section className="hero">
            <div className="container">
                <h1>
                    <label>
                        Over <span>6,500</span> Curated design
                    </label>{" "}
                    <br/>
                    <label>
                        Resources , <span>Graphic & Website Template</span>
                    </label>
                </h1>
                <p>High-quality Design Themes for personal and commercial use contains 6k+ items in 100 categories.</p>
                <div className="search">
                    <span>All Categories</span>
                    <hr/>
                    {/* set value on search field to value */}

                    <input type="text" placeholder='Search Products ...' onChange={handleOnChange} value={value} />

                    {/* set value just input from search field as parameter of onSearch function  */}
                    <button onClick={() => onSearch(value)}>
                        <BiSearch className="SearchIcon heIcon"/>
                    </button>
                </div>
                <SearcgItems product = {products} value={value} onSearch ={onSearch}/>
                <p>Examples: Mockup, PSD , Theme Design , Image...</p>
            </div>
        </section>
    </>
  )
}

