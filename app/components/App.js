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
import RaisedButton from 'material-ui/RaisedButton'
import statesReference from './statesReference'
injectTapEventPlugin()

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      availableStates: [],
      selectedState: 'CO'
    }
    this.handleStateChange = this.handleStateChange.bind(this)
    this.menuItems = this.menuItems.bind(this)
  }

  componentWillMount() {
    fetch(`http://localhost:3000/api/v1/locations`, {
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

  handleStateChange(e,i,value) {
    this.setState({ selectedState: value })
  }

  menuItems() {
    let { availableStates, selectedState } = this.state
    return availableStates.map(state => (
      <MenuItem key={state}
                insetChildren={true}
                checked={selectedState.includes(state)}
                value={state}
                primaryText={statesReference[state]} />
    ))
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
            <SelectField className="dropdown"
                         floatingLabelText="State"
                         value={this.state.selectedState}
                         onChange={ this.handleStateChange }
                         style={dropDownStyles.customWidth}
                         labelStyle={{fontSize: '30px'}}
                         menuItemStyle={{fontSize: '24px', lineHeight: '35px'}}
                         floatingLabelFixed={true}
                         floatingLabelStyle={{color: '#ff4b8d', marginTop: '-25px', fontSize: '24px'}}
                         underlineStyle={{display: 'none'}}
                         iconStyle={{fill: '#2E3131'}}
                         maxHeight={220} >
              {this.menuItems()}
            </SelectField>
            <Link to={`/${this.state.selectedState}`}>
              <Button className="go-btn"
                      title="go" />
            </Link>
            <Footer />
          </div>
        </section>
      </MuiThemeProvider>
    )
  }
}

const style = {
  margin: 18,
}

const dropDownStyles = {
  customWidth: {
    width: 400,
  },
}
