import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineHeart } from 'react-icons/ai'
import { FiSearch, FiShoppingBag } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { addCart } from 'controller/cartListReducerSlice'

export default function ProductItems({data}) {

  const dispatch = useDispatch();

  const[openImage,setOpenImage] =useState(false)
  const[img,setImg] = useState("")

  const onOpenImage = (src)=>{
    setImg(src)
    setOpenImage(true)
  }
  //Render image
  const productItems = data.map((productItems)=>(
        <div className="box" key={productItems.id}>
          <div className="img">
            <img src={require("components/assets"+productItems.cover)} alt="" />
            <div className="overlay">
              <button className="button">
                <FiShoppingBag onClick= {()=> dispatch(addCart(productItems))}/>
              </button>
              <button className="button">
                <AiOutlineHeart/>
              </button>
              <button className="button" onClick={()=>onOpenImage(require("components/assets"+productItems.cover))}>
                <FiSearch/>
              </button>
            </div>
          </div>
          <div className="detail">
            <h3>{productItems.title}</h3>
            <p>{productItems.author}</p>
            <h4>Price: ${productItems.price}</h4>
          </div>
        </div>
  ))
  return (
    <>
      <div className='product_items'>
        {productItems}

        {/* zoom image of each product */}
        <div className={openImage? "modelOpen" : "modelClose"}>
          <div className="onClickImage">
            <img src={img} alt=''/>
            <button className="button" onClick={()=>setOpenImage(false)}>
              <AiOutlineClose/>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
