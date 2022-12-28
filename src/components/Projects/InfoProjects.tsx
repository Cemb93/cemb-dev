// import React from 'react';
import style from './CardProjects.module.scss';

export const InfoProjects = (
  { name, description, urlGit }:
  { name: string, description: string, urlGit: string }
) => {
  return (
    <div className={style.div_container} >
      <div className={style.div_description} >
        <h1>{name}</h1>
        <p className={style.description} >{description}</p>
        <a href={urlGit} >
          <div className={style.div_button} >
            <button className={style.button} >Git Hub</button>
          </div>
        </a>
      </div>
    </div>
  );
}

