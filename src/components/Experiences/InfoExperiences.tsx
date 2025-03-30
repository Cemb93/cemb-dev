const InfoExperiences = (
  { name, description }:
  { name: string, description: string }
) => {
  return (
    <div className="InfoProjects" >
      <div className="InfoProjects__description" >
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default InfoExperiences