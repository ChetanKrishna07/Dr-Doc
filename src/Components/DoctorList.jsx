import React from 'react'
import Colors from '../colorsPallate'

const DoctorList = (props) => {

    let address = ['flat # 102, Classic Avenue', 'Street # 4, Czech Colony', 'Sanathnagar', 'Hyderbad - 500018']
    let phone = '+919999999999'
    let website = 'www.superdoc.com'
    // let specialization = "Cardialogit" 
    // let education = ["MBBS, KMC", "DMC Royal College of Liverpool"]
    let online = props.online
    let offline = props.offline
    let status = ""

    if (online && offline) {
        status = "Online and Offline"
    } else if (online) {
        status = "Only Online"
    } else if (offline) {
        status = "Only Offline"
    } else {
        status = "Unavailable"
    }

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

    const statusStyle = {
        color: Colors.primary,
        fontWeight: 600,
        fontSize: '1.08em',
        marginRight: '15px',
        display: 'flex'
    }

    const headings = {
        fontWeight: 600,
        fontSize: '1.08em',
        display: 'flex'
    }

    const infoStyle = {
        backgroundColor: Colors.bg,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
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

    const infoAddress = {
        gridColumn: '1/2',
        display: 'flex',
        alignContent: 'flex-start',
        height: '100%',
        paddingTop: '25px',
        flexDirection: 'column'
    }

    const infoPhWeb = {
        gridColumn: '2/3',
        display: 'flex',
        alignContent: 'flex-start',
        width: '100%',
        height: '100%',
        paddingTop: '25px',
        flexDirection: 'column'
    }

    const infoSpEd = {
        gridColumn: '3/4',
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
                <h1 style={{ fontSize: '1.4em', fontWeight: 600 }}>{props.doctorName}</h1>
                <div style={{ display: 'flex' }}>
                    <div style={statusStyle}>{status}</div>
                </div>
            </div>
            <div style={infoStyle}>
                <div style={infoAddress}>
                    <h1 style={headings}>Address :</h1>
                    {props.address.slice(0, -1).map((med) => {
                        return <p style={addLine}>{med},</p>
                    })}
                    <p style={addLine}>{props.address.slice(-1)}</p>
                </div>
                <div style={infoPhWeb}>
                    <h1 style={headings}>Phone number :</h1>
                    <p>{props.phone}</p>
                    <h1 style={headings}>Website :</h1>
                    <a href={props.website}>{props.website}</a>
                </div>
                <div style={infoSpEd}>
                    <h1 style={headings}>Specialization :</h1>
                    <p>{props.specialization}</p>
                    <h1 style={headings}>Education :</h1>
                    {props.education.slice(0, -1).map((edd) => {
                        return <p style={addLine}>{edd},</p>
                    })}
                    <p style={addLine}>{props.education.slice(-1)}</p>
                </div>
            </div>
        </div>
    )
}

export default DoctorList