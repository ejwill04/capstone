import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Button from './Button'
import RaisedButton from 'material-ui/RaisedButton'


const CompanyProfile = () => {
  return(
    <MuiThemeProvider>
      <div className="companyprofile-container">
        <div className="information-container">
          <h1 className="profile-name">Name</h1>
          <h2 className="profile-industry">Industry</h2>
          <h2 className="profile-techstack">Tech Stack</h2>
          <h2 className="profile-alumni">Alumni</h2>
        </div>
        <Button title="Add Yourself"/>
      </div>
    </MuiThemeProvider>
  )
}

export default CompanyProfile
