import React from 'react'

const ProjectCard = ({ title, img, website, description, stack, repo }) => {
  return title ? (
    <div className='card'>
      <div className='row g-0'>
        <a className='col-6 col-md-4' href={website}>
          <img className='img-fluid rounded-start' src={img} alt={title} />
        </a>
        <div className='card-body col-6 col-md-8'>
          <h4 className='card-title'>{title}</h4>
          <h6 className='card-subtitle text-muted'>{stack}</h6>
          <p className='card-text'>{description}</p>
          <a href={repo}>Link to GitHub repository</a>
        </div>
      </div>
    </div>
  ) : (
    <></>
  )
}

export default ProjectCard
