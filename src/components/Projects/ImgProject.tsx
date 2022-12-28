// import React from 'react';
import style from './CardProjects.module.scss';

export const ImgProject = ({ image, urlProject }: { image: string, urlProject: string }) => {
  return (
    <div className={style.div_container} >
      <div>
        <a href={urlProject} >
          <div className={style.div_img} >
            <img className={style.img} src={image} alt='Not found' />
          </div>
        </a>
      </div>
    </div>
  )
}
