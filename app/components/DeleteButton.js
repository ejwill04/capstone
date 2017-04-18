import React, {Component} from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

const styles = {
  radioButton: {
    marginTop: 16,
  },
}

export default class DeleteButton extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
    }
    this.deleteDialog = this.deleteDialog.bind(this)
  }

  handleOpen() {
    this.setState({ open: true })
  }

  handleClose() {
    this.setState({ open: false })
  }

  handleSubmit() {
    this.props.deleteAComment(this.props.id, this.props.company_id)
  }

  deleteDialog(actions) {
      return (
        <div>
          <i className='material-icons delete-btn'
             onClick={() => this.handleOpen()}>
            clear
          </i>
          <Dialog title={`Are you sure you want to delete?`}
                  actions={actions}
                  modal={false}
                  open={this.state.open}
                  onRequestClose={() => this.handleClose()}
                  autoScrollBodyContent={true}>
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
        {this.deleteDialog(actions)}
      </div>
    );
  }
}
