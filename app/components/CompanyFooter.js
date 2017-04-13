import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import GithubButton from './Button'
import AddCompanyInfoPopUp from './AddCompanyInfoPopUp'

export default class CompanyFooter extends Component {
  constructor(props) {
    super(props)
    this.state  = {
      companyReviews: [],
      companyInterviews: []
    }
  }

  // componentWillReceiveProps(newProps) {
  //   return this.props === newProps
  // }

  getReviews(company) {
    this.state.companyReviews = []
    fetch(`http://localhost:3000/api/v1/reviews/company/${company.data.id}`, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(response => {
      response.map((review)=> {
        this.state.companyReviews.push(review.message)
        console.log('review.....', this.state.companyReviews)
      })
    })
    .catch(err => err)
  }

  getHiring(company) {
    this.state.companyInterviews = []
    fetch(`http://localhost:3000/api/v1/interview_questions/company/${company.data.id}`, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(response => {
      response.map((interview)=> {
        this.state.companyInterviews.push(interview.message)
        console.log('interview.....', this.state.companyInterviews)
      })
    })
    .catch(err => err)
  }

  render() {
    return (
      <div id="company-footer">
        <Tabs>
          <Tab id='reviews-tab' label="Reviews" value="Reviews" onClick={()=> this.getReviews(this.props)}>
            <AddCompanyInfoPopUp company_id={this.props.data.id}
                                 text='a Review'
                                 param_name='reviews' />
          </Tab>
          <Tab id='hiring-tab' label="Hiring Process" value="Hiring Process" onClick={()=> this.getHiring(this.props)}>
            <AddCompanyInfoPopUp company_id={this.props.data.id}
                                 text='an Interview Question'
                                 param_name='interview_questions' />
          </Tab>
        </Tabs>
      </div>
    )
  }
}
