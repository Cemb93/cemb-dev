//* https://www.youtube.com/watch?v=1XsFJh9tJG0 --> Girar Tarjeta

export const CardSkills = ({ name, img }: { name: string, img: string }) => {
  return (
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
  );
}
