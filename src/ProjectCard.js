import React from 'react'

const ProjectCard = ({ title, img, website, description, stack, repo }) => {
  return title ? (
    <div className='project-card'>
      <div className='row'>
        <div className='col project-image-container'>
          <a href={website}>
            <img className='img-fluid rounded-start' src={img} alt={title} />
          </a>
        </div>
        <div className='col project-desc'>
          <div className='card-body bg-grey'>
            <a href={website}>
              {' '}
              <h4 className='card-title bold'>{title}</h4>
            </a>
            <h6 className='card-subtitle text-muted'>{stack}</h6>
            <p className='card-text'>{description}</p>
            <a href={repo}>Link to GitHub repository</a>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  )
}

export default ProjectCard
