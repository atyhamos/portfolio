import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark '>
      <div className='container mx-4'>
        <a className='navbar-brand text-light'>Amos' Portfolio</a>
        <ul className='navbar-nav me-auto mt-2 mt-lg-0'>
          <li className='nav-item'>
            <a className='nav-link' href='mailto:atyhalive@gmail.com'>
              <i className='fa-regular fa-envelope'></i>
            </a>
          </li>
          <li className='nav-item'>
            <a
              className='nav-link'
              href='https://www.linkedin.com/in/amos-tan-yh/'
            >
              <i className='fa-brands fa-linkedin'></i>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='https://github.com/atyhamos'>
              <i className='fa-brands fa-github'></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
