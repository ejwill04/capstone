import React, { Component, PropTypes as T } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import '../../styles/index.scss'
const githubIcon = require('../photos/github.svg')

import HeroVideo from './HeroVideo'
import Footer from './Footer'
import Button from './Button'
import AddCompanyPopUp from './AddCompanyPopUp'
import statesReference from './statesReference'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'
import RaisedButton from 'material-ui/RaisedButton'
import config from '../../config.env'
const injectTapEventPlugin = require('react-tap-event-plugin')

import AuthService from '../helpers/AuthService'
const auth = new AuthService(config.CLIENT_ID, 'gabitron.auth0.com')

injectTapEventPlugin()

export default class App extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      availableStates: [],
      selectedState: 'CO',
      id_token: localStorage.id_token,
      user_profile: auth.getProfile(),
    }
    this.handleStateChange = this.handleStateChange.bind(this)
    this.menuItems = this.menuItems.bind(this)
  }

  componentWillMount() {
    fetch(`/api/v1/locations`, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
      let statesArray = data.map(loco => {
        return loco.state
      })
      let uniqueStatesArray = [...new Set(statesArray)]
      this.setState({ availableStates: uniqueStatesArray })
    })
    .catch(err => err)
  }

  handleStateChange(e, i, value) {
    this.setState({ selectedState: value })
  }

  menuItems() {
    let { availableStates, selectedState } = this.state
    return availableStates.map(state => (
      <MenuItem key={state}
                insetChildren
                checked={selectedState.includes(state)}
                value={state}
                primaryText={statesReference[state]} />
    ))
  }

  loginBtn() {
    return (
      <RaisedButton className='github-btn'
        backgroundColor='#00C2D2'
        label='Log in with'
        labelPosition='before'
        icon={<img className='github-img' src={githubIcon} />}
        onClick={auth.login.bind(this)} />
      )
  }

  // <img class="mobile-img" src={require('../photos/lovisa.png')} />
  render() {
    const { profile } = this.state
    return (
      <MuiThemeProvider>
        <section>
          <div className='login-container'>
            { localStorage.id_token ? <AddCompanyPopUp /> : this.loginBtn() }
          </div>
          <aside className='title-container'>
            <h1 className='neumann-title'>Neumann</h1>
          </aside>
          <div className="hero-img"></div>
          <HeroVideo />
          <div className='dropdown-menu-container'>
            <SelectField className='dropdown'
                         floatingLabelText='Select A State'
                         value={this.state.selectedState}
                         onChange={ this.handleStateChange }
                         style={dropDownStyles.customWidth}
                         labelStyle={{fontSize: '30px'}}
                         menuItemStyle={{fontSize: '24px', lineHeight: '35px'}}
                         floatingLabelFixed
                         floatingLabelStyle={{color: '#ff4b8d', marginTop: '-25px', fontSize: '24px'}}
                         underlineStyle={{display: 'none'}}
                         iconStyle={{ fill: '#2E3131' }}
                         maxHeight={220} >
              {this.menuItems()}
            </SelectField>
            <Link to={`/${this.state.selectedState}`}>
              <Button className='go-btn'
                      title='go'
                      />
            </Link>
            <Footer />
          </div>
        </section>
      </MuiThemeProvider>
    )
  }
}

const dropDownStyles = {
  customWidth: {
    width: 400,
  },
}
