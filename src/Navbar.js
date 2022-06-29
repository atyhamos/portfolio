import React from 'react'

const Navbar = ({ setSearchInput }) => {
  return (
    <nav className='navbar'>
      <span className='navbar-parent'>
        <li className='navbar-item white bold mx-3'>Amos' Portfolio</li>
        <input
          className='navbar-search'
          placeholder='Search for tech stacks e.g React'
          id='search-input'
          onKeyUp={(e) => setSearchInput(e.target.value)}
        />
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
      </span>
      {/* <input
        className='navbar-search'
        placeholder='JavaScript, CSS..'
        id='search-input'
        onKeyUp={(e) => setSearchInput(e.target.value)}
      /> */}
    </nav>
  )
}

export default Navbar
