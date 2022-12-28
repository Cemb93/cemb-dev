// import React from 'react';
import { projects } from './EachProject';
import { ImgProject } from './ImgProject';
import { InfoProjects } from './InfoProjects';
import style from './Projects.module.scss';

export const Projects = () => {
  return (
    <div>
      <div>
        <h1><strong>My Projects</strong></h1>
      </div>
      <div>
        {
          projects?.map((el, idx) => (
            el.id % 2 !== 0 ? (
              <div className={style.contanier} >
                <InfoProjects
                  key={idx}
                  name={el.name}
                  description={el.description}
                  urlGit={el.urlGit} 
                />
                <ImgProject
                  key={idx}
                  image={el.image}
                  urlProject={el.urlProject}
                />
              </div>
            ) : (
              <div className={style.contanier} >
                <ImgProject
                  key={idx}
                  image={el.image}
                  urlProject={el.urlProject}
                />
                <InfoProjects
                  key={idx}
                  name={el.name}
                  description={el.description}
                  urlGit={el.urlGit} 
                />
              </div>
            )
          ))
        }
      </div>
    </div>
  );
}