import React from 'react'
import { Form } from 'react-bootstrap';
import Colors from '../colorsPallate'

const Input = (props) => {

    const inputGroup = {
        display: 'block',
        width: '350px',
        margin: '0px auto 20px auto'
    }

    const label = {
        fontFamily: "Source Sans Pro",
        fontWeight: 600,
        fontSize: '1.2em'
    }

    const input = {
        fontFamily: "Source Sans Pro",
        backgroundColor: Colors.bg
    }

    return (
        <div style={inputGroup}>
            <Form.Label style={label}>{props.name}</Form.Label>
            <Form.Control
                style={input} type={props.type}
                placeholder={props.placeholder}
                onChange={props.handleChange}
                value={props.value}
                onKeyDown={props.handleKeyDown}
            />
        </div>
    )
}

export default Input;