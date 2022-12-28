// import React from 'react';
import github from '../../Images/Github.png';
import linkedIn from '../../Images/LinkedIn.png';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <div>
        <button>
          <a href='is pendding' download='CV PDF' >Descargar CV</a>
        </button>
      </div>
      <br />
      <div>
        <a href='https://github.com/Cemb93' >
          <img src={github} alt='img not found' width='50px' height='50px' />
        </a>
        <a href='https://www.linkedin.com/in/carlos-mart%C3%ADnez-7491776a/' >
          <img src={linkedIn} alt='img not found' width='50px' height='50px' />
        </a>
        <p>© copyright {year} Todos los derechos reservados</p>
      </div>
      <br />
      <div>
        <button>
          <a href='mailto:karloz13m@gmail.com' >Contactame</a>
        </button>
      </div>
      <br />
    </div>
  )
}
