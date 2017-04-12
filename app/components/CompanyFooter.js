import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

const CompanyFooter = (props) => {

  const getReviews = ()=> {
    fetch(`http://localhost:3000/api/v1/reviews/company/${props.data.id}`, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(response => {
      console.log(response[0].message)
    })
    .catch(err => err)
  }

  const getHiring = ()=> {
    fetch(`http://localhost:3000/api/v1/interview_questions/company/${props.data.id}`, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(response => {
      console.log(response[0].message)
    })
    .catch(err => err)
  }

  return (
    <div id="company-footer">
      <Tabs>
        <Tab id='reviews-tab' label="Reviews" value="Reviews" onClick={()=> getReviews()}>
          {/* <div>{props.company}</div> */}
        </Tab>
        <Tab id='hiring-tab' label="Hiring Process" value="Hiring Process" onClick={()=> getHiring()}>
          {/* <div>{props.company}</div> */}
        </Tab>
      </Tabs>
    </div>
  )
}

module.exports = CompanyFooter;


// /api/v1/reviews/company/:company_id
