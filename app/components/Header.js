import React from 'react'
import AddCompanyPopUp from './AddCompanyPopUp'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import GithubButton from './Button'
import RaisedButton from 'material-ui/RaisedButton'
const githubIcon = require('../photos/github.svg')
import AuthService from '../helpers/AuthService'
const auth = new AuthService('z3lAkZTSzkQjkiLGedtGuOcLRCe5czSd', 'gabitron.auth0.com')

let userName = auth.getProfile()

const checkForUser = (props)=> {
  if(localStorage.length === 0) {
    return (
      <RaisedButton className='github-btn-statepage'
        backgroundColor='#00C2D2'
        label='Log in with'
        labelPosition='before'
        icon={<img className='github-img' src={ githubIcon }/>}
        onClick={auth.login.bind(this)} />
      )
  } else {
    return (
      <section className='header-container'>
        <AddCompanyPopUp newCompanyAdded={props.newCompanyAdded}/>
        <aside className='company-user-login'>
          <p className='user-name'>{userName.name}</p>
          <GithubButton className="log-out-btn" title="Logout" handleClick={() => auth.logout()}/>
        </aside>
      </section>
    )
  }
}

const Header = (props) => {
  return (
    <MuiThemeProvider>
      <div>
        {checkForUser(props)}
       </div>
    </MuiThemeProvider>
  )
}

export default Header
