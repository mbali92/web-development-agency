import React, { useState } from 'react'

const Service:React.FC=() =>{
  const [showText, setshowText] = useState(1);


  return (
    <>
      <div className="service-section">
        <div className="container">
          <div className="page_row">
              <img src="/skills-image11.png" alt="" />
              <div className="service-details">
                <div>
                  <span className='page_subtitle'>Our services</span>
                  <h1 className='section_title'>What we can do for our clients</h1>
                  <div className="service_dropdown" onClick={()=>setshowText(1)}>
                    <h6 className='page_row'> Static websites <i className="lni lni-chevron-down"></i></h6>
                    <p style={{height: showText == 1 ? "75px":0}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam adipisci nesciunt aperiam eius 
                      eveniet impedit dolores ullam assumenda corrupti culpa, 
                      nam ab neque quis ipsam natus quos perspiciatis odio deserunt.</p>
                  </div>
                  <div className="service_dropdown"  onClick={()=>setshowText(2)}>
                    <h6 className='page_row'> Database driven website <i className="lni lni-chevron-down"></i></h6>
                    <p style={{height: showText == 2 ? "75px":0}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam adipisci nesciunt aperiam eius 
                      eveniet impedit dolores ullam assumenda corrupti culpa, 
                      nam ab neque quis ipsam natus quos perspiciatis odio deserunt.</p>
                  </div>
                  <div className="service_dropdown" onClick={()=>setshowText(3)}>
                    <h6 className='page_row'> Web development <i className="lni lni-chevron-down"></i></h6>
                    <p style={{height: showText == 3 ? "75px":0}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam adipisci nesciunt aperiam eius 
                      eveniet impedit dolores ullam assumenda corrupti culpa, 
                      nam ab neque quis ipsam natus quos perspiciatis odio deserunt.</p>
                  </div>
                  <div className="service_dropdown" onClick={()=>setshowText(4)}>
                    <h6 className='page_row'> Web development <i className="lni lni-chevron-down"></i></h6>
                    <p style={{height: showText == 4 ? "75px":0}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam adipisci nesciunt aperiam eius 
                      eveniet impedit dolores ullam assumenda corrupti culpa, 
                      nam ab neque quis ipsam natus quos perspiciatis odio deserunt.</p>
                  </div>
                </div> 
              </div>
          </div>  

      </div>
      </div>
    </>
  )
}

export default Service