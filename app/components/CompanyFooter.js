import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import GithubButton from './Button'
import AddCompanyInfoPopUp from './AddCompanyInfoPopUp'
import RenderCompanyComment from './RenderCompanyComment'

export default class CompanyFooter extends Component {
  constructor(props) {
    super(props)
    this.state  = {
      renderedSection: 'Reviews',
      companyReviews: [],
      companyInterviews: []
    }
    this.getReviews = this.getReviews.bind(this)
    this.getHiring = this.getHiring.bind(this)
    this.dataSelector = this.dataSelector.bind(this)
  }

  componentWillReceiveProps(newProps) {
    if (this.props !== newProps) {
      this.getReviews(newProps)
      this.getHiring(newProps)
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
    .catch(err => {
      this.setState({ companyReviews: [] })
    })
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
    .catch(err => {
      this.setState({ companyInterviews: [] })
    })
  }

  dataSelector() {
    return this.state.renderedSection === 'Reviews' ? this.state.companyReviews : this.state.companyInterviews
  }

  render() {
    return (
      <div id='company-footer'>
        <Tabs>
          <Tab id='reviews-tab' label='Reviews' value='Reviews' onClick={()=> this.setState({ renderedSection: 'Reviews' })}>
            <AddCompanyInfoPopUp company_id={this.props.data.id}
                                 text='a Review'
                                 param_name='reviews' />
          </Tab>
          <Tab id='hiring-tab' label='Hiring Process' value='Hiring Process' onClick={()=> this.setState({ renderedSection: 'Interviews' })}>
            <AddCompanyInfoPopUp company_id={this.props.data.id}
                                 text='an Interview Question'
                                 param_name='interview_questions' />
          </Tab>
        </Tabs>
        <RenderCompanyComment data={this.dataSelector()} company_id={this.props.data.id} />
      </div>
    )
  }
}
