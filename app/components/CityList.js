import React, { Component } from 'react'
import IndividualCompany from './IndividualCompany'

export default class CityList extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    let company_ids = this.props.locationData.map((obj) => {
      return obj.company_id
    })

    let selectedCompanies = this.props.companyData.filter((el) => {
       return [...company_ids].includes(el.id)
     })

    let mappedCompanies = selectedCompanies.map(company => {
      return <IndividualCompany key={company.id}
                                company_id={company.id}
                                city={this.props.city}
                                state={this.props.locationData[0].state}
                                name={company.name}
                                users={this.props.usersData.filter(obj => { return obj.company_id === company.id })}
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
