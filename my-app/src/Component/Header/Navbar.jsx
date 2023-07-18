import React, { useState, useRef, useEffect } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-router-dom';
import './header.css'
export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 10 * 16) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    console.log("first")
    setIsOpen(!isOpen);
  };
  return (
    <>

      <div className={scrolled ? 'navbar scrolled' : 'navbar'}>
        {/* <div id="logo"><h1>Awais qureshi</h1></div> */}
        <div className={`menu ${isOpen ? 'show' : ''}`}>
          <a href="#Home">Home</a>
          <a href="#AboutSection">About</a>
          <a href="#ServicesPage">Services</a>
          <a href="#ProjectsPage">Portofolio</a>
          <a href="#ContactPage">Contact </a>



        </div>
        <div className="menu_icon" onClick={toggleMenu}>
          {isOpen ? <RxCross2 style={{ color: 'black' }} /> : <AiOutlineMenu style={{ color: 'black' }} />}


        </div>

      </div>


    </>
  )
}
