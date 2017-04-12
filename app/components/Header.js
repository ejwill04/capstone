import React from 'react'
import AddCompanyPopUp from './AddCompanyPopUp'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import GithubButton from './Button'
import AuthService from '../helpers/AuthService'
const auth = new AuthService('z3lAkZTSzkQjkiLGedtGuOcLRCe5czSd', 'gabitron.auth0.com')

let userName = auth.getProfile()

const Header = () => {
  return (
    <MuiThemeProvider>
      <div className='header-container'>
        <AddCompanyPopUp />
        <aside>
          <p className='user-name'>{userName.name}</p>
          <GithubButton className="log-out-btn" title="Logout" handleClick={() => auth.logout()}/>
        </aside>
       </div>
    </MuiThemeProvider>
  )
}

export default Header
