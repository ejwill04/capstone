import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Button from './Button'
import CompanyFooter from './CompanyFooter'
import AddEmployeePopup from './AddEmployeePopup'

export default class CompanyProfile extends Component {
  constructor() {
    super()
    this.state = {
      companyData: {},
      alums: [],
      company_id: '',
      state: ''
    }
    this.getCompany = this.getCompany.bind(this)
    this.getUsers = this.getUsers.bind(this)
  }

  componentWillReceiveProps(newProps) {
    if (this.state.company_id !== newProps) {
      this.setState({ company_id: newProps.company_id })
      this.setState({ state: newProps.stateSelected })
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

  displayAlums(){
    if(this.state.alums.length > 0){
    return this.state.alums.map((alum, i) => {
          return (
            <Card
              expanded={false}
              key={i}
              className="alumni-card"
            >
              <CardHeader
                className="alumni-card-name"
                title={alum.name}
                subtitle={`Cohort: ${alum.cohort}`}
                avatar={alum.github_avatar}
              />
              <CardText>
                <a href={`mailto:${alum.email}`} target='_blank'><i className="material-icons">mail_outline</i></a>
                <p>Slack: {alum.slack}</p>
              </CardText>
            </Card>
          )
        })
      } else {
        return (
          <p>No Alumni at this Company</p>
        )
      }
  }

  hideButtons(company) {
    if(window.location.pathname === `/${this.state.state}`) {
      return (
        <section className='instructions-container'>
          <img className='turing-logo' src='http://media4.cdn.builtincolorado.com/sites/www.builtincolorado.com/files/company_logos/turing-logo-black.png'></img>
          <p className='instructions'>
            Click on a city to see what companies Turing alumni are affiliated with. Companies will have reviews and hiring process information.
            <br></br>
            If you are logged in, you can add a new company, add yourself to an existing company or add a review or interview question.
          </p>
        </section>
      )

    } else {
      return (
        <section>
          <div className='information-container'>

            <AddEmployeePopup companyId={this.state.company_id} updateUser={this.props.updateUser}/>
            <h1 className='profile-name'>{company.name}</h1>
            <h2 className='profile-techstack'>Tech Stack: {company.tech_stack}</h2>
            <div className='alumni-information'>
              <h2 className='profile-alumni'>Alumni</h2>
              <div className='alumni-container'>{this.displayAlums()}</div>
            </div>
          </div>
          <CompanyFooter data={company} />
        </section>
      )
    }
  }

  render() {
    let company = this.state.companyData[0] ? this.state.companyData[0] : {}
    return (
        <MuiThemeProvider>
        <div className='companyprofile-container'>
          {this.hideButtons(company)}
        </div>
      </MuiThemeProvider>
    )
  }
}
