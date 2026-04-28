import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ text, bgColor, textColor }) => {
    const headerStyle = {
        backgroundColor: bgColor,
        color: textColor,
        padding: '20px',
        textAlign: 'center'
    }
    return (
        <header style={headerStyle}>
            <h1>{text}</h1>
        </header>
    )
}

Header.defaultProps={
    text: 'feedback UI',
}

Header.protoTypes={
    text: PropTypes.string,
}
export default Header


// with ES7 react redux snippets extension , we can do import 