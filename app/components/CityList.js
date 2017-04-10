import React from 'react'
import IndividualCompany from './IndividualCompany'


export default class CityList extends React.Component {
  render() {
    return (
      <div className='citylist-container'>
        <h1 className='city-name'>City</h1>
        <div>
          <IndividualCompany companyDetail={this.props.companyDetail}/>
          <IndividualCompany />
        </div>
      </div>
    )
  }
}
