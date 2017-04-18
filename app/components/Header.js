import React from 'react'
import AddCompanyPopUp from './AddCompanyPopUp'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Button from './Button'
import RaisedButton from 'material-ui/RaisedButton'
const githubIcon = require('../photos/github.svg')

const checkForUser = (props)=> {
  if(localStorage.length === 0) {
    return (
      <section className='home-btn-container'>
        <RaisedButton className='home-btn'
          backgroundColor='#00C2D2'
          label='Go Home to Login'
          onClick={()=> document.location.href='/'} />
      </section>
    )
  } else {
    return (
      <section className='header-container'>
        <Button className='home-btn' title='Home' handleClick={()=> document.location.href='/'} />
        <aside className='company-user-login'>
          <AddCompanyPopUp newCompanyAdded={props.newCompanyAdded}/>
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
