import { projects } from './date_projects/EachProject';
import { ImgProject } from './ImgProject';
import { InfoProjects } from './InfoProjects';

export const Projects = () => {
  return (
    <div className='projects' >
      <div>
        <h1><strong>Projects</strong></h1>
      </div>
      <div>
        {
          projects?.map((el, idx) => (
            el.id % 2 !== 0 ? (
              <div className='projects__each' >
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
              <div className='projects__each' >
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