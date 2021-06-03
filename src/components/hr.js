import React from 'react'

const Hr = ({ formatted, width }) => {
  if (formatted === 'left') {
    return (
      <div style={{
        width: width || '50px'
      }}><hr /></div>
    )
  } else if (formatted === 'center') {
    return (
      <div style={{
        width: width || '50px',
        margin: '0 auto'
      }}><hr /></div>
    )
  } else if (formatted === 'right') {
    return (
      <div style={{
        width: width || '50px',
        marginLeft: 'auto',
        marginRight: '0'
      }}><hr /></div>
    )
  } else {
    return (
      <div style={{
        width: width || '50px',
      }}><hr /></div>
    )
  }
}

export default Hr