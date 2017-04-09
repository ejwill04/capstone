import React from 'react'
import Header from './Header'
import ResultsList from './ResultsList'
import CompanyProfile from './CompanyProfile'

const ResultsPage = () => {
  return(
    <div>
      <Header />
      <div className='resultspage-container'>
        <ResultsList />
        <CompanyProfile />
      </div>
    </div>
  )
}

export default ResultsPage
