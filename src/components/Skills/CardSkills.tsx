// import React from 'react';
import style from './CardSkills.module.scss';
//* https://www.youtube.com/watch?v=1XsFJh9tJG0 --> Girar Tarjeta

export const CardSkills = ({ name, img, url }: { name: string, img: string, url: string }) => {
  return (
    <a href={url}>
      <div className={style.flip_card} >
        <div className={style.flip_card_inner} >
          <div className={style.flip_card_front} >
            <img className={style.img} src={img} alt='Not found' />
          </div>
          <div className={style.flip_card_back} >
            <h1>{name}</h1>
          </div>
        </div>
      </div>
    </a>
  );
}
