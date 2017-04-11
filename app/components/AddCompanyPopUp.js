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
      name: '',
      industry: '',
      remote_ok: false,
      tech_stack: '',
      review: '',
      worksThereNow: false,
      interviewQuestion: '',
      slackHandle: '',
      emailAddress: '',
    }
  }

  postACompany() {
    let {name, industry, tech_stack, remote_ok} = this.state
    let company = {
      name,
      industry,
      tech_stack,
      remote_ok
    }
console.log('company', company);
    fetch('http://localhost:3000/api/v1/companies',
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(
        company
      ),
    })
      .then((response) => response.json())
      .then((payload) => console.log(payload))
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
    this.postACompany()
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
          this.handleSubmit()
          this.handleClose()}}
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
            <TextField floatingLabelText="Company Name"
                       hintText="Ex:ABC Co."
                       onChange={(e) => this.setState({name: e.target.value})}></TextField>
            <TextField floatingLabelText="Industry"
                       hintText="Roofing"
                       onChange={(e) => this.setState({industry: e.target.value})}></TextField>
            <Toggle    label="I work remotely"
                       labelPosition="right"
                       style={styles.toggle}
                       onToggle={(e) => this.setState({ remote_ok: !this.state.remote_ok})}/>
            <TextField floatingLabelText="Tech Stack"
                       hintText="Java, React"
                       onChange={(e) => this.setState({tech_stack: e.target.value})}></TextField>
            <TextField floatingLabelText="Review"
                       hintText="We have TONS of fun."
                       onChange={(e) => this.setState({review: e.target.value})}></TextField>
            <TextField floatingLabelText="Interview Questions"
                       hintText="What is your greatest weakness?"
                       onChange={(e) => this.setState({interviewQuestion: e.target.value})}></TextField>
            <Toggle    label="I currently work here"
                       labelPosition="right"
                       style={styles.toggle}
                       onToggle={(e) => this.setState({ worksThereNow: !this.state.worksThereNow})}/>
            <TextField floatingLabelText="Slack handle"
                       hintText="@macDaddy"
                       onChange={(e) => this.setState({slackHandle: e.target.value})}></TextField>
            <TextField floatingLabelText="Email Address"
                       hintText="macDaddy@daddymac.com"
                       onChange={(e) => this.setState({emailAddress: e.target.value})}></TextField>
        </Dialog>
      </div>
    );
  }
}
