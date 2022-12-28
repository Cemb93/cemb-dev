// import React from 'react';
import { images } from './Images';
import { CardSkills } from './CardSkills';
import style from './Skills.module.scss';

export const Skills = () => {
  return (
    <div>
      <div>
        <h1><strong>Skills</strong></h1>
      </div>
      <div className={style.contanier} >
        {
          images?.map((el, idx) => {
            return (
              <div>
                <CardSkills key={idx} name={el.name} img={el.img} url={el.url} />
              </div>
            );
          })
        }
      </div>
    </div>
  );
}
