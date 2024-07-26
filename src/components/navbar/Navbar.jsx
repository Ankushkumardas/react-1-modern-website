import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import logo from '../../assets/logo.svg'
function Navbar() {
  const [toggle, settoggle] = useState(false)
  return (
    <div className='gpt3-navbar'>
      <div className='gpt-navbar-links'>
        <div className='gpt-navbar-links-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt-navbar-links-container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#whpt3'>What is GPT-3</a></p>
          <p><a href='#possibility'>Open AI</a></p>
          <p><a href='#features'>Case Studies</a></p>
          <p><a href='#blog'>Library</a></p>
        </div>
      </div>
      <div className='gpt-navbar-sign'>
        <p>SignIn</p>
        <button type="button">Sign Up</button>
      </div>
      <div className='gpt-navbar-menu'>
        {toggle ? <RiCloseLine color="#fff" size={27} onClick={() => settoggle(false)} /> : <RiMenu3Line color="#fff" size={27} onClick={() => settoggle(true)} />}
        {toggle && (
          <div className='gpt-navbar-menu-container scale-up-center'>
            <div className='gpt-navbar-menu-container-links'>
              <p><a href='#home'>Home</a></p>
              <p><a href='#wgpt3'>What is GPT-3</a></p>
              <p><a href='#possibility'>Open AI</a></p>
              <p><a href='#features'>Case Studies</a></p>
              <p><a href='#blog'>Library</a></p>
              <div className='gpt-navbar-menu-container-links-sign'>
                <p>SignIn</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>

        )}
      </div>
    </div>
  )
}

export default Navbar
