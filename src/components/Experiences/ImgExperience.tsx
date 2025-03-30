const ImgExperience = (
  { image, urlProject }: 
  { image: string, urlProject?: string }
) => {
  return (
    <div>
      <div>
        <a href={urlProject} >
          <div className="projects_img" >
            <img src={image} alt='Not found' />
          </div>
        </a>
      </div>
    </div>
  )
}

export default ImgExperience;