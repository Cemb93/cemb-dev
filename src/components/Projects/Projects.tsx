import { projects } from './EachProject';
import { ImgProject } from './ImgProject';
import { InfoProjects } from './InfoProjects';

export const Projects = () => {
  return (
    <div className='projectsContanier' >
      <div>
        <h1><strong>My Projects</strong></h1>
      </div>
      <div>
        {
          projects?.map((el, idx) => (
            el.id % 2 !== 0 ? (
              <div>
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
              <div>
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