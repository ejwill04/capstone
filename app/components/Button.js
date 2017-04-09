import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 18,
}

const Button = (props) => (
  <RaisedButton className={props.className} label={props.title} backgroundColor='#00C2D2' style={style} onClick={props.handleClick} />
)

module.exports = Button