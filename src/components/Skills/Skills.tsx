import { images } from './Images';
import { CardSkills } from './CardSkills';

export const Skills = () => {
  return (
    <div className='skilsContanier' >
      <div>
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
