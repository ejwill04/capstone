import React, { Component } from 'react'
import IndividualCompany from './IndividualCompany'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

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
                                className='company'
                                company_id={company.id}
                                city={this.props.city}
                                state={this.props.locationData[0].state}
                                name={company.name}
                                users={this.props.usersData.filter(obj => { return obj.company_id === company.id })}
                                industry={company.industry}
                                size={company.num_of_emp} />
    })

    return(
    <MuiThemeProvider>
      <Card className='citylist-container'>
        <CardHeader
          title={this.props.city}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          {mappedCompanies}
        </CardText>
      </Card>
    </MuiThemeProvider>
    )
  }
}
