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

  render() {
    return (
      <div>
        <Header newCompanyAdded={this.newCompanyAdded} />
        <div className='resultspage-container'>
          <ResultsList data={this.state.data} stateSelected={this.state.state} />
          <CompanyProfile data={this.state.data} company_id={window.location.pathname.slice(4)} stateSelected={this.state.state} />
        </div>
      </div>
    )
  }
}
