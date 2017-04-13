import React, {Component} from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import AuthService from '../helpers/AuthService'
const auth = new AuthService('z3lAkZTSzkQjkiLGedtGuOcLRCe5czSd', 'gabitron.auth0.com')

const styles = {
  radioButton: {
    marginTop: 16,
  },
};

export default class AddEmployeePopup extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
      name: '',
      remote: false,
      slack: '',
      email: '',
      cohort: '',
      github_url: '',
      github_avatar: '',
    }
  }

  postAUser() {
    let {name, slack, email, company_id, remote, cohort, github_url, github_avatar} = this.state
    let user = {
      name,
      remote,
      slack,
      email,
      company_id,
      cohort,
      github_url,
      github_avatar
    }
console.log('user', user);
    fetch('http://localhost:3000/api/v1/users',
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(
        user
      ),
    })
      .then((response) => response.json())
      .then((payload) => console.log(payload))
  }

  handleOpen() {
    this.getLocalStorageData()
    this.setState({ open: true })
  }

  getLocalStorageData() {
    let userProfile = auth.getProfile()
    let { email, name, picture, url } = userProfile
    this.setState({ email, name, github_url: url, github_avatar: picture })
  }

  handleClose() {
    this.setState({ open: false })
  }

  handleSubmit() {
    console.log('form submit')
    this.postAUser()
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
        <RaisedButton label="Add Yourself"
                      className='add-user-btn'
                      backgroundColor='#00C2D2'
                      labelColor="#FFF"
                      onTouchTap={() => this.handleOpen()} />
        <Dialog title="Add Yourself to this Company"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={() => this.handleClose()}
                autoScrollBodyContent={true}>
            <TextField floatingLabelText="Your Name"
                       hintText="Donald Duck"
                       defaultValue={this.state.name}
                       onChange={(e) => this.setState({name: e.target.value})}></TextField>
            <TextField floatingLabelText="Slack Handle"
                       hintText="@quackquack"
                       onChange={(e) => this.setState({slack: e.target.value})}></TextField>
            <TextField floatingLabelText="Email Address"
                       hintText="quacking@gquack.com"
                       defaultValue={this.state.email}
                       onChange={(e) => this.setState({email: e.target.value})}></TextField>
            <TextField floatingLabelText="Cohort Number"
                       hintText="1610"
                       defaultValue={this.state.cohort}
                       onChange={(e) => this.setState({email: e.target.value})}></TextField>
            <Toggle    label="I work remotely"
                       labelPosition="right"
                       style={styles.toggle}
                       onToggle={(e) => this.setState({ remote: !this.state.remote})}/>
        </Dialog>
      </div>
    );
  }
}
