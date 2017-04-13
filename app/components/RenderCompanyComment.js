import React, { Component } from 'react';

export default class RenderCompanyComment extends Component {
  constructor(props) {
    super(props)
    this.state  = {
      company_id: ''
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps !== this.props) {
      this.setState({ company_id: newProps })
    }
  }

  render() {
    let messages = this.props.data.length > 0 ?
     this.props.data.map((obj, i) => {
      return <div key={i}>{obj.message}</div>
    }) : null

    return (
      <div>
        {messages}
      </div>
    )
  }
}
