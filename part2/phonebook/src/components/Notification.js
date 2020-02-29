import React from 'react'

const successCss = 
{
  color: 'green',
  background: 'lightgrey',
  fontSize: '20px',
  borderStyle: 'solid',
  borderRadius: '5px',
  padding: '10px',
  marginBottom: '10px'
}

const Notification = (props) => {
    if (props.message === null) {
        return null
    }

    return (
        <div style={successCss}>
            {props.message}
        </div>
    )
}

export default Notification