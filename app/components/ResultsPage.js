import React, { Component } from 'react'
import { render } from 'react-dom'
import Header from './Header'
import ResultsList from './ResultsList'
import CompanyProfile from './CompanyProfile'

export default class ResultsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }

  componentWillMount() {
    console.log('mounted');
    let state = this.props.params.state
    fetch(`http://localhost:3000/api/v1/locations/${state}`, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
      this.getData(data)
    })
    .catch(err => err)
  }

  getData(data) {
    // console.log('all data', data)
    this.setState({ data: data })
    // debugger
  }

  render() {
    return (
      <div>
        <Header />
        <div className='resultspage-container'>
          <ResultsList data={this.state.data} />
          <CompanyProfile />
        </div>
      </div>
    )
  }
}
