import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { BsBagCheck } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { RiUser3Line } from 'react-icons/ri';
import { AiOutlineHeart,AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';
import { navlist } from '../assets/data/data';
import { Link } from 'react-router-dom';

export const Header = () => {

    window.addEventListener('scroll',function(){
        const header = this.document.querySelector(".header")
        header.classList.toggle("active",this.window.scrollY > 100) //if croll down >100 add class active cho header
    })
    const [mobile,setMobile] = useState(false) //toggle menu responsive in mobile mode
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
                    <Link to={nav.path}>{nav.text}</Link>
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
              <AiOutlineHeart className="userIcon heIcon" />
            </div>
            <div className="right_card">
              <button className="button">
                <BsBagCheck className="shop heIcon" />
                MY CART (0)
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
