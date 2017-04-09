import React from 'react'

const Header = () => {
  return (
    <div className='header-container'>
      <input className='header-input'
             placeholder='filter search' />
      <button>Filter</button>
      <button>Add Company</button>
    </div>
  )
}

export default Header
