import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

function Header() {
  return (
    <div className='gpt-header section-padding' id='home'>
      <div className='gpt-header-content'>
        <h1 className='gradient_text'>Let's Built Something amazing with GPT-3 OpenAI</h1>
        <p>Chat GPT is an artificial intelligence program that generates dialogue. Created by Open AI, this high-capable chatbot uses machine learning algorithms to process and analyze large amounts of data to generate responses to user inquiries.</p>
        <div className='gpt-header-content-input'>
          <input type='email' placeholder='Your email'></input>
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt-header-content-people'>
          <img src={people} />
          <p>1,600 have requeste dthe GPT-3 requestfrom this source</p>
        </div>
      </div>
        <div className='gpt-header-img'>
          <img src={ai} alt='ai'/>
        </div>
    </div>
  )
}

export default Header
