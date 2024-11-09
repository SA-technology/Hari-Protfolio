import React from "react";
import about_banner from "../../assets/Hero_page_banner.jpg";
import Nav from "../Nav/Nav";
import "./About.css";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <div>
      <Nav />
      <div className="about_page">
        <div className="about_left">
          {/* about_section_2 */}
          <div className="digitial">
            <div className="about_left_1">
              {/* <p className='sub'>Content is fire; Soical media is gasoline.</p> */}
              <p className="title">
                Digital <span>Marking</span>
              </p>
            </div>
          </div>
          {/* Hire button */}
          <div className="resume_and_hire_btn">
            <button className="resume_btn">Resume</button>
            <button className="hire_btn">Hire Me</button>
          </div>
          <div className="coursel">
            <marquee direction="">
              <p className="chennel_list">
                Channel 5 Tamil - Channel 5 News - Channel 5 Cinema - Channel 5
                India - Channel 5 Telugu - Channel 5 Bhathi
              </p>
            </marquee>
          </div>
          <div className="about_and_project">
            <button className="about_btn">About me</button>
            <button className="project_btn">My Project</button>
          </div>
        </div>
        <div className="about_right">
          <img src={about_banner} alt="about_panner" className="about_banner" />
          <p className="about_image_method">
            Method :- SMM - SEM - SEO - Affiliate Marketing - Advertising
          </p>
          <p className="Tools_space">
            {" "}
            <span>Tools :-</span> Semrush - Google Keyword Planer - Google Ads -
            Tube Buddy - Vidiq - Capcut - Canva
          </p>
        </div>
      </div>
      <div className="About_me">
        <div className="About_me_title">
          <div className="text-wrapper">About Me</div>
        </div>
        <div className="text_supn">
          <p style={{ color: "#c3ff00", fontSize: "50px" }}>
            Get to Know about
          </p>
          <p style={{ color: "#000", fontSize: "50px" }}>Style Marketing</p>
       
        <div className="par">
          <p style={{ color: "#000", fontSize:"24px", fontWeight:"600" }}>
            “Aspiring digital marketer seeking a dynamic role to leverage my
            expertise in SEO, social media, and content creation. Committed to
            driving online presence and engagement through innovative
            strategies, data-driven insights, and continuous learning in the
            evolving landscape of digital marketing.”
          </p>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
