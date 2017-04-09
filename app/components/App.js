import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import '../../styles/index.scss'
// import ResultsPage from './ResultsPage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import HeroVideo from './HeroVideo'
import Footer from './Footer'
import Button from './Button'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'
const injectTapEventPlugin = require("react-tap-event-plugin")


const dropDownStyles = {
  customWidth: {
    width: 400,
  },
}

const menuStates = [
  {value: "AL", name: 'Alabama'},
  {value: "AK", name: 'Alaska'},
  {value: "AZ", name: 'Arizona'},
  {value: "AR", name: 'Arkansas'},
  {value: "CO", name: 'Colorado'}
]

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      value: "AL"
    }
    injectTapEventPlugin()
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

  handleChange(e,i,value){
    this.setState({ value })
    console.log(value)
  }


  menuItems(states){
    return menuStates.map((states) => (
      <MenuItem
        key={states.value}
        insetChildren={true}
        checked={this.state.value.includes(states.value)}
        value={states.value}
        primaryText={states.name}
      />
    )
    )
  }

  fetchJobsByState(state){
    fetch(`http://localhost:3000/api/v1/locations/${state}`, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
      console.log('State data: ', data)
    })
    .catch(err => err)
  }

  render() {
    return (
      <MuiThemeProvider>
        <section>
        <HeroVideo />
        <div className="dropdown-menu-container">
        <SelectField
          className="dropdown"
          floatingLabelText="State"
          value={this.state.value}
          onChange={ this.handleChange.bind(this) }
          style={dropDownStyles.customWidth}
          labelStyle={{fontSize: '30px'}}
          menuItemStyle={{fontSize: '24px', lineHeight: '35px'}}
          floatingLabelFixed={true}
          floatingLabelStyle={{color: '#ff4b8d', marginTop: '-25px', fontSize: '24px'}}
          underlineStyle={{display: 'none'}}
          iconStyle={{fill: '#2E3131'}}

          >
          {this.menuItems(menuStates)}
        </SelectField>
        <Link to="/companies"><Button className="go-btn" title="Go" handleClick={()=> this.fetchJobsByState(this.state.value)} /></Link>
        <Footer />
        </div>
      </section>
      </MuiThemeProvider>
    )
  }
}
