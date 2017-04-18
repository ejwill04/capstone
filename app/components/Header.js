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
        <aside className='user-home'>
        <Button className='home-btn'
          title='Go Home to Login'
          handleClick={()=> document.location.href='/'} />
        </aside>
      </section>
    )
  } else {
    return (
      <section className='header-container'>
        <aside className='user-home'>
          <Button className='home-btn' title='Home' handleClick={()=> document.location.href='/'} />
        </aside>
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
