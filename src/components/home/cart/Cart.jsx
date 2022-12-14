import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useState,useEffect } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { cartlistSelector } from '../../../controller/cartListSelector';
import { addCart, removeItem} from '../../../controller/cartListReducerSlice'
import { useParams ,useNavigate} from 'react-router-dom';
export const Cart  = () => {

  const [dataCheckout,setDataCheckout] = useState([])
  const getdata = useSelector(cartlistSelector)
  const dispatch = useDispatch()
  const {id} = useParams()
  console.log(getdata)
  // const increment = (cartdataCheckoutList)=>{
  //   dispatch(addCart(cartdataCheckoutList))
  // }
  // const decrement = (cartdataCheckoutList)=>{
  //   dispatch(removeItem(cartdataCheckoutList))

  // }
  // const CartData = ()=>{
  //   let compareData = getdata.cart
  //   setDataCheckout(compareData)
  //   console.log(dataCheckout)
  // }



  const cartdataCheckoutList = getdata.cart ? getdata.cart.map((cartdataCheckoutList) => (
    <div className="cart_details_content">
      <div className="cart_details_content_img">
        <img
          src={require("components/assets" + cartdataCheckoutList.cover)}
          alt=""
        />
        <p>{cartdataCheckoutList.title}</p>
      </div>
      <div className="detail_content_details">
        <p>{cartdataCheckoutList.price}</p>
      </div>
      <div className="qty">
        <div className="count">
          <button >
            <AiOutlinePlus />
          </button>
          {/* onClick={() => increment(cartdataCheckoutList)} */}
          <span>
            <input type="text" value={cartdataCheckoutList.qty} />
          </span>
          <button >
            <AiOutlineMinus />
          </button>
          {/* onClick={() => decrement(cartdataCheckoutList)} */}
        </div>
      </div>
    </div>
  ) ): <p>Nothing to show</p>;

  return (
    <>
      <div className="cart">
        <div className="cart_title">
          <h1>Shopping Cart</h1>
        </div>
        <div className="cart_header">
          <section className='cart_product'>
            <p>Product</p>
          </section>
          <section className='cart_price'>
            <p>Price</p>
          </section>
          <section className='cart_qty'>
            <p>Qty</p>
          </section>
          <section className='cart_total'>
            <p>Total</p>
          </section>
        </div>
        {cartdataCheckoutList}
        <br></br>


      </div>
    </>
  )
}
