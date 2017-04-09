import React, { Component } from 'react'
import { render } from 'react-dom'
import '../styles.scss'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentDidMount() {
    console.log('called did mount')
    fetch(`/api/v1/users`, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
      console.log('data: ', data)
    })
    .catch(err => err)
  }

  render() {
    return (
      <div>
        It works!
      </div>
    )
  }
}
