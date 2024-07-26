import React from 'react'
import './footer.css'
import gptlogo from '../../assets/logo.svg'
function Footer() {
  return (
    <div className='gpt-footer section-padding'>
      <div className='gpt-footer-heading'>
        <h1 className='gradient-text'>Do you want to step in to the future before others</h1>
      </div>
      <div className='gpt-footer-btn'>
          <p>Request eary Access</p>
      </div>
      <div className='gpt-footer-links'>
        <div className='gpt-footer-links-logo'>
          <img src={gptlogo} alt='logo'/>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='gpt-footer-links-div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt-footer-links-div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt-footer-links-div'>
          <h4>Get in touch</h4>
          <p>OvCrechterwoord K12 182 DK Alknjkcberons</p>
          <p>085-132567 </p>
          <p>info@payme.net</p>
          
        </div>
      </div>
      <div className='gpt-footer-cw'>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}
import './footer.css'
export default Footer
