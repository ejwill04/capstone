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
      alums: [],
      company_id: ''
    }
    this.getCompany = this.getCompany.bind(this)
    this.getUsers = this.getUsers.bind(this)
    this.postAUser = this.postAUser.bind(this)
  }

  componentWillReceiveProps(newProps) {
    if (this.state.company_id !== newProps) {
      this.setState({ company_id: newProps.company_id })
      this.getCompany(newProps)
      this.getUsers(newProps)
    }
  }

  getCompany(newProps) {
      let company_id = newProps.company_id
      if (Number(company_id)) {
        fetch(`http://localhost:3000/api/v1/companies/${company_id}`, {
          method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
          this.setState({ companyData: data })
        })
        .catch(err => err)
      }
    }

  getUsers(newProps) {
    let company_id = newProps.company_id
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

  postAUser(user) {
    fetch('http://localhost:3000/api/v1/users',
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(
        user
      ),
    })
      .then((response) => response.json())
      .then((payload) => this.setState({ alums: payload}))
  }

  // showUsers() {
  //   console.log(this.state.alums)
  //   let alumArray = []
  //   if(this.state.alums.length > 0) {
  //     for(let i = 0; i < this.state.alums.length; i ++) {
  //       alumArray.push(this.state.alums[i].name)
  //     }
  //     return alumArray.map((alum)=> {
  //       return <p key={alum} className='alumni-name'>{alum}</p>
  //     })
  //   } else {
  //     return <p>No alumni here</p>
  //   }
  // }

  render() {
    let company = this.state.companyData[0] ? this.state.companyData[0] : {}

    let displayAlums =
     this.state.alums.map((alum, i) => {
      console.log(alum)
      return (
        <p key={i} className='alumni-name'>
          {alum.name}
        </p>
      )
    })
    return (
        <MuiThemeProvider>
        <div className="companyprofile-container">
          <div className="information-container">
            <h1 className="profile-name">{company.name}</h1>
            <h2 className="profile-techstack">Tech Stack: {company.tech_stack}</h2>
            <h2 className="profile-alumni">Alumni</h2>
            <div className="current-alumni">{displayAlums}</div>
            <AddEmployeePopup companyId={this.state.company_id} postAUser={this.postAUser}/>
          </div>
          <CompanyFooter data={company} />
        </div>
      </MuiThemeProvider>
    )
  }
}
