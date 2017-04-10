import React from 'react'
import CityList from './CityList'


const ResultsList = (props) => {
  console.log(props.stateData);
  const locations = props.stateData.locations
  if (locations) {
    locations.map((city) => {
      console.log(city.city)
    })
  }

  return(
    <div className='results-container'>
      <CityList companyDetail={props.stateData}/>
      <CityList />
      <CityList />
    </div>
  )
}

export default ResultsList
