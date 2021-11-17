import React from 'react'
import Colors from '../colorsPallate'

const Store = (props) => {

    const [showInfo, setShow] = React.useState(false)

    const headerStyles = {
        backgroundColor: Colors.bg,
        display: 'flex',
        width: '70%',
        height: '60px',
        margin: 'auto',
        borderRadius: '25px',
        alignItems: 'center',
        padding: '0px 25px 0px 25px',
        justifyContent: 'space-between',
        boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25), -4px -4px 4px rgba(255, 255, 255, 0.65)',
        marginTop: '20px',
        cursor: 'pointer'
    }

    const available = {
        color: Colors.secondary,
        fontWeight: 600,
        fontSize: '1.08em',
        marginRight: '15px',
        display: 'flex'
    }

    const unavailable = {
        color: Colors.tertiary,
        fontWeight: 600,
        fontSize: '1.08em',
        display: 'flex'
    }

    const Anum = {
        border: '3px solid',
        borderColor: Colors.secondary,
        width: '27px',
        height: '27px',
        marginLeft: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    const Unum = {
        border: '3px solid',
        borderColor: Colors.tertiary,
        width: '27px',
        height: '27px',
        marginLeft: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    const infoStyle = {
        backgroundColor: Colors.bg,
        display: 'flex',
        width: '70%',
        height: showInfo ? '200px' : '0px',
        margin: 'auto',
        borderRadius: '25px',
        alignItems: 'center',
        padding: '0px 25px 0px 25px',
        justifyContent: 'space-between',
        boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25), -4px -4px 4px rgba(255, 255, 255, 0.65)',
        marginTop: showInfo ? '30px' : '10px',
        marginBottom: showInfo ? '30px' : '0px',
        cursor: 'pointer',
        transition: '0.3s'
    }

    return (
        <div>
            <div style={headerStyles} onClick={() => {
                setShow((prevVal) => {
                    return !prevVal
                })
            }}>
                <h1 style={{ fontSize: '1.4em', fontWeight: 600 }}>{props.storeName}</h1>
                <div style={{ display: 'flex' }}>
                    <div style={available}>Available: <div style={Anum}>{props.available}</div></div>
                    <div style={unavailable}>Unavailable: <div style={Unum}>{props.unavailable}</div></div>
                </div>
            </div>
            <div style={infoStyle}>

            </div>
        </div>
    )
}

export default Store