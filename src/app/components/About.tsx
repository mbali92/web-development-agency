import React, {useState } from 'react'


const About:React.FC = () =>{ 
  return (
    <>
        <div className="about_section">
            <div className="container">
                <div className="page_row">
                  <div className="about_skills page_row">
                    <div className="about_cards"> 
                    <i className="lni lni-nodejs"></i>
                      <h6>Node js</h6>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur 
                        adipisicing elit. Similique ea quos fugiat.
                      </p>
                    </div>
                    <div className="about_cards">
                      <i className="lni lni-react"></i>
                      <h6>React</h6>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur 
                        adipisicing elit. Similique ea quos fugiat.
                      </p>
                    </div>
                    <div className="about_cards">
                    <i className="lni lni-typescript"></i>
                      <h6>TypeScript</h6> 
                      <p>
                        Lorem ipsum dolor, sit amet consectetur 
                        adipisicing elit. Similique ea quos fugiat.
                      </p>
                    </div>
                    <div className="about_cards">
                      <i className="lni lni-nextjs"></i>
                      <h6>Next js</h6>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur 
                        adipisicing elit. Similique ea quos fugiat.
                      </p>
                    </div>
                  </div>
                  <div className="about_details">
                    <span className='page_subtitle'>about us</span>
                    <h1 className='section_title'>About us and our <span>goal with project</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ab quo ratione perspiciatis vel officiis modi voluptatibus neque, tempore illo mollitia omnis cupiditate
                       recusandae!</p>
                    <div className="about_text page_row">
                      <span>1</span>
                      <div className='about_statements'>
                        <h6>Mission</h6>
                        <p>Odit ab quo ratione perspiciatis vel officiis modi voluptatibus neque, tempore illo mollitia omnis cupiditate
                        recusandae</p>
                      </div>
                    </div>  
                    <div className="about_text page_row">
                      <span>2</span>
                      <div className='about_statements'>
                        <h6>Vission</h6>
                        <p>Odit ab quo ratione perspiciatis vel officiis modi voluptatibus neque, tempore illo mollitia omnis cupiditate
                        recusandae</p>
                      </div>
                    </div>   
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About