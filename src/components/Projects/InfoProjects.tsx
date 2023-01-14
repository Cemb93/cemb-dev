
export const InfoProjects = (
  { name, description, urlGit }:
  { name: string, description: string, urlGit: string }
) => {
  return (
    <div className="InfoProjects" >
      <div className="InfoProjects__description" >
        <h2>{name}</h2>
        <p>{description}</p>
        <a href={urlGit} >
          <div>
            <button>Repositorio</button>
          </div>
        </a>
      </div>
    </div>
  );
}

