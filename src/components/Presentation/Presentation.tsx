// npx update-browserslist-db@latest
export const Presentation = () => {
  return (
    <div className="presentation" >
      <div className="presentation__images" >
        {/* <img src='Images/Carlos.png' alt='img not found' className="presentation__img" /> */}
        <img src='Images/CarlosM.png' alt='img not found' className="presentation__img" />
      </div>
      <div className="presentation__description" >
        <h1>Hola! Mi nombre es <b className="presentation__name" >Carlos</b></h1>
        <h2>Soy Full Stack Developer</h2>
        <p>Soy una persona apasionada por el mundo de la tecnología, con un gran interes en seguir aprendiendo cosas nuevas, continuar mejorar mi habilidades técnicas e ir descubriendo nuevas habilidades personales y poder fortalecer las actuales.</p>
        {/* <p>Soy una persona apasionada por el mundo de la tecnología, </p>
        <p>con un gran interes en seguir aprendiendo cosas nuevas, </p>
        <p>continuar mejorar mi habilidades técnicas </p>
        <p>e ir descubriendo nuevas habilidades personales </p>
        <p>y poder fortalecer las actuales.</p> */}
      </div>
    </div>
  )
}
