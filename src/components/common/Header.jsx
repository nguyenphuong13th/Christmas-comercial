import React, { useState,useEffect  } from 'react'
import logo from '../assets/images/logo.png'
import cart from '../assets/images/cart/cart.png'
import { BsBagCheck } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { RiUser3Line } from 'react-icons/ri';
import { AiOutlineMenu,AiOutlineClose, AiOutlineDelete } from 'react-icons/ai';
import { navlist } from '../assets/data/data';
import { Link } from 'react-router-dom';
import { connect,useDispatch,useSelector } from 'react-redux';
import { cartlistSelector } from '../../controller/cartListSelector';
import { removeCart } from 'controller/cartListReducerSlice'

export const Header = () => {

    window.addEventListener('scroll',function(){
        const header = this.document.querySelector(".header")
        header.classList.toggle("active",this.window.scrollY > 100) //if croll down >100 add class active cho header
    })
    const [mobile,setMobile] = useState(false) //toggle menu responsive in mobile mode
    // useDispatch
    const dispatch = useDispatch();
    //cart add in shop
    const getdata = useSelector(cartlistSelector)

    //cart submenu
    const [cartList,setCartList] = useState(false)
    // handle onclick on cart logo
    const handleClose = ()=>{
      setCartList(null)
    }
    // total price state
    const [totalPrice,setTotalPrice] = useState(0)
    //use data of items in cart to calculate total price
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

    //show data from getdata tranfer to cart
    const showCartList = getdata.cart.map((showCartList)=>(
      <div className="details_content">
        <div className="details_content_img">
          <Link to={`/Christmas-comercial/product-detail/${showCartList.id}`} onClick={handleClose}>
            <img src={require("components/assets"+showCartList.cover)} alt="" />
          </Link>
        </div>
        <div className="details_content_detail">
          <div className="details_content_detail_price">
            <p>{showCartList.title.slice(0,20)} ...</p>
            <p>Price:${showCartList.price}</p>
            <p>Quantity: {showCartList.qty}</p>
          </div>
        </div>
        {/* delete or remove item from cart */}
        <div className="details_content_detail_icon">
          <i onClick={()=> dispatch(removeCart(showCartList.id))}>
            <AiOutlineDelete/>
          </i>
        </div>
      </div>
    ))

  return (
    <>
      <header className="header">
        <div className="container">
          <nav>
            <div className="toggle">
              <button className="menu" onClick={()=>setMobile(!mobile)}>
                {mobile? <AiOutlineClose className='close heIcon'/>: <AiOutlineMenu className='open heIcon'/>}
              </button>
            </div>

            {/* logo Section */}

            <div className="left">
              <img src={logo} alt="" />
            </div>

            {/* Menu Section */}

            <div className="center">
              <ul className={mobile? "mobile-nav":"menu"}>
                {navlist.map((nav) => (
                  <li key={nav.id}>
                    <Link to={`Christmas-comercial${nav.path}`}>{nav.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className="right">
            {/* Search input component */}

            <div className="right_search">
              <input type="text" placeholder="Search Product..." />
              <BiSearch className="searchIcon heIcon" />
            </div>

            {/* User info component */}

            <div className="right_user">
              <RiUser3Line className="userIcon heIcon" />
              <span>
                <a href="/">Register/Login</a>
              </span>
            </div>

            {/* // cart component */}

            <div className="right_card">
              <button className="button" onClick={()=>setCartList(!cartList)}>
                <BsBagCheck className="shop heIcon" />
                MY CART ({getdata.cart? getdata.cart.length:0})
              </button>
              <div className={cartList? "showCart" :"hideCart"}>
                  {getdata.cart.length ? (
                    <section className="details">
                      <div className="details_title">
                        <h3>Photo</h3>
                        <p>Product Name</p>
                      </div>
                      {showCartList}
                      <div className="details_total">
                        <h4>Total : ${totalPrice}</h4>
                        <a className="button" href="/Christmas-comercial/cart-checkout">Check out</a>
                      </div>
                    </section>
                  ):(
                    <div className="empty">
                      <p>Your cart is Empty</p>
                      <img src={cart} alt="" />
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
const mapStateToProps = (state)=>{
  return{
    amount : state.amount
  }
}
connect(mapStateToProps)(Header)