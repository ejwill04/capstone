import React, { Component } from 'react'
import { render } from 'react-dom'
import '../styles.scss'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import HeroVideo from './HeroVideo'
import Footer from './Footer'
import Button from './Button'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'
const injectTapEventPlugin = require("react-tap-event-plugin")


const styles = {
  customWidth: {
    width: 150,
  },
}

const menuStates = [
  {value: "AL", name: 'Alabama'},
  {value: "AK", name: 'Alaska'},
  {value: "AZ", name: 'Arizona'},
  {value: "AR", name: 'Arkansas'}
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


//onNewRequest={this.handleChange}

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

  render() {
    // make API call to table, find the jobs in that state
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
          style={styles.customWidth}
          floatingLabelFixed={true}
          floatingLabelStyle={{color: 'magenta'}}
          style={{color: "magenta"}}
          iconStyle={{color: "magenta"}}
          >
          {this.menuItems(menuStates)}
        </SelectField>
        <Button className="go-btn" title="Go" handleClick={()=> console.log('button')} />
        <Footer />
        </div>
      </section>
      </MuiThemeProvider>
    )
  }
}
