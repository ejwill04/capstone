import React, {Component} from 'react'

export default class IndividualCompany extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    let { name, industry, size } = this.props
    return (
      <div className='individualcompany-container'>
          <h2 className='company-name'>{name}</h2><p className='company-alums'>  3</p>
          <div>
            <p className='company-size'>{size}</p>
            <p className='company-industry'>{industry}</p>
          </div>
      </div>
    )
  }
}
