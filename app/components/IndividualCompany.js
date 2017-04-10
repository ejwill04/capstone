import React from 'react'


export default class IndividualCompany extends React.Component {


  render() {
    return (
      <div className='individualcompany-container'>
        <h2 className='company-name' onClick={}>Name</h2><p className='company-alums'>  3</p>
        <div>
          <p className='company-size'>1-10</p>
          <p className='company-industry'>Health</p>
        </div>
      </div>
    )
  }
}
