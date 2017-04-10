import React from 'react'
import IndividualCompany from './IndividualCompany'


const CityList = (props) => {
  console.log('props', props.city)
  return (
    <div className='citylist-container'>
      <h1 className='city-name'>{props.city}</h1>
      <div>
        <IndividualCompany />
        <IndividualCompany />
      </div>
    </div>
  )
}

export default CityList
