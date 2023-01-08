
export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <a href='is pendding' download='CV PDF' >
        <div>
          <button>
            Descargar CV
          </button>
        </div>
      </a>
      <br />
      <div>
        <a href='https://github.com/Cemb93' >
          <div>
            <img src={'github'} alt='img not found'/>
          </div>
        </a>
        <a href='https://www.linkedin.com/in/carlos-mart%C3%ADnez-7491776a/' >
          <div>
            <img src={'linkedIn'} alt='img not found' />
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
