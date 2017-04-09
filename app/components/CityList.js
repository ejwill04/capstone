import React from 'react'
import IndividualCompany from './IndividualCompany'


const CityList = () => {
  return (
    <div className='citylist-container'>
      <h1 className='city-name'>City</h1>
      <div>
        <IndividualCompany />
        <IndividualCompany />
      </div>
    </div>
  )
}

export default CityList
