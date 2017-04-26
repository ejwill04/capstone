import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import AuthService from '../helpers/AuthService'

import config from '../../config.env'

const auth = new AuthService(config.CLIENT_ID, 'gabitron.auth0.com')

export default class AddCompanyInfoPopUp extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
      message: '',
    }
  }

  handleOpen() {
    this.setState({ open: true })
  }

  handleClose() {
    this.setState({ open: false })
  }

  handleSubmit() {
    let { company_id, param_name } = this.props
    let { message } = this.state
    this.props.postAComment(company_id, param_name, message)
  }

  checkForUser(actions) {
    if (localStorage.id_token) {
      return (
        <div className='add-company-info'>
          <RaisedButton label={`Add ${this.props.text}`}
                        className='add-comment-btn'
                        backgroundColor='#00C2D2'
                        labelColor='#FFF'
                        onTouchTap={() => this.handleOpen()} />
          <Dialog title={`Add ${this.props.text} to this Company`}
                  actions={actions}
                  modal={false}
                  open={this.state.open}
                  onRequestClose={() => this.handleClose()}
                  autoScrollBodyContent>
              <TextField floatingLabelText={`Your ${this.props.text}`}
                         hintText='Say something'
                         multiLine
                         fullWidth
                         onChange={(e) => this.setState({ message: e.target.value })} />
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
    ]

    return (
      <div>
        {this.checkForUser(actions)}
      </div>
    )
  }
}
