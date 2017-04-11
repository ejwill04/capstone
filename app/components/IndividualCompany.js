import React, {Component} from 'react'

export default class IndividualCompany extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    let { name, industry, size, users } = this.props
    console.log(users)
    return (
      <div className='individualcompany-container'>
          <h2 className='company-name'>{name}</h2><p className='company-alums'>{users.length}</p>
          <div>
            <p className='company-size'>{size}</p>
            <p className='company-industry'>{industry}</p>
          </div>
      </div>
    )
  }
}
