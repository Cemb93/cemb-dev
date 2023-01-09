// import imgCarlos from './Images/Carlos.jpeg';

export const Presentation = () => {
  return (
    <div className="presentation" >
      <div className="presentation__images" >
        <img src='Images/Carlos.png' alt='img not found' className="presentation__img" />
      </div>
      <div className="presentation__description" >
        <h1>Hola! Mi nombre es <b className="presentation__name" >Carlos</b></h1>
        <h2>Full Stack Developer</h2>
        <p>Me gusta trabajar en equipo</p>
        <p>y aprender de nuevas tecnologías</p>
      </div>
    </div>
  )
}
