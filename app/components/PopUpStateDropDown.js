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
        <SelectField floatingLabelText='State'
                     value={this.state.selectedState}
                     onChange={this.handleChange}
                     maxHeight={160} >

                 <MenuItem value={'AL'} primaryText='Alabama' />
                 <MenuItem value={'AK'} primaryText='Alaska' />
                 <MenuItem value={'AZ'} primaryText='Arizona' />
                 <MenuItem value={'AR'} primaryText='Arkansas' />
                 <MenuItem value={'CA'} primaryText='California' />
                 <MenuItem value={'CO'} primaryText='Colorado' />
                 <MenuItem value={'CT'} primaryText='Connecticut' />
                 <MenuItem value={'DE'} primaryText='Delaware' />
                 <MenuItem value={'FL'} primaryText='Florida' />
                 <MenuItem value={'GA'} primaryText='Georgia' />
                 <MenuItem value={'HI'} primaryText='Hawaii' />
                 <MenuItem value={'ID'} primaryText='Idaho' />
                 <MenuItem value={'IL'} primaryText='Illinois' />
                 <MenuItem value={'IN'} primaryText='Indiana' />
                 <MenuItem value={'IA'} primaryText='Iowa' />
                 <MenuItem value={'KS'} primaryText='Kansas' />
                 <MenuItem value={'KY'} primaryText='Kentucky' />
                 <MenuItem value={'LA'} primaryText='Louisiana' />
                 <MenuItem value={'ME'} primaryText='Maine' />
                 <MenuItem value={'MD'} primaryText='Maryland' />
                 <MenuItem value={'MA'} primaryText='Massachusetts' />
                 <MenuItem value={'MI'} primaryText='Michigan' />
                 <MenuItem value={'MN'} primaryText='Minnesota' />
                 <MenuItem value={'MS'} primaryText='Mississippi' />
                 <MenuItem value={'MO'} primaryText='Missouri' />
                 <MenuItem value={'MT'} primaryText='Montana' />

        </SelectField>
      </div>
    )
  }
}
