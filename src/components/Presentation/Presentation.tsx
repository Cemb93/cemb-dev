import React from 'react';
import imgCarlos from '../../Images/Carlos.jpeg';
import style from './Presentation.module.scss';

export const Presentation = () => {
  return (
    <div className={style.container} >
      <div className={style.div_img} >
        <img className={style.img} src={imgCarlos} alt='img not found' width='155px' height='200px' />
      </div>
      <div className={style.div_description} >
        <p className={style.description} >Hola! mi nombre es Carlos, </p>
        <p className={style.description} >Full Stack Developer, </p>
        <p className={style.description} >Me gusta trabajar en equipo </p>
        <p className={style.description} >y aprender de nuevas tecnologías</p>
      </div>
    </div>
  )
}
