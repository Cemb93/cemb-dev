// import React, { useState } from 'react'
import { NavWords } from './NavWords';
// import { BsSun, BsMoon } from 'react-icons';

export const NavBar = () => {
  return (
    // <div className='navbar__container' >
    <div className='navbar' >
      <a href="#project" className='navbar__project' >
        <NavWords word="Projects" />
      </a>
      <a href="#skills" className='navbar__skills' >
        <NavWords word="Skills" />
      </a>
      <a href="#contact" className='navbar__contact' >
        <NavWords word="Contact" />
      </a>
      {/* <BsSun /> */}
    </div>
  )
}
