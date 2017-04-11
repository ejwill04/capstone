import React, { Component } from 'react'
import IndividualCompany from './IndividualCompany'


export default class CityList extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  render() {
    let company_ids = this.props.locationData.map((obj) => {
      return obj.company_id
    })

    let selectedCompanies = this.props.companyData ?
     this.props.companyData.filter((el) => {
       return [...company_ids].includes(el.id)
     }) : null

    let mappedCompanies = selectedCompanies.map(company => {
      return <IndividualCompany key={company.id}
                                name={company.name}    
                                industry={company.industry}
                                size={company.num_of_emp} />
    })

    return(
      <div className='citylist-container'>
        <h1 className='city-name'>{this.props.city}</h1>
        <div>{mappedCompanies}</div>
      </div>
    )
  }
}
