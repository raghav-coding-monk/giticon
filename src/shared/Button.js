import React from 'react'

const Button = ({children, version, type, isDisabled}) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version} ${isDisabled && 'btn-disabled'}`}>
        {children}
    </button>
  )
}

export default Button
