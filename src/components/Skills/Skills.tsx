import { images } from './images_skills/Images';
import { CardSkills } from './CardSkills';

export const Skills = () => {
  return (
    <div className='skilsContanier' id='skills' >
      <div className='Skills' >
        <h1><strong>Skills</strong></h1>
      </div>
      <div className='skilsContanier__cards' >
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
