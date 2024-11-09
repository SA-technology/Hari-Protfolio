import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_title"><p>Contact Us</p></div>
      <br />
      <div className='footer_menu'>
      <div className="cell_us">
        <p className="sub_contact">
            Call us
        </p>
        <p className='mnumber'>
        +91 8946072501
        </p>
      </div>
      <div className="email">
        <p className="sub_contact">
            Email Id
        </p>
        <a href="mailto:harikrish16300@gmail.com" type='mail'>  <p className="email_id">
        harikrish16300@gmail.com
        </p></a>
      </div>
      <div className="linked">
        <a href="">
        <p className="sub_contact">
            Linked In
        </p>
        </a>
       
        <p className="linkedin">
            Hari K
        </p>
      </div>
      <div className="instagram">
        <p className="sub_contact">
            Instagram
        </p>
        <p>
            <a href="@Hari_official_16"><p className="insta">Hari_official_16</p></a>
        </p>
      </div>
      </div>
      
    </div>
  )
}

export default Footer
