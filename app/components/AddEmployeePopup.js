import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'
import config from '../../config.env'
import AuthService from '../helpers/AuthService'
const auth = new AuthService(config.CLIENT_ID, 'gabitron.auth0.com')

const styles = {
  radioButton: {
    marginTop: 16,
  },
}

export default class AddEmployeePopup extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      open: false,
      remote: false,
      slack: '',
      email: '',
      cohort: '',
      company_id: '',
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.state.company_id !== newProps) {
      this.setState({ company_id: newProps.companyId })
    }
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

  handleClose(props) {
    this.setState({ open: false })
  }

  handleSubmit() {
    let { name, cohort, slack, email, remote, company_id } = this.state
    let user = { name, cohort, slack, email, remote }
    this.props.updateUser(user, company_id)
  }

  checkForUser(actions) {
    if (localStorage.id_token) {
      return (
        <div>
          <RaisedButton label='Add Yourself'
                        className='add-user-btn'
                        backgroundColor='#00C2D2'
                        labelColor='#FFF'
                        onTouchTap={() => this.handleOpen()} />
          <Dialog title='Add Yourself to this Company'
                  actions={actions}
                  modal={false}
                  open={this.state.open}
                  onRequestClose={() => this.handleClose()}
                  autoScrollBodyContent>
              <TextField floatingLabelText='Your Name'
                         hintText='Donald Duck'
                         defaultValue={this.state.name}
                         onChange={(e) => this.setState({ name: e.target.value })} />
              <TextField floatingLabelText='Slack Handle'
                         hintText='@quackquack'
                         onChange={(e) => this.setState({ slack: e.target.value.substring(0, 1) === '@' ? e.target.value : `@${e.target.value}` })} />
              <TextField floatingLabelText='Email Address'
                         hintText='quacking@gquack.com'
                         defaultValue={this.state.email}
                         onChange={(e) => this.setState({ email: e.target.value })} />
              <TextField floatingLabelText='Cohort Number'
                         hintText='1610'
                         defaultValue={this.state.cohort}
                         onChange={(e) => this.setState({ cohort: e.target.value })} />
              <Toggle    label='I work remotely'
                         labelPosition='right'
                         style={styles.toggle}
                         onToggle={(e) => this.setState({ remote: !this.state.remote })} />
          </Dialog>
        </div>
        )
    }
  }

  render() {
    const actions = [
      <FlatButton
        label='Cancel'
        primary
        onTouchTap={() => this.handleClose()}
      />,
      <FlatButton
        label='Submit'
        primary
        keyboardFocused
        onTouchTap={(e) => {
          this.handleSubmit()
          this.handleClose()
        }}
      />,
    ];

    return (
      <div>
        {this.checkForUser(actions)}
      </div>
    );
  }
}
