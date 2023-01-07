// import React, { useState } from 'react'
import { NavWords } from './NavWords';
import style from './NavBar.module.scss';
// import { BsSun, BsMoon } from 'react-icons';

export const NavBar = () => {
  return (
    <div className={style.container} >
      <a href="#project" className={style.proyect} >
        <NavWords word="Projects" />
      </a>
      <a href="#skills" className={style.skills} >
        <NavWords word="Skills" />
      </a>
      <a href="#contact" className={style.contact} >
        <NavWords word="Contact" />
      </a>
      {/* <BsSun /> */}
    </div>
  )
}
