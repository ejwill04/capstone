import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import GithubButton from './Button'
import AddCompanyInfoPopUp from './AddCompanyInfoPopUp'
import RenderCompanyComment from './RenderCompanyComment'

export default class CompanyFooter extends Component {
  constructor(props) {
    super(props)
    this.state  = {
      companyReviews: '',
      companyInterviews: ''
    }
    this.getReviews = this.getReviews.bind(this)
    this.getHiring = this.getHiring.bind(this)
  }

  componentWillReceiveProps(newProps) {
    if (this.props !== newProps) {
      this.setState({ companyReviews: '', companyInterviews: '' })
      this.getHiring(newProps)
      this.getReviews(newProps)
    }
  }

  getReviews(company) {
    this.state.companyReviews = []
    fetch(`http://localhost:3000/api/v1/reviews/company/${company.data.id}`, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(response => {
      this.setState({ companyReviews: response })
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
      this.setState({ companyInterviews: response })
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
            <RenderCompanyComment data={this.state.companyReviews} company_id={this.props.data.id} />
          </Tab>
          <Tab id='hiring-tab' label="Hiring Process" value="Hiring Process" onClick={()=> this.getHiring(this.props)}>
            <AddCompanyInfoPopUp company_id={this.props.data.id}
                                 text='an Interview Question'
                                 param_name='interview_questions' />
            <RenderCompanyComment data={this.state.companyInterviews} company_id={this.props.data.id} />
          </Tab>
        </Tabs>
      </div>
    )
  }
}
