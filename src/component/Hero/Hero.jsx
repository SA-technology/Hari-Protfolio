import React from 'react'
import './Hero.css'
import hero_banner from "../../assets/Hero_page_banner.jpg"
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='hero_page'>
        <div className="hero_left">
            <div className="cart">
              <div className="sml_cart">
                <p>2+ </p>
                <p>Freelance</p>
              </div>
              <div className="carts_1">
                <p>1+ Year</p>
                <p>Exp</p>
                <p>Digital Marketing</p>
              </div>
              <div className="sml_cart">
                <p>6+</p>
                <p>Channel</p>
              </div>
            </div>
            <br />
            <br />
            {/* hero_section_2 */}
            <div className='digitial' >
              <div className="hero_left_1">
                <p className='sub'>Content is fire; Soical media is gasoline.</p>
                <p className='title'>Digital <span>Marking</span></p>
              </div>
            </div>
          {/* Hire button */}
          <div className="resume_and_hire_btn">
            <button className="resume_btn">Resume</button>
            <button className='hire_btn'>Hire Me</button>
          </div>
          <div className='coursel'>
            <marquee  direction=""  >
              <p className='chennel_list'>Channel 5 Tamil - Channel 5 News - Channel 5 Cinema - Channel 5 India - Channel 5 Telugu - Channel 5 Bhathi</p>
            </marquee>
          </div>
          <div className='about_and_project'>
            <Link to={"/about"}>
            <button className="about_btn">
              About me
             </button>
            </Link>
            
             <button className="project_btn">
              My Project
             </button>
          </div>
        </div>
        <div className="hero_right">
          <img src={hero_banner} alt="hero_panner" className='hero_banner' />
          <p className='image_method'>Method :- SMM - SEM - SEO - Affiliate Marketing - Advertising</p>
          <p className='Tools_space'> <span>Tools :-</span> Semrush - Google Keyword Planer - Google Ads - Tube Buddy - Vidiq - Capcut -  Canva</p>
        </div>
    </div>
  )
}

export default Hero
