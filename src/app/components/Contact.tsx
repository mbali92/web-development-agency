import React from 'react'

function Contact() {
  return (
    <>
    <div className="contact_section">
        <div className="container">
            <div className="page_row">
                <div className='contact_card contact_title'>
                    <span className='page_subtitle'>contact us</span>
                    <h1 className='section_title'>Lets get in touch for your next project</h1>
                </div>
                <div className="contact_card card_text">
                    <h6><i className="lni lni-envelope"></i>Conatct us through email</h6>
                    <p>luciankwale@gmail.com</p>
                </div>
                <div className="contact_card card_text">
                    <h6><i className="lni lni-phone"></i>Conatct us with phone</h6>
                    <p>+27 098 2076 561</p>
                </div>
            </div>
            <p id="copy_rights">@2024 Mbalentle Mkhwanazi, All rights reserved </p>
        </div>
    </div>
    </>
  )
}

export default Contact