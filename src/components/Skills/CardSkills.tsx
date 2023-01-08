//* https://www.youtube.com/watch?v=1XsFJh9tJG0 --> Girar Tarjeta

export const CardSkills = ({ name, img, url }: { name: string, img: string, url: string }) => {
  return (
    <a href={url}>
      <div className="flip" >
        <div className="flip__inner" >
          <div className="flip__inner__front" >
            <img src={img} alt='Not found' className="img" />
          </div>
          <div className="flip__inner__back" >
            <h1>{name}</h1>
          </div>
        </div>
      </div>
    </a>
  );
}
