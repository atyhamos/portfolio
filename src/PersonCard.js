import React from 'react'
// import profilePicture from './images/picture.jpg'

const PersonCard = () => {
  const cardStyles = {
    width: '30rem',
    position: 'fixed',
  }
  return (
    <div className='card fixed' style={cardStyles}>
      <img
        src='./images/picture.jpg'
        className='card-img-top'
        alt='Amos Tan '
      />
      <div className='card-body'>
        <h3 className='card-title'>Amos Tan</h3>
        <h6 className='card-subtitle  mb-2 text-muted'>
          3rd Year Undergraduate at NUS Computer Science
        </h6>
        <p className='card-text'>
          Welcome to my portfolio. All these projects are done by me through
          self-learning to better upgrade my skills.
        </p>
      </div>
    </div>
  )
}

export default PersonCard
