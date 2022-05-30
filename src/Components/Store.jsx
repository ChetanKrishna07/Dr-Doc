import React from 'react'
import Colors from '../colorsPallate'

const Store = (props) => {

    let address = ['flat # 102, Classic Avenue', 'Street # 4, Czech Colony', 'Sanathnagar', 'Hyderbad - 500018']
    let phone = '+919999999999'
    let website = 'www.superdoc.com'
    const [showInfo, setShow] = React.useState(false)
    const headerStyles = {
        backgroundColor: Colors.bg,
        display: 'flex',
        width: '70%',
        height: '60px',
        margin: 'auto',
        borderRadius: showInfo ? '15px 15px 0px 0px' : '15px',
        alignItems: 'center',
        padding: '0px 25px 0px 25px',
        justifyContent: 'space-between',
        boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25), -4px -4px 4px rgba(255, 255, 255, 0.65)',
        marginTop: '20px',
        cursor: 'pointer',
        transition: '0.3s',
        overflowX: 'auto'
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

    const headings = {
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
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        width: '70%',
        height: showInfo ? '200px' : '0px',
        margin: 'auto',
        borderRadius: showInfo ? '0px 0px 15px 15px' : '15px',
        alignItems: 'center',
        padding: '0px 25px 0px 25px',
        justifyContent: 'space-between',
        boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25), -4px 0px 4px rgba(255, 255, 255, 0.65)',
        marginTop: showInfo ? '10px' : '10px',
        marginBottom: showInfo ? '30px' : '0px',
        cursor: 'pointer',
        transition: '0.3s',
        overflow: 'auto',
        textAlign: 'left'
    }

    const infoAvailable = {
        gridColumn: '1/2',
        display: 'flex',
        alignContent: 'flex-start',
        width: '100%',
        height: '100%',
        paddingTop: '25px',
        flexDirection: 'column'
    }

    const infoUnavailable = {
        gridColumn: '2/3',
        display: 'flex',
        alignContent: 'flex-start',
        width: '100%',
        height: '100%',
        paddingTop: '25px',
        flexDirection: 'column'
    }

    const infoAddress = {
        gridColumn: '3/4',
        display: 'flex',
        alignContent: 'flex-start',
        height: '100%',
        paddingTop: '25px',
        flexDirection: 'column'
    }

    const infoPhWeb = {
        gridColumn: '4/5',
        display: 'flex',
        alignContent: 'flex-start',
        width: '100%',
        height: '100%',
        paddingTop: '25px',
        flexDirection: 'column'
    }

    const addLine = {
        fontSize: '0.8em',
        margin: '0px'
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
                <div style={infoAvailable}>
                    <h1 style={available}>Available :</h1>
                    {props.availableList.map((med) => {
                        return <p>{med}</p>
                    })}
                </div>
                <div style={infoUnavailable}>
                    <h1 style={unavailable}>Unavailable :</h1>
                    {props.unavailableList.map((med) => {
                        return <p>{med}</p>
                    })}
                </div>
                <div style={infoAddress}>
                    <h1 style={headings}>Address :</h1>
                    {props.address && props.address.slice(0, -1).map((med) => {
                        return <p style={addLine}>{med},</p>
                    })}
                    <p style={addLine}>{props.address && props.address.slice(-1)}</p>
                </div>
                <div style={infoPhWeb}>
                    <h1 style={headings}>Phone number :</h1>
                    <p>{props.phone}</p>
                    <h1 style={headings}>Website :</h1>
                    <a href={props.website}>{props.website}</a>
                </div>
            </div>
        </div>
    )
}

export default Store