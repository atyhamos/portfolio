import React from 'react'

const ProjectCard = ({ title, img, website, description, stack, repo }) => {
  return title ? (
    <div className='card'>
      <a href={website} sizes='(min-width: 768px) 700px'>
        <img className='img-fluid rounded-start' src={img} alt={title} />
      </a>
      <div className='card-body bg-grey'>
        <a href={website} className='text-decoration-none'>
          {' '}
          <h4 className='card-title'>{title}</h4>
        </a>
        <h6 className='card-subtitle text-muted'>{stack}</h6>
        <p className='card-text'>{description}</p>
        <a href={repo}>Link to GitHub repository</a>
      </div>
    </div>
  ) : (
    <></>
  )
}

export default ProjectCard
