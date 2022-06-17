import React from 'react'
import profilePicture from './images/picture.jpg'

const PersonCard = () => {
  return (
    <div className='profile-card'>
      <img src={profilePicture} className='profile-card-image' alt='Amos Tan' />
      <div className='profile-card-body'>
        <h3 className='profile-card-title'>Amos Tan</h3>
        <h6 className='profile-card-subtitle  mb-2 text-muted'>
          3rd Year Undergraduate at NUS Computer Science
        </h6>
        <p className='profile-card-text'>
          Welcome to my portfolio. All these projects are done by me through
          self-learning to better upgrade my skills.
        </p>
      </div>
    </div>
  )
}

export default PersonCard
