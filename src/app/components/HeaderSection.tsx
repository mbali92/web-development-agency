
import React, { useEffect, useState } from 'react'
import { useTimeout } from 'react-use';

const headerSection:React.FC=()=> {
  const [headText, setheadText] = useState("develop");
  const [toogleMobileLinks, settoogleMobileLinks] = useState("none");
  
   
  const changeText =()=>{
    headText == 'develop' ? setheadText("create"):setheadText('develop');
  }
  useEffect(() => {
    setTimeout(changeText,3000)  
    return () => {
      
    }
  }, [headText]);

  return (
    <>
      <header>
          <nav>
            <div className="container">
              <h6>Enhle.web <p id='slogan'>webapplication world</p></h6>
              <div className="navlinks">
                  <a href="">Home</a>
                  <a href="">Services</a>
                  <a href="">Skills</a>
                  <a href="" id="nav_button">Let's talk</a>
              </div>
              <div className="menu"><span></span></div>
              <div className="mobile_links"  style={{display:toogleMobileLinks}}>
                  <a href="">Home</a>
                  <a href="">Services</a>
                  <a href="">Skills</a>
                  <a href="">Let's talk</a>
              </div>
            </div>
          </nav>
          <div className="hero_content" >
              <div className="container">
                <div className="page_row">
                  <div className='header_text'>
                    <div className="hero-title">
                      <span className='page_subtitle'>Hello, welcome to our site</span>
                      <h1>We help you <span >{headText}</span> your digital products </h1>
                    </div>
                    <div className="header_description page_row">
                      <img id='header-left-image' src="/hero-image6.png" alt="" />
                      <div className='hero_paragraph'>
                        <p>The number one web developer studio in the country  providing cutting edge 
                            service to clients across south Africa doing what we are truly passionate about 
                        </p>
                        <button>contact for info <i className="lni lni-arrow-right"></i> </button>
                      </div>
                    </div> 
                  </div>
                  <img id='header-right-image' src="/skills-image8.png" alt="" />
                </div>
              </div>
          </div>
      </header>
    </>
  )
}

export default headerSection