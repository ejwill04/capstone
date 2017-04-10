import React from 'react'
import Header from './Header'
import ResultsList from './ResultsList'
import CompanyProfile from './CompanyProfile'

const ResultsPage = () => {

  const companyDetail = () => {
    fetch(`http://localhost:3000/api/v1/companies`,
    {
      method: 'GET'
    })
    .then(response =>  response.json())
    .then(data => {
      console.log(data);
    })
  }

  return(
    <div>
      <Header />
      <div className='resultspage-container'>
        <ResultsList companyDetail={() => {this.companyDetail.bind(this)}}/>
        <CompanyProfile />
      </div>
    </div>
  )
}

export default ResultsPage
