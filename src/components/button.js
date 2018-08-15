import React from 'react'

const Button = (props) =>{
    return(
        <button type="button" className={props.style} onClick = {props.handleFormSubmit}>{props.displayName}</button>
    )
}

export default Button