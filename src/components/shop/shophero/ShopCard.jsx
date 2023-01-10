import React from 'react'
import { shopHero } from '../../assets/data/data'
import { useFormik } from 'formik';
import { useState } from 'react';

export const ShopCard = ()=> {
    const [show,SetShow] = useState(false)
    //show add product form
    const handleShowAddForm = ()=>{
        SetShow(!show)
    }
    const handleShowMOdifyForm = ()=>{
        console.log('modifyform')
    }
    //close button add form
    const handleCloseAddform = ()=>{
        SetShow(false)
    }
    const formik = useFormik({
        initialValues: {
            productId: '',
            productCover:'',
            productTitle:'',
            productAuthor:'',
            productIngredient:'',
            productPrice:'',
            productCatagory:'',
            productQuantity:'',
            productMFD:'',
            productEXP:''
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
    const heroList = shopHero.map((items)=>(
        <div onClick={items.name === "Add New Product" ? handleShowAddForm : handleShowMOdifyForm }>
            <div className="card" key={items.id}>
                <div className="left">
                    <img src={require("components/assets"+items.cover)} alt="" />
                </div>

                <div className="right">
                    <h4>{items.name}</h4>
                    <p>{items.items} items</p>
                </div>
            </div>
        </div>
    ))
  return (
    <>
      <section className="cards">{heroList}</section>

      {/* add product form */}
      <section className={show? "show" : "hide"}>
        <section className="addproduct" >
            <div className="addproduct_top">
                <h3>Product Information</h3>
            </div>
            <form onSubmit={formik.handleSubmit} className="form-addproduct">
                <div className="product_id">
                    <div><label htmlFor="productId">ID</label></div>
                    <input
                        id="productId"
                        name="productId"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.productId}
                    />
                </div>
                <div className="product_cover">
                    <div><label htmlFor="productCover">Product Image</label></div>
                    <input
                        id="productCover"
                        name="productCover"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.productCover}
                    />
                </div>
                <div className="product_title">
                    <div><label htmlFor="productTitle">Name</label></div>
                    <input
                        id="productTitle"
                        name="productTitle"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.productTitle}
                    />
                </div>
                <div className="product_author">
                    <div><label htmlFor="productAuthor">Made By</label></div>
                    <input
                        id="productAuthor"
                        name="productAuthor"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.productAuthor}
                    />
                </div>
                <div className="product_ingredient">
                    <div><label htmlFor="productIngredient">Ingredient</label></div>
                    <input
                        id="productIngredient"
                        name="productIngredient"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.productIngredient}
                    />
                </div>
                <div className="product_price">
                    <div><label htmlFor="productPrice">Price</label></div>
                    <input
                        id="productPrice"
                        name="productPrice"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.productPrice}
                    />
                </div>
                <div className="product_catagory">
                    <div><label htmlFor="productCatagory">Catagory</label></div>
                    <input
                        id="productCatagory"
                        name="productCatagory"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.productCatagory}
                    />
                </div>
                <div className="product_quantity">
                    <div><label htmlFor="productCatagory">Quantity</label></div>
                    <input
                        id="productQuantity"
                        name="productQuantity"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.productQuantity}
                    />
                </div>
                <div className="product_mfd">
                    <div><label htmlFor="productMFD">MFD</label></div>
                    <input
                        id="productMFD"
                        name="productMFD"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.productMFD}
                    />
                </div>
                <div className="product_exp">
                    <div><label htmlFor="productEXP">EXP</label></div>
                    <input
                        id="productEXP"
                        name="productEXP"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.productEXP}
                    />
                </div>
                <div className="addproduct_button">
                    <button type="submit" className='button'>Add</button>
                    <a className='button' onClick={handleCloseAddform}>Close</a>
                </div>
            </form>
        </section>
      </section>

    </>
  );
}
