import React, {Component} from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

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

  editDialog(actions) {
      return (
        <div>
          <i className='material-icons edit-btn'
             onClick={() => this.handleOpen()}>
            create
          </i>
          <Dialog title='Edit this company'
                  actions={actions}
                  modal={false}
                  open={this.state.open}
                  onRequestClose={() => this.handleClose()}>
          </Dialog>
        </div>
        )
  }

  render() {
    const actions = [
      <FlatButton
        label='Edit'
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
      </div>
    );
  }
}
