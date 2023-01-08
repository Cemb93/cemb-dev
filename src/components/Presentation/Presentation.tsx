// import imgCarlos from './Images/Carlos.jpeg';

export const Presentation = () => {
  return (
    <div className="container" >
      <div className="container__images" >
        <img src='Images/Carlos.png' alt='img not found' className="container__img" />
      </div>
      <div className="container__description" >
        <h1>Hola! Mi nombre es <b className="container__name" >Carlos</b></h1>
        <h2>Full Stack Developer</h2>
        <p>Me gusta trabajar en equipo</p>
        <p>y aprender de nuevas tecnologías</p>
      </div>
    </div>
  )
}
