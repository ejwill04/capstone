import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import GithubButton from './Button'
import AuthService from '../helpers/AuthService'
const auth = new AuthService('z3lAkZTSzkQjkiLGedtGuOcLRCe5czSd', 'gabitron.auth0.com')

const Header = () => {
  return (
    <MuiThemeProvider>
      <div className='header-container'>
        <input className='header-input'
          placeholder='filter search' />
          <GithubButton className="go-btn" title="Filter" />
          <GithubButton className="go-btn" title="Add a Company" />
          <GithubButton className="go-btn" title="Logout" handleClick={() => auth.logout()}/>
        </div>
    </MuiThemeProvider>
  )
}

export default Header
