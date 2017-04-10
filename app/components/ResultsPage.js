import React, { Component } from 'react'
import { render } from 'react-dom'
import Header from './Header'
import ResultsList from './ResultsList'
import CompanyProfile from './CompanyProfile'

export default class ResultsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stateData: {}
    }
  }

  componentWillMount() {
    let state = this.props.params.state
    fetch(`http://localhost:3000/api/v1/locations/${state}`, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
      this.setState({stateData: data})
      console.log('State data: ', data)
    })
    .catch(err => err)
  }

  render() {
    let { stateData } = this.state.stateData
    return (
      <div>
        <Header />
        <div className='resultspage-container'>
          <ResultsList companyDetail={stateData}/>
          <CompanyProfile />
        </div>
      </div>
    )
  }
}
