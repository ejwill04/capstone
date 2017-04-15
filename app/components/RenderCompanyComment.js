import React, { Component } from 'react'
import moment from 'moment'

export default class RenderCompanyComment extends Component {
  constructor(props) {
    super(props)
    this.state  = {
      company_id: ''
    }
  }

  componentWillReceiveProps(newProps) {
    return newProps !== this.props
  }

  render() {
    let messages = this.props.data.length > 0 ?
     this.props.data.map((obj, i) => {
       return (
         <div key={i} className='company-comment-wrapper'>
           <div className='company-comment-created_at'>{moment(obj.created_at).format('MMMM Do, YYYY')}</div>
           <div className='company-comment-message'>{obj.message}</div>
         </div>
       )
    }) : null

    return (
      <div>
        {messages}
      </div>
    )
  }
}
