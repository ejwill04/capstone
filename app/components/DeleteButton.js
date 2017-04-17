import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const style = {
  marginRight: 20,
}

const DeleteButton = (props) => (
    <FloatingActionButton mini={true}
                          style={style}
                          children='x'
                          backgroundColor='#7E8787'
                          onClick={()=> props.handleClick()}>
      </FloatingActionButton>
)

export default DeleteButton
