import React, {Component} from 'react'
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

export default class PopUpStateDropDown extends Component {
  constructor() {
    super()
    this.state = {
      selectedState: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e, i, value) {
    console.log('bug', value)
    this.setState({ selectedState: value })
  }

  render() {
    return(
      <div>
        <SelectField
                 floatingLabelText="State"
                 value={this.state.selectedState}
                 onChange={this.handleChange}
                 maxHeight={200}
               >
                 <MenuItem value={'CO'} primaryText="Colorado" />
                 <MenuItem value={'MN'} primaryText="Minnesota" />
                 <MenuItem value={"WI"} primaryText="Wisconson" />
                 <MenuItem value={"MI"} primaryText="Michigan" />
                 <MenuItem value={"FL"} primaryText="Florida" />
               </SelectField>
      </div>
    )
  }
}
