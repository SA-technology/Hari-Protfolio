import React from 'react'
import { assets } from '../../assets/assets'
import "./Nav.css"
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='main_nav'>
      <nav className='nav'>
        <div className="logo_name">
            <p>Hari Digital Marketer</p>
        </div>
        <div >
        <Link to={"/home"}>
        <img src={assets.logo} className="logo" alt="" />
        </Link>
         
          
        </div>
        <div className="contact">
          <a href="mailto:harikrish16300@gmail.com">
          <button className='btn-contact'>Contact Us</button>
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Nav
