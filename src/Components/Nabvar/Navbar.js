import React, { useState } from 'react';
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import "./Navbar.css"

const Navbar = () => {
  
  const [active, setActive] = useState('navBar');
  const showNav=()=>{
    setActive('navBar activeNavbar')
  }

  const removeNavbar=()=>{
    setActive('navBar')
  }
  return (
    <>
      <section className='navbarSection'>
        <header className='header flex'>
          <div className='logoDiv '>
            <a href='#' className='logo'>
              <h1>
                <MdOutlineTravelExplore className='icon' />
                Travel.
              </h1>
            </a>
          </div>
          <div className={active}>
            <ul className='navList flex'>
             
                <li className='navItem'>
                  <a className='NavLink no-underline'>Home</a>
                </li>
                <li className='navItem'>
                  <a className='NavLink no-underline'>Package</a>
                </li>
                <li className='navItem'>
                  <a className='NavLink no-underline'>shop</a>
                </li>
                <li className='navItem'>
                  <a className='NavLink no-underline'>About</a>
                </li>
                <li className='navItem'>
                  <a className='NavLink no-underline'>Pages</a>
                </li>
                <li className='navItem'>
                  <a className='NavLink no-underline'>News</a>
                </li>
                <li className='navItem'>
                  <a className='NavLink no-underline'>Contact Us</a>
                </li>
                
            
             <button className='btn w-40 h-14  border-none bg-gradient-to-r from-cyan-400 to-indigo-800 hover:bg--gradient-to-r from-sky-200 to-indigo-900 px-2 text-white font-semibold cursor-pointer'>
                BOOK NOW
              </button>
            </ul>
              
          <div onClick={removeNavbar} className='closeNavbar'>
                  <IoIosCloseCircle  className='icon'/>
          </div>

         
                
          </div>
          <div onClick={showNav} className='toggleNavbar'>
          <TbGridDots className='icon'/>
          </div>
        </header>
      </section>
    </>
  )
}

export default Navbar