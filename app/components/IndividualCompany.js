import React, {Component} from 'react'



const IndividualCompany = (props) => {
  return (
    <div className='individualcompany-container'>
        <h2 className='company-name'>{props.name}</h2><p className='company-alums'>  3</p>
        <div>
          <p className='company-size'>{props.employees}</p>
          <p className='company-industry'>{props.industry}</p>
        </div>
    </div>
  )
}

export default IndividualCompany
