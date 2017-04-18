import React, { Component } from 'react'
import DeleteButton from './DeleteButton'
import classNames from 'classnames'

import moment from 'moment'

export default class RenderCompanyComment extends Component {
  constructor(props) {
    super(props)
    this.state  = {
      deleteConfirm: false,
    }
    this.renderDeleteBtn = this.renderDeleteBtn.bind(this)
  }

  componentWillReceiveProps(newProps) {
    this.setState({ deleteConfirm: false })
    return newProps !== this.props
  }

  renderDeleteBtn(user_id, id) {
    if (this.state.deleteConfirm) {
      return (
        <div>
          <button onClick={() => this.props.deleteAComment(id, this.props.company_id)}>Yes</button>
          <button onClick={() => this.setState({ deleteConfirm: false })}>No</button>
        </div>
      )
    } else {
      return (
        <div className='delete-btn'>
          <DeleteButton handleClick={() => this.setState({ deleteConfirm: true })}></DeleteButton>
        </div>
      )
    }
  }

  render() {
    let messages = this.props.data.length > 0 ?
     this.props.data.map((obj, i) => {
       return (
         <div key={i} className='company-comment-wrapper'>
           <div className='company-comment-created_at'>{moment(obj.created_at).format('MMMM Do, YYYY')}</div>
           <div className='company-comment-message'>{obj.message}</div>
           {this.props.user_id === obj.user_id ? this.renderDeleteBtn(obj.user_id, obj.id) : null}
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
