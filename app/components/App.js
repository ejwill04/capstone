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
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 18,
}


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
  {value: "CA", name: 'California'},
  {value: "CO", name: 'Colorado'},
  {value: "CT", name: 'Connecticut'},
  {value: "DE", name: 'Deleware'},
  {value: "FL", name: 'Florida'},
  {value: "GA", name: 'Georgia'},
  {value: "HI", name: 'Hawaii'},
  {value: "ID", name: 'Idaho'},
  {value: "IL", name: 'Illinois'},
  {value: "IN", name: 'Indiana'},
  {value: "IA", name: 'Iowa'},
  {value: "KA", name: 'Kansas'},
  {value: "KY", name: 'Kentucky'},
  {value: "LA", name: 'Louisiana'},
]

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      value: "CO"
    }
    injectTapEventPlugin()
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

  handleStateChange(e,i,value){
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
    fetch(`/api/v1/locations/${state}`, {
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
        <div className='login-container'>
          <RaisedButton className='github-btn'
            backgroundColor='#00C2D2'
            label='Log in with'
            labelPosition='before'
            icon={<img className='github-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2000px-Octicons-mark-github.svg.png'/>}
            handleClick={()=> console.log('github login')} />
        </div>
        <h1 className='neumann-title'>Neumann</h1>
        <HeroVideo />
        <div className="dropdown-menu-container">
        <SelectField
          className="dropdown"
          floatingLabelText="State"
          value={this.state.value}
          onChange={ this.handleStateChange.bind(this) }
          style={dropDownStyles.customWidth}
          labelStyle={{fontSize: '30px'}}
          menuItemStyle={{fontSize: '24px', lineHeight: '35px'}}
          floatingLabelFixed={true}
          floatingLabelStyle={{color: '#ff4b8d', marginTop: '-25px', fontSize: '24px'}}
          underlineStyle={{display: 'none'}}
          iconStyle={{fill: '#2E3131'}}
          maxHeight={220}
          >
          {this.menuItems(menuStates)}
        </SelectField>
        <Link to={`/${this.state.value}`}><Button className="go-btn" title="go" handleClick={()=> this.fetchJobsByState(this.state.value)} /></Link>
        <Footer />
        </div>
      </section>
      </MuiThemeProvider>
    )
  }
}
