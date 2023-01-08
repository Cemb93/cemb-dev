
export const ImgProject = ({ image, urlProject }: { image: string, urlProject: string }) => {
  return (
    <div>
      <div>
        <a href={urlProject} >
          <div className="div__img" >
            <img src={image} alt='Not found' />
          </div>
        </a>
      </div>
    </div>
  )
}
