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
  constructor() {
    super()
    this.state = {
      open: false,
      company_name: '',
      city: '',
      tech_stack:'',
      numofemployees: ''
    }
    this.editDialog = this.editDialog.bind(this)
  }

  handleOpen() {
    this.setState({ open: true })
  }

  handleClose() {
    this.setState({ open: false })
  }

  handleSubmit() {
    this.props.editaComment(this.props.id, this.props.company_id)
  }

  retrieveCompanyInfo() {
    console.log(this.props.companyData)

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
                          defaultValue={this.props.companyData[0].name}></TextField>
              <TextField floatingLabelText='City'
                          defaultValue={this.props.cityName}></TextField>
              <TextField floatingLabelText='Industry'
                          defaultValue={this.props.companyData[0].industry}></TextField>
              <TextField floatingLabelText='Tech Stack'
                          defaultValue={this.props.companyData[0].tech_stack}></TextField>
              <SelectField
                floatingLabelText='# of Employees'
                multiple={true}
                value={this.props.companyData[0].num_of_emp}
                            >
                         <MenuItem value={1}
                                   primaryText='1-10'
                                   onClick={(e) => this.setState({ num_of_emp: '1-10', value: 1 })}/>
                         <MenuItem value={2}
                                   primaryText='11-40'
                                   onClick={(e) => this.setState({ num_of_emp: '11-40', value: 2 })}/>
                         <MenuItem value={3}
                                   primaryText='41-100'
                                   onClick={(e) => this.setState({ num_of_emp: '41-100', value: 3 })}/>
                         <MenuItem value={4}
                                   primaryText='100+'
                                   onClick={(e) => this.setState({ num_of_emp: '100+', value: 4 })}/></SelectField>
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
        label='Yes'
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
        {this.retrieveCompanyInfo()}
      </div>
    );
  }
}
