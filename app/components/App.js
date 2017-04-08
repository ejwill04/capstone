import React, { Component } from 'react'
import { render } from 'react-dom'
import '../styles.scss'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import HeroVideo from './HeroVideo'
import Footer from './Footer'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

const injectTapEventPlugin = require("react-tap-event-plugin")

injectTapEventPlugin()

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      value: 2
    }
  }

  handleChange(event, index, value) {
    this.setState({ value })
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
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} label="Alabama" primaryText="AL" />
          <MenuItem value={2} label="Alaska" primaryText="AK" />
          <MenuItem value={3} label="Arizona" primaryText="AZ" />
        </DropDownMenu>
        <Footer />
        </div>
      </MuiThemeProvider>
    )
  }
}
