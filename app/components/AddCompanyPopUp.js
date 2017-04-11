import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'

const styles = {
  radioButton: {
    marginTop: 16,
  },
};

export default class AddCompanyPopUp extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
    }
  }

  handleOpen() {
    console.log('open')
    this.setState({ open: true });
  };

  handleClose() {
    this.setState({ open: false });
  };

  handleSubmit() {
    console.log('form submit')
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => this.handleClose()}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={(e) => {
          this.handleClose()
          console.log('submit button was clicked', e)}}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Add A Company"
                      onTouchTap={() => this.handleOpen()} />
        <Dialog title="Add A Company"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={() => this.handleClose()}
                autoScrollBodyContent={true}>
          <form onSubmit={() => this.handleSubmit()}>
            <TextField floatingLabelText="Company Name"
                       hintText="Ex:ABC Co."></TextField>
            <TextField floatingLabelText="Industry"
                       hintText="Roofing"></TextField>
            <TextField floatingLabelText="Tech Stack"
                       hintText="Java, React"></TextField>
            <TextField floatingLabelText="Review"
                       hintText="We have TONS of fun."></TextField>
            <TextField floatingLabelText="Interview Questions"
                       hintText="What is your greatest weakness?"></TextField>
            <Toggle label="I currently work here"
                    labelPosition="right"
                    style={styles.toggle} />
            <TextField floatingLabelText="Slack handle"
                       hintText="@macDaddy"></TextField>
            <TextField floatingLabelText="Email Address"
                       hintText="macDaddy@daddymac.com"></TextField>
          </form>
        </Dialog>
      </div>
    );
  }
}
