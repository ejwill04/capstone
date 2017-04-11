import React from 'react'
import AddCompanyPopUp from './AddCompanyPopUp'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


const Header = () => {
  return (
    <MuiThemeProvider>
    <div className='header-container'>
      <input className='header-input'
             placeholder='filter search' />
      <button>Filter</button>
      <AddCompanyPopUp />
    </div>
    </MuiThemeProvider>
  )
}

export default Header
