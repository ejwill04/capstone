// // when a user clicks on the add company button, a form pops up
// // user is able to enter Company name, industry, tech stack, review, interview questions, do you currently work here?, are you open to others reaching out to  you? -- slack handle , email address. Submit button.
import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const styles = {
  radioButton: {
    marginTop: 16,
  },

  toggle: {
    marginBottom: 16,
  }
}


export default class AddCompanyForm extends React.Component{

  state = {
    open: false
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  return (
  <div>
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
    <Toggle
      label="I currently work here"
      labelPosition="right"
      style={styles.toggle}
    />
    <TextField
      floatingLabelText="Slack handle"
      hintText="macDaddy"></TextField>
    <TextField
      floatingLabelText="Email Address"
      hintText="macDaddy@daddymac.com"></TextField>
    </div>
  )
}

export default AddCompanyForm
