import React from 'react'
import AddCompanyPopUp from './AddCompanyPopUp'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import GithubButton from './Button'
import AuthService from '../helpers/AuthService'
const auth = new AuthService('z3lAkZTSzkQjkiLGedtGuOcLRCe5czSd', 'gabitron.auth0.com')

const Header = () => {
  return (
    <MuiThemeProvider>
      <div className='header-container'>
        <GithubButton className="go-btn" title="Add a Company" />
        <GithubButton className="go-btn" title="Logout" handleClick={() => auth.logout()}/>
        <AddCompanyPopUp />
       </div>
    </MuiThemeProvider>
  )
}

export default Header
