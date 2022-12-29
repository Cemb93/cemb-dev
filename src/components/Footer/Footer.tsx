// import React from 'react';
import github from '../../Images/Github.png';
import linkedIn from '../../Images/LinkedIn.png';
import style from './Footer.module.scss';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={style.footers} >
      <a href='is pendding' download='CV PDF' >
        <div className={style.div_download_btn} >
          <button className={style.download_btn} >
            Descargar CV
          </button>
        </div>
      </a>
      <br />
      <div className={style.div_red_social} >
        <a href='https://github.com/Cemb93' >
          <div className={style.div_img_github} >
            <img src={github} alt='img not found' className={style.img_github} />
          </div>
        </a>
        <a href='https://www.linkedin.com/in/carlos-mart%C3%ADnez-7491776a/' >
          <div className={style.div_img_linkedin} >
            <img src={linkedIn} alt='img not found' className={style.img_linkedin} />
          </div>
        </a>
        <div className={style.div_text} >
          <p className={style.text} >© copyright {year} Todos los derechos reservados</p>
        </div>
      </div>
      <br />
      <a href='mailto:karloz13m@gmail.com' >
        <div className={style.div_contact} >
          <button className={style.contact} >
            Contactame
          </button>
        </div>
      </a>
      <br />
    </div>
  )
}
