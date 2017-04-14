import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import GithubButton from './Button'
import CompanyFooter from './CompanyFooter'
import AddEmployeePopup from './AddEmployeePopup'

export default class CompanyProfile extends Component {
  constructor() {
    super()
    this.state = {
      companyData: {},
      alums: {},
      company_id: ''
    }
  }

  componentWillMount() {
    if(!localStorage.profile) {
      console.log('no');
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.state.company_id !== newProps) {
      this.setState({ company_id: newProps.company_id })
      this.getCompany()
      this.getUsers()
    }
  }

  getCompany() {
    let company_id = this.state.company_id
    if (Number(company_id)) {
      fetch(`/api/v1/companies/${company_id}`, {
        method: 'GET',
      })
      .then(response => response.json())
      .then(data => {
        this.setState({ companyData: data })
      })
      .catch(err => err)
    }
  }

  getUsers() {
    let company_id = this.state.company_id
    if (Number(company_id)) {
      fetch(`http://localhost:3000/api/v1/users/company/${company_id}`, {
        method: 'GET',
      })
      .then(response => response.json())
      .then(data => {
        this.setState({ alums: data })
      })
      .catch(()=> this.setState({ alums: {} }))
    }
  }

  showUsers() {
    let alumArray = []
    if(this.state.alums.length > 0) {
      for(let i = 0; i < this.state.alums.length; i ++) {
        alumArray.push(this.state.alums[i].name)
      }
      return alumArray.map((alum)=> {
        return <p key={alum} className='alumni-name'>{alum}</p>
      })
    } else {
      return <p>No alumni here</p>
    }
  }

  render() {
    let company = this.state.companyData[0] ? this.state.companyData[0] : {}
    return (
        <MuiThemeProvider>
        <div className="companyprofile-container">
          <div className="information-container">
            <h1 className="profile-name">{company.name}</h1>
            <h2 className="profile-techstack">Tech Stack: {company.tech_stack}</h2>
            <h2 className="profile-alumni">Alumni</h2>
            <div>{this.showUsers()}</div>
            <AddEmployeePopup companyId={this.state.company_id}/>
          </div>
          <CompanyFooter data={company} />
        </div>
      </MuiThemeProvider>
    )
  }
}
