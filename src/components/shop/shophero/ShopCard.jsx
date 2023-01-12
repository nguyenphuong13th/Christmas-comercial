import React from 'react'
import { shopHero } from '../../assets/data/data'
import { useFormik } from 'formik';
import { useState,useSelector } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from 'controller/productReducerSlice';
import { productShoplistSelector } from '../../../controller/productShopListSelector';
export const ShopCard = ()=> {
    const [show,SetShow] = useState(false)
    //data from store
    const getdata = useSelector(productShoplistSelector)
    //take array from object
    const idNumber = getdata.productShop
    console.log('idNumber: ' + idNumber)
    //dispatch
    const dispatch = useDispatch();
    //handle action variable
    const handleAction = (itemName) =>{
        switch(itemName){
            case "Add New Product":
                return handleShowAddForm;
            case "Modify Product":
                return handleShowMOdifyForm
            case "Delete Product":
                return handleShowDeleteForm

        }
    }
    //show add product form
    const handleShowAddForm = ()=>{
        SetShow(!show)
    }
    const handleShowMOdifyForm = ()=>{
        console.log('modifyform')
    }
    //
    const handleShowDeleteForm = ()=>{
        console.log('delete')
    }
    //close button add form
    const handleCloseAddform = ()=>{
        SetShow(false)
    }
    const formik = useFormik({
        initialValues: {
            id: idNumber.length + 1,
            cover:'',
            title:'',
            author:'',
            ingredient:'',
            price:'',
            category:'',
            qty:'',
            mfd:'',
            exp:''
        },
        onSubmit: values => {
        //   alert(JSON.stringify(values, null, 2));
        dispatch(addProduct(values))
        formik.values.ingredient = ""
        },
      });
    const heroList = shopHero.map((items)=>(
        <div onClick={handleAction(items.name)}>
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
                    <div><label htmlFor="id">ID</label></div>
                    <input
                        id="id"
                        name="id"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.id}
                    />
                </div>
                <div className="product_cover">
                    <div><label htmlFor="cover">Product Image</label></div>
                    <input
                        id="cover"
                        name="cover"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.cover}
                    />
                </div>
                <div className="product_title">
                    <div><label htmlFor="title">Name</label></div>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.title}
                    />
                </div>
                <div className="product_author">
                    <div><label htmlFor="author">Made By</label></div>
                    <input
                        id="author"
                        name="author"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.author}
                    />
                </div>
                <div className="product_ingredient">
                    <div><label htmlFor="ingredient">Ingredient</label></div>
                    <input
                        id="ingredient"
                        name="ingredient"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.ingredient}
                    />
                </div>
                <div className="product_price">
                    <div><label htmlFor="price">Price</label></div>
                    <input
                        id="price"
                        name="price"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.price}
                    />
                </div>
                <div className="product_catagory">
                    <div><label htmlFor="category">Catagory</label></div>
                    <input
                        id="category"
                        name="category"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.category}
                    />
                </div>
                <div className="product_quantity">
                    <div><label htmlFor="qty">Quantity</label></div>
                    <input
                        id="qty"
                        name="qty"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.qty}
                    />
                </div>
                <div className="product_mfd">
                    <div><label htmlFor="mfd">MFD</label></div>
                    <input
                        id="mfd"
                        name="mfd"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.mfd}
                    />
                </div>
                <div className="product_exp">
                    <div><label htmlFor="exp">EXP</label></div>
                    <input
                        id="exp"
                        name="exp"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.exp}
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
