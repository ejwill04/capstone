import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import GithubButton from './Button'

export default class CompanyFooter extends Component {
  constructor(props) {
    super(props)
    this.state  = {
      companyReviews: '',
      companyInterviews: ''
    }
  }

  getReviews(company) {
    fetch(`http://localhost:3000/api/v1/reviews/company/${company.data.id}`, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(response => {
      this.setState({ companyReviews: response[0].message })
    })
    .catch(err => err)
  }

  getHiring(company) {
    fetch(`http://localhost:3000/api/v1/interview_questions/company/${company.data.id}`, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(response => {
      this.setState({ companyInterviews: response[0].message })
    })
    .catch(err => err)
  }

  render() {
    return (
      <div id="company-footer">
        <Tabs>
          <Tab id='reviews-tab' label="Reviews" value="Reviews" onClick={()=> this.getReviews(this.props)}>
            <GithubButton title='Add Review' />
            <div>{this.state.companyReviews}</div>
          </Tab>
          <Tab id='hiring-tab' label="Hiring Process" value="Hiring Process" onClick={()=> this.getHiring(this.props)}>
            <GithubButton title='Add Interview Question' />
            <div>{this.state.companyInterviews}</div>
          </Tab>
        </Tabs>
      </div>
    )
  }
}
