import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog';
import AddCompanyForm from './AddCompanyForm'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton';
// import Toggle from 'material-ui/Toggle'


export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)

  }
  handleOpen()  {
    console.log('open')
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ]

    return (
      <div className='header-container'>
        <input className='header-input'
          placeholder='filter search' />
          <button>Filter</button>
          <button onClick={this.handleOpen}>Add Company</button>
          <Dialog
            title="Scrollable Dialog"
            modal={false}
            actions={actions}
            open={this.state.open}
            onRequestClose={this.handleClose}
            autoScrollBodyContent={true}
          >
            <TextField
              floatingLabelText="Company Name"
              hintText="Ex:ABC Co."></TextField>
            <TextField
              floatingLabelText="Industry"
              hintText="Roofing"></TextField>
            <TextField
              floatingLabelText="Tech Stack"
              hintText="Java, React"></TextField>
            <TextField
              floatingLabelText="Review"
              hintText="We have TONS of fun."></TextField>
            <TextField
              floatingLabelText="Interview Questions"
              hintText="What is your greatest weakness?"></TextField>
            <TextField
              floatingLabelText="Slack handle"
              hintText="macDaddy"></TextField>
            <TextField
              floatingLabelText="Email Address"
              hintText="macDaddy@daddymac.com"></TextField>
          </Dialog>
        </div>
      )
  }
}
