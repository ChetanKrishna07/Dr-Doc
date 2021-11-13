import React from 'react'
import { Button } from 'react-bootstrap'


const MyButton = (props) => {

    const buttonStyle = {
        backgroundColor: props.color,
        border: "none",
        borderRadius: 10,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: "Source Sans Pro",
        fontWeight: 600,
        marginBottom: 30
    }

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Button style={buttonStyle} onClick={props.handleClick}>{props.text}</Button>
        </div>
    )
}

export default MyButton;