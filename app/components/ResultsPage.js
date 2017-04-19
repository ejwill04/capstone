import React, { Component } from 'react'
import { render } from 'react-dom'
import Header from './Header'
import ResultsList from './ResultsList'
import CompanyProfile from './CompanyProfile'

export default class ResultsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      state: '',
      selectedCompany: ''
    }
    this.newCompanyAdded = this.newCompanyAdded.bind(this)
    this.fetchRequest = this.fetchRequest.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  fetchRequest(state) {
    fetch(`http://localhost:3000/api/v1/locations/${state}`, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
      this.getData(data)
    })
    .catch(err => err)
  }

  componentDidMount() {
    let state = this.props.params.state
    this.fetchRequest(state)
    this.setState({ state: this.props.params.state })
  }

  newCompanyAdded(state) {
    this.fetchRequest(state)
  }

  getData(data) {
    this.setState({ data: data })
  }

  updateUser(newUser, company_id) {
    let { name, cohort, slack, email, remote } = newUser
    let id = JSON.parse(localStorage.profile).identities[0].user_id
    console.log('id', id);

    let user = {
      name,
      cohort,
      slack,
      email,
      company_id,
      remote
    }

    fetch(`http://localhost:3000/api/v1/users/${id}`,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(
        user
      ),
    })
      .then((response) => response.json())
      .then((payload) => {
        if (Number(payload)){
          fetch(`http://localhost:3000/api/v1/users/company/${company_id}`,
          {
            method: 'GET',
          })
          .then((response) => response.json())
          .then((payload) => this.setState({ alums: payload }))
          .then(()=> this.fetchRequest(this.state.state))
        }
      })
  }

  render() {
    return (
      <div>
        <Header newCompanyAdded={this.newCompanyAdded} />
        <div className='resultspage-container'>
          <ResultsList data={this.state.data} stateSelected={this.state.state} />
          <CompanyProfile data={this.state.data} company_id={window.location.pathname.slice(4)} stateSelected={this.state.state} updateUser={this.updateUser} />
        </div>
      </div>
    )
  }
}
