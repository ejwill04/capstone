import React, {Component} from 'react'
import { Link } from 'react-router'

export default class IndividualCompany extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    let { name, industry, size, users, state, company_id } = this.props
    return (
      <div>
        <Link to={`/${state}/${company_id}`} >
          <div className='individualcompany-container'>
              <h2 className='company-name'>{name}</h2><p className='company-alums'>{users.length}</p>
              <div>
                <p className='company-size'>{size}</p>
                <p className='company-industry'>{industry}</p>
              </div>
          </div>
        </Link>
      </div>
    )
  }
}
