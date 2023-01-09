import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="FooterContainer" >
      <a href='is pendding' download='CV PDF' >
        <button>
          Descargar CV
        </button>
      </a>
      <div className="FooterContainer__social" >
        <div className="img" >
          <a href='https://github.com/Cemb93' className="img__icons" >
            <FaGithub />
          </a>
          <a href='https://www.linkedin.com/in/carlos-martínez-7491776a/' className="img__icons" >
            <FaLinkedin />
          </a>
        </div>
        <div className="text" >
          <p>© copyright {year} Todos los derechos reservados</p>
        </div>
      </div>
      <a href='mailto:karloz13m@gmail.com' >
        <button>
          Contactame
        </button>
      </a>
      <br />
    </div>
  )
}
