// import React from 'react';
import github from '../../Images/Github.png';
import linkedIn from '../../Images/LinkedIn.png';
import style from './Footer.module.scss';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={style.footers} >
      <a href='is pendding' download='CV PDF' >
        <div>
          <button className={style.download_btn} >
            Descargar CV
          </button>
        </div>
      </a>
      <br />
      <div>
        <a href='https://github.com/Cemb93' >
          <div>
            <img src={github} alt='img not found' width='50px' height='50px' />
          </div>
        </a>
        <a href='https://www.linkedin.com/in/carlos-mart%C3%ADnez-7491776a/' >
          <div>
            <img src={linkedIn} alt='img not found' width='50px' height='50px' />
          </div>
        </a>
        <div>
          <p>© copyright {year} Todos los derechos reservados</p>
        </div>
      </div>
      <br />
      <a href='mailto:karloz13m@gmail.com' >
        <div>
          <button>
            Contactame
          </button>
        </div>
      </a>
      <br />
    </div>
  )
}
