import React from 'react'
import IndividualCompany from './IndividualCompany'


const CityList = (props) => {
  return (
    <div className='citylist-container'>
      <h1 className='city-name'>City</h1>
      <div>
        <IndividualCompany companyDetail={props.stateData}/>
        <IndividualCompany />
      </div>
    </div>
  )
}

export default CityList
