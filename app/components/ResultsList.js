import React from 'react'
import CityList from './CityList'


const ResultsList = (props) => {
  console.log(props);

  return(
    <div className='results-container'>
      <CityList companyDetail={props.stateData}/>
      <CityList />
      <CityList />
    </div>
  )
}

export default ResultsList
