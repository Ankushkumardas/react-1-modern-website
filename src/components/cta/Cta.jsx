import React from 'react'
import Possibility from '../../containers/possibility/Possibility';
import './cta.css'
function Cta() {
  return (
    <div >
      <Possibility/>
      <div className='gpt-cta'>
        <div className='gpt-cta-content'>
          <p>Request Early Access to Get Started</p>
          <h3>Register today & start exploring the endless possiblities.</h3>
        </div>
        <div className='gpt-cta-button'>
          <button type='button'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Cta
