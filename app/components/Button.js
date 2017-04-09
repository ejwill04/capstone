import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 18,
}

const Button = (props) => (
  <RaisedButton label={props.title} primary={true} style={style} onClick={props.handleClick} />
)

module.exports = Button
