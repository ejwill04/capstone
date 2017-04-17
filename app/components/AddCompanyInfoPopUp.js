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

export default class AddCompanyInfoPopUp extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
      message: '',
      user_id: 1
    }
  }

  postAComment() {
    let { company_id, param_name } = this.props
    let {message, user_id } = this.state
    let comment = {
      message,
      user_id,
      company_id
    }

    fetch(`http://localhost:3000/api/v1/${param_name}`,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(
        comment
      ),
    })
      .then((response) => response.json())
      .then((payload) => console.log(payload))
  }

  handleOpen() {
    // this.getLocalStorageData()
    this.setState({ open: true })
  }

  // getLocalStorageData() {
  //   let userProfile = auth.getProfile()
  //   let { email, name, picture, url } = userProfile
  //   this.setState({ email, name, github_url: url, github_avatar: picture })
  // }

  handleClose() {
    this.setState({ open: false })
  }

  handleSubmit() {
    this.postAComment()
  }

  checkForUser(actions) {
    if(localStorage.id_token) {
      return (
        <div>
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
                  autoScrollBodyContent={true}>
              <TextField floatingLabelText={`Your ${this.props.text}`}
                         hintText='Say something'
                         onChange={(e) => this.setState({ message: e.target.value })}>
              </TextField>

          </Dialog>
        </div>
        )
    }
  }

  render() {
    const actions = [
      <FlatButton
        label='Cancel'
        primary={true}
        onTouchTap={() => this.handleClose()}
      />,
      <FlatButton
        label='Submit'
        primary={true}
        keyboardFocused={true}
        onTouchTap={(e) => {
          this.handleSubmit()
          this.handleClose()}}
      />,
    ];

    return (
      <div>
        {this.checkForUser(actions)}
      </div>
    );
  }
}
