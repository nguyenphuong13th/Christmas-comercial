import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineHeart } from 'react-icons/ai'
import { FiSearch, FiShoppingBag } from 'react-icons/fi'
import { useDispatch,useSelector } from 'react-redux'
import { addCart } from 'controller/cartListReducerSlice'
import { productShoplistSelector } from '../../../controller/productShopListSelector';

export default function ShopProductItems() {

  const dispatch = useDispatch();
  const getdata = useSelector(productShoplistSelector)
  const[openImage,setOpenImage] =useState(false)
  const[img,setImg] = useState("")
  const [allItem,setAllItem] = useState(false)
  const handleonCLickSeeAll = ()=>{
    setAllItem(!allItem)
  }


  const onOpenImage = (src)=>{
    setImg(src)
    setOpenImage(true)
  }
  //Render image
  const productItems = getdata.productShop.map((productItems)=>(
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
      <div className={allItem ?"product_items":"product_items product_items_shop_short" }>
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
      <button className="button" onClick={handleonCLickSeeAll}>{allItem ? 'Shorter' : "See All"}</button>
    </>
  )
}
