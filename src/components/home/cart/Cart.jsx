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
  const [totalPrice,setTotalPrice] = useState(0)
  const totalPriceCart = () =>{
    let totalPrice = 0
    getdata.cart.map((p,i)=>{
      totalPrice = parseFloat(p.price) * p.qty + totalPrice
    })
    setTotalPrice(totalPrice)
  }
  // update state when total update totalPriceCart reload page to show state changed
  useEffect(()=>{
    totalPriceCart()
  },[totalPriceCart])
  const deductVoucher = 0
  const shippingPrice = 25
  const taxPrice = totalPrice ? (totalPrice * 10) / 100 : 0
  const finalPay = totalPrice + taxPrice + shippingPrice - deductVoucher

  const incrementCart = (cartdataCheckoutList)=>{
    dispatch(addCart(cartdataCheckoutList))
  }
  const decrementCart = (cartdataCheckoutList)=>{
    dispatch(removeItem(cartdataCheckoutList))

  }
  // const CartData = ()=>{
  //   let compareData = getdata.cart
  //   setDataCheckout(compareData)
  //   console.log(dataCheckout)
  // }



  const cartdataCheckoutList = getdata.cart ? (
    getdata.cart.map((cartdataCheckoutList) => (
      <tr className="detail_content_details_products">
          <td>
            <div className="cart_details_content_img">
              <img
                src={require("components/assets" + cartdataCheckoutList.cover)}
                alt=""
              />
              <p>{cartdataCheckoutList.title}</p>
            </div>
          </td>
          <td>
            <div className="detail_content_details_price">
              <p>{cartdataCheckoutList.price}$</p>
            </div>
          </td>
          <td>
            <div className="detail_content_details_qty">
              <button onClick={() => incrementCart(cartdataCheckoutList)}>
                <AiOutlinePlus />
              </button>
              <span>
                <input type="text" value={cartdataCheckoutList.qty} />
              </span>
              <button onClick={() => decrementCart(cartdataCheckoutList)} >
                <AiOutlineMinus />
              </button>
            </div>
          </td>
          <td>
            <div className="detail_content_details_total">
              <p>{cartdataCheckoutList.price}$</p>
            </div>
          </td>
      </tr>
    ))
  ) : (
    <h2>Your Cart is empty</h2>
  );

  return (
    <>
      <div className="cart">
        <div className="cart_title">
          <h1>Shopping Cart</h1>
        </div>
        <div className="cart_details_content">
          <table className="cart_details_content_table">
            <tr>
              <th>
                <div className="cart_product">
                  <p>Product</p>
                </div>
              </th>
              <th>
                <div className="cart_price">
                  <p>Price</p>
                </div>
              </th>
              <th>
                <div className="cart_qty">
                  <p>Qty</p>
                </div>
              </th>
              <th>
                <div className="cart_total">
                  <p>Total</p>
                </div>
              </th>
            </tr>
            {cartdataCheckoutList}
          </table>
            <table className="ckeck_out_content_table">
              <tr className="total_products">
                <td><h3>Total:</h3></td>
                <td> <p>${totalPrice}</p></td>
              </tr>
              <tr className="tax_products">
                <td><h3>Tax (10%)</h3></td>
                <td> <p>${taxPrice}</p></td>
              </tr>
              <tr className="shipping_products">
                <td><h3>Shipping</h3></td>
                <td><p>$25</p></td>
              </tr>
              <tr className="Deduct_products">
                <td><h3>Voucher</h3></td>
                <td><p>${deductVoucher}</p></td>
              </tr>
              <tr className="checkout_price">
                <td><h3>Final Pay : </h3></td>
                <td><p>${finalPay}</p></td>
              </tr>
            </table>
            <a className="button" href="/">Check out</a>
        </div>

      </div>
    </>
  )
}
