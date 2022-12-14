import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import { Header } from '../../common/Header';
import { Footer } from '../../common/Footer';
import { Home } from '../Home';
import { Details } from '../details/Details';
import { Cart } from '../cart/Cart';


export const Pages = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product-detail/:id' element={<Details/>}/>
        <Route path='/cart-checkout/' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}
