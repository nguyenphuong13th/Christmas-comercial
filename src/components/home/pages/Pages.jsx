import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import { Header } from '../../common/Header';
import { Footer } from '../../common/Footer';
import { Home } from '../Home';


export const Pages = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}
