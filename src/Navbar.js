import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-parent'>
        <li className='navbar-item white bold'>Amos' Portfolio</li>
        <div className='navbar-icons'>
          <li className='navbar-item'>
            <a className='navbar-link' href='mailto:atyhalive@gmail.com'>
              <i className='fa-regular fa-envelope fa-lg white' />
            </a>
          </li>
          <li className='navbar-item'>
            <a
              className='navbar-link'
              href='https://www.linkedin.com/in/amos-tan-yh/'
            >
              <i className='fa-brands fa-linkedin fa-lg white' />
            </a>
          </li>
          <li className='navbar-item'>
            <a className='navbar-link' href='https://github.com/atyhamos'>
              <i className='fa-brands fa-github fa-lg white' />
            </a>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
