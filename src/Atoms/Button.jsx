import React from 'react'

const Button = ({content, onclick, color}) => {
  return (
    <button onClick={onclick} style={{backgroundColor:color}}>{content}</button>
  )
}

export default Button