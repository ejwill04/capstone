import React, { Component } from 'react'
import { render } from 'react-dom'
import '../styles.scss'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import HeroVideo from './HeroVideo'
import Footer from './Footer'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentDidMount() {
    console.log('called did mount')
    fetch(`http://localhost:3000/api/v1/users`, {
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
      <MuiThemeProvider>
        <div>
        <HeroVideo />
        <Footer />
        </div>
      </MuiThemeProvider>
    )
  }
}
