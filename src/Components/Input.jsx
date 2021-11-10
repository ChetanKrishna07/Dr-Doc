import React from 'react'
import { Form } from 'react-bootstrap';
import './Input.css';
import Colors from '../colorsPallate'

const Input = (props) => {

    return (
        <div className="inputGroup">
            <Form.Label className="label">{props.name}</Form.Label>
            <Form.Control
                style={{ backgroundColor: Colors.bg }}
                className="input" type={props.type}
                placeholder={props.placeholder}
                onChange={props.handleChange}
                value={props.value}
            />
        </div>
    )
}

export default Input;