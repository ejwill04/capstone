import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  margin: 5,
}

const Button = (props) => (
  <RaisedButton
    className={props.className}
    label={props.title}
    backgroundColor='#00C2D2'
    style={style}
    onClick={props.handleClick}
    icon={props.icon} />
)

module.exports = Button
