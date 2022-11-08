import React from 'react'
import logo from '../assests/images/logo.png'
import { BiSearch } from 'react-icons/bi';
import { RiUser3Line } from 'react-icons/ri';
import { AiOutlineHeart } from 'react-icons/ai';
import { navlist } from '../assests/data/data';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (

    <header>
        <div className="container">
            <nav>
                <div className="toggle">
                    <button className="menu">
                        Menu
                    </button>
                </div>

                {/* logo Section */}

                <div className="left">
                    <img src={logo} alt=""/>
                </div>

                {/* Menu Section */}

                <div className="center">
                    <ul className="menu">
                        {navlist.map((nav)=>(
                            <li key = {nav.id}>
                                <Link to={nav.path}>{nav.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            <div className="right">

                {/* Search input component */}

                <div className="right_search">
                    <input type="text" placeholder='Search Product...' />
                    <BiSearch className='searchIcon heIcon'/>
                </div>

                {/* User info component */}

                <div className="right_user">
                    <RiUser3Line className='userIcon heIcon' />
                    <AiOutlineHeart className='userIcon heIcon' />
                </div>
            </div>
        </div>
    </header>
  )
}
