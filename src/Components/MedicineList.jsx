import React from 'react'
import { Button } from 'react-bootstrap'


const Medicine = (props) => {

    const buttonStyle = {
        backgroundColor: "red",
        border: "none",
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: "Source Sans Pro",
        fontWeight: 600,
        height: 30,
        fontSize: "0.8em"
    }

    const customStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: 300
    }

    const listStyle = {
        fontFamily: "Source Sans Pro",
        fontWeight: 600,
        fontSize: "1.2em",
        listStyle: "none"
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}>
            <div className='medicine' style={customStyle}>
                <li style={listStyle}>{props.name}</li>
                <Button style={buttonStyle} onClick={() => {
                    props.handleClick(props.index)
                }}>Remove</Button>
            </div>
        </div>
    )
}

export default Medicine