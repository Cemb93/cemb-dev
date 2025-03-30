import { experiences } from './information';
import ImgExperience from './ImgExperience';
import InfoExperiences from './InfoExperiences';

const Experiences = () => {
  return (
    <div className='projects' id='experience' >
      <div>
        <h1><strong>Experiences</strong></h1>
      </div>
      <div>
        {
          experiences.map((el, idx) => (
            el.id % 2 !== 0 ? (
              <div className='projects__each' >
                <InfoExperiences
                  key={idx}
                  name={el.name}
                  description={el.description}
                />
                <ImgExperience
                  key={idx}
                  image={el.image}
                  // urlProject={el.urlProject}
                />
              </div>
            ) : (
              <div className='projects__each' >
                <ImgExperience
                  key={idx}
                  image={el.image}
                  // urlProject={el.urlProject}
                />
                <InfoExperiences
                  key={idx}
                  name={el.name}
                  description={el.description}
                />
              </div>
            )
          ))
        }
      </div>
    </div>
  );
}

export default Experiences;