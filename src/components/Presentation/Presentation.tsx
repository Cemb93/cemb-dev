// import React from 'react';
import imgCarlos from '../../Images/Carlos.jpeg';
import style from './Presentation.module.scss';

export const Presentation = () => {
  return (
    <div className={style.container} >
      <div className={style.div_img} >
        <img className={style.img} src={imgCarlos} alt='img not found' />
      </div>
      <div className={style.div_description} >
        <h1 className={style.description} >Hola! Mi nombre es <b className={style.name} >Carlos</b></h1>
        <h2 className={style.description} >Full Stack Developer</h2>
        <p className={style.description} >Me gusta trabajar en equipo y aprender de nuevas tecnologías</p>
        {/* <p className={style.description} >y aprender de nuevas tecnologías</p> */}
      </div>
    </div>
  )
}
