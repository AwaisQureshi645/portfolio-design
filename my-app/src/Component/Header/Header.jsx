import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../Home/Home'
import About from '../About/About';
import Service from '../Service/Services'
import Contact from '../Contact/Contact'
export default function Header() {
  return (
 <>
     <Router>
    <Navbar/>
    <Routes> 
            <Route  exact path="/" element={<Home/> } /> 
            <Route exact path="/about" element={<About/> } /> 
            <Route exact path="/services" element={<Service/> } /> 
            <Route exact path="/contact" element={<Contact/> } /> 
       </Routes> 
     </Router>
 
 </>
  )
}
