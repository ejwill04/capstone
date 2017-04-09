import React, { Component } from 'react'
import { render } from 'react-dom'
import '../styles.scss'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import HeroVideo from './HeroVideo'
import Footer from './Footer'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'
const injectTapEventPlugin = require("react-tap-event-plugin")


const styles = {
  customWidth: {
    width: 150,
  },
}

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      value: 1
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
  render() {
    let menuItems = [
      {
        value: 1, primaryText: 'Alabama',
        value: 2, primaryText: 'Alaska'
      }
    ]
    return (
      <MuiThemeProvider>
        <div>
        <HeroVideo />
        <SelectField
          floatingLabelText="State"
          value={this.state.value}
          onChange={ this.handleChange.bind(this) }
          style={styles.customWidth}
          floatingLabelFixed={true}
        >
          <MenuItem value={1} label="Alabama" primaryText="AL" />
          <MenuItem value={2} label="Alaska" primaryText="AK"  />
          <MenuItem value={3} label="Arizona" primaryText="AZ" />
          <MenuItem value={4} label="Arkansas" primaryText="AR" />
          <MenuItem value={5} label="California" primaryText="CA" />
          <MenuItem value={6} label="Colorado" primaryText="CO" />
          <MenuItem value={7} label="Connecticut" primaryText="CT" />
          <MenuItem value={8} label="Delaware" primaryText="DE" />
          <MenuItem value={9} label="Florida" primaryText="FL" />
          <MenuItem value={10} label="Georgia" primaryText="GA" />
          <MenuItem value={11} label="Hawaii" primaryText="HI" />
          <MenuItem value={12} label="Idaho" primaryText="ID" />
          <MenuItem value={13} label="Illinois" primaryText="IL" />
          <MenuItem value={14} label="Indiana" primaryText="IN" />
          <MenuItem value={15} label="Iowa" primaryText="IA" />
          <MenuItem value={16} label="Kansas" primaryText="KS" />
          <MenuItem value={17} label="Kentucky" primaryText="KY" />
          <MenuItem value={18} label="Louisiana" primaryText="LA" />
          <MenuItem value={19} label="Maine" primaryText="ME" />
          <MenuItem value={20} label="Maryland" primaryText="MD" />
          <MenuItem value={21} label="Massachusetts" primaryText="MA" />
          <MenuItem value={22} label="Michigan" primaryText="MI" />
          <MenuItem value={23} label="Minnesota" primaryText="MN" />
          <MenuItem value={24} label="Mississippi" primaryText="MS" />
          <MenuItem value={25} label="Missouri" primaryText="MO" />
          <MenuItem value={26} label="Montana" primaryText="MT" />
          <MenuItem value={27} label="Nebraska" primaryText="NE" />
          <MenuItem value={28} label="Nevada" primaryText="NV" />
          <MenuItem value={29} label="New Hampshire" primaryText="NH" />
          <MenuItem value={30} label="New Jersey" primaryText="NJ" />
          <MenuItem value={31} label="New Mexico" primaryText="NM" />
          <MenuItem value={32} label="New York" primaryText="NY" />
          <MenuItem value={33} label="North Carolina" primaryText="NC" />
          <MenuItem value={34} label="North Dakota" primaryText="ND" />
          <MenuItem value={35} label="Ohio" primaryText="OH" />
          <MenuItem value={36} label="Oklahoma" primaryText="OK" />
          <MenuItem value={37} label="Oregon" primaryText="OR" />
          <MenuItem value={38} label="Pennsylvania" primaryText="PA" />
          <MenuItem value={39} label="Rhode Island" primaryText="RI" />
          <MenuItem value={40} label="South Carolina" primaryText="SC" />
          <MenuItem value={41} label="South Dakota" primaryText="SD" />
          <MenuItem value={42} label="Tennessee" primaryText="TN" />
          <MenuItem value={43} label="Texas" primaryText="TX" />
          <MenuItem value={44} label="Utah" primaryText="UT" />
          <MenuItem value={45} label="Vermont" primaryText="VT" />
          <MenuItem value={46} label="Virginia" primaryText="VA" />
          <MenuItem value={47} label="Washington" primaryText="WA" />
          <MenuItem value={48} label="West Virginia" primaryText="WV" />
          <MenuItem value={49} label="Wisconsin" primaryText="WI" />
          <MenuItem value={50} label="Wyoming" primaryText="WY" />
        </SelectField>
        <Footer />
        </div>
      </MuiThemeProvider>
    )
  }
}
