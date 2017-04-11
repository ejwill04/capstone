import React, { Component } from 'react'
import CityList from './CityList'


export default class ResultsList extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  render() {
    let citiesArray = this.props.data.locations ? this.props.data.locations.map((el) => {return el.city}) : null

    let uniqueCitiesArray = [...new Set(citiesArray)]

    let list = this.props.data.locations ?
    uniqueCitiesArray.map((cityName) => {
      return <CityList city={cityName}
                       locationData={this.props.data.locations.filter((obj) => {
                        return obj.city === cityName})}
                       companyData={this.props.data.companies}
                       key={cityName}
                        />
    }) : null

    return(
      <div className='results-container'>
      <div>{list}</div>
    </div>
    )
  }
}


// companyData={this.props.data.companies.filter((obj) => {
//  return this.props.data.locations.filter((obj) => {
//   if(obj.id === cityName) {
//     return obj.company_id
//   }}).includes(obj.id)
