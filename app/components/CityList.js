import React, { Component } from 'react'
import IndividualCompany from './IndividualCompany'


export default class CityList extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  render() {
    console.log('location ..... city list', this.props.locationData)
    let list = this.props.companyData ? this.props.companyData.map((el) => {
      return <IndividualCompany name={el.name}
                                industry={el.industry}
                                employees={el.num_of_emp} />
      console.log(el.name)
    }) : null

    return(
      <div className='citylist-container'>
        <h1 className='city-name'>{this.props.city}</h1>
        <div>{list}</div>
      </div>
    )
  }
}
