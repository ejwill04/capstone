import React, {Component} from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'


const styles = {
  radioButton: {
    marginTop: 16,
  },
}

export default class EditButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      company_name: '',
      city: '',
      tech_stack:'',
      value: 1,
      num_of_emp: ''
    }
  }

  handleOpen() {
    this.setState({ open: true })
  }

  handleClose() {
    this.setState({ open: false })
  }

  handleSubmit() {
    console.log(this.state.num_of_emp)
  }

  editDialog(actions) {
      return (
        <div>
          <i className='material-icons edit-btn'
             onClick={() => this.handleOpen()}>
            &#xE150;
          </i>
          <Dialog title='Edit this company'
                  actions={actions}
                  modal={false}
                  open={this.state.open}
                  onRequestClose={() => this.handleClose()}>
              <TextField floatingLabelText='Company Name'
                          defaultValue={this.props.companyData[0].name}
                          onChange={(e) =>  this.setState({ company_name: e.target.value }) }></TextField>
              <TextField floatingLabelText='City'
                          defaultValue={this.props.cityName}
                          onChange={(e) =>  this.setState({ city: e.target.value }) }></TextField>
              <TextField floatingLabelText='Industry'
                          defaultValue={this.props.companyData[0].industry}
                          onChange={(e) =>  this.setState({ industry: e.target.value }) }></TextField>
              <TextField floatingLabelText='Tech Stack'
                          defaultValue={this.props.companyData[0].tech_stack}
                          onChange={(e) =>  this.setState({ tech_stack: e.target.value }) }></TextField>
              <SelectField
                floatingLabelText='# of Employees'
                value={this.state.value}
                 >
                 <MenuItem value={1}
                           primaryText='1-10'
                           onClick={(e) => this.setState({ num_of_emp: '1-10', value: 1 })}/>
                 <MenuItem value={2}
                           primaryText='11-40'
                           onClick={(e) => this.setState({num_of_emp: '11-40', value: 2 })}/>
                 <MenuItem value={3}
                           primaryText='41-100'
                           onClick={(e) => this.setState({num_of_emp: '41-100', value: 3 })}/>
                 <MenuItem value={4}
                           primaryText='100+'
                           onClick={(e) => this.setState({ num_of_emp: '100+', value: 4 })}/>
              </SelectField>
          </Dialog>
        </div>
        )
  }

  render() {
    const actions = [
      <FlatButton
        label='Cancel'
        primary={true}
        onTouchTap={() => this.handleClose()}
      />,
      <FlatButton
        label='Save'
        primary={true}
        keyboardFocused={true}
        onTouchTap={(e) => {
          this.handleSubmit()
          this.handleClose()}}
      />,
    ];

    return (
      <div>
        {this.editDialog(actions)}
      </div>
    );
  }
}
