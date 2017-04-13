import React, { Component } from 'react'
import CityList from './CityList'


export default class ResultsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // stateAdded: ''
    }
  }

  componentWillReceiveProps(newProps) {
    console.log('new props', newProps)
    console.log('this.props', this.props)
    return newProps === this.props
  }

  render() {
    let citiesArray = this.props.data.locations ? this.props.data.locations.map(el => {return el.city}) : null

    let uniqueCitiesArray = [...new Set(citiesArray)]

    let list = this.props.data.locations ?
    uniqueCitiesArray.map((cityName) => {
      return <CityList city={cityName}
                       locationData={this.props.data.locations.filter(obj => {
                        return obj.city === cityName})}
                       usersData={this.props.data.users}
                       companyData={this.props.data.companies}
                       key={cityName} />
    }) : null

    return(
      <div className='results-container'>
        <div>{list}</div>
      </div>
    )
  }
}
