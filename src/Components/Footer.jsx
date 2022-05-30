import React from 'react'
import LogoSrc from '../images/main_logo.png'
import FootLogoSrc from '../images/main_logo_white.png'
import Colors from '../colorsPallate'


const Footer = () => {

    const [showServices, setShowServices] = React.useState(false)

    const footerStyle = {
        textAlign: 'center'
    }

    function goHome() {
        console.log("/");
        window.location.href = "/"
    }

    function goAbout() {
        console.log("/about");
        window.location.href = "/about"
    }

    function goSupport() {
        console.log("/support");
        window.location.href = "/support"
    }

    function handleService() {
        setShowServices(!showServices)
    }

    function goDoctor() {
        console.log("/doctors");
        window.location.href = "/doctors"
    }

    function goMedicine() {
        console.log("/medicines");
        window.location.href = "/medicines"
    }

    function goDiagnostics() {
        console.log("/diagnostics");
        window.location.href = "/diagnostics"
    }

    // function goHome() {
    //     console.log("/");
    //     window.location.href = "/"
    // }

    const cardStyle = {
        backgroundColor: Colors.primary,
        width: '100%',
        height: '300px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        marginTop: '200px'
    }

    const leftStyle = {
        backgroundColor: Colors.primary,
        gridColumn: '1 / 2',
        gridRow: '1 / 4',
        display: 'flex',
        flexDirection: 'row'
    }

    const rightOneStyle = {
        backgroundColor: Colors.primary,
        gridColumn: '2 / 4',
        gridRow: '1 / 2',
        display: 'flex',
        alignItems: 'end'
    }

    const rightTwoStyle = {
        backgroundColor: Colors.primary,
        gridColumn: '2 / 4',
        gridRow: '2 / 3',
        // border: '1px solid black',
        display: 'flex',
        alignItems: 'start',
        marginTop: '10px'
    }

    const rightThreeStyle = {
        backgroundColor: Colors.primary,
        gridColumn: '2 / 4',
        gridRow: '3 / 4',
        // border: '1px solid black',
        display: 'flex'
    }

    const imageStyle = {
        backgroundColor: Colors.primary,
        height: '75px'
    }

    const logoStyle = {
        backgroundColor: Colors.primary,
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // border: '1px solid black'
    }

    const rightItemsOne = {
        backgroundColor: Colors.primary,
        color: Colors.bg,
        fontWeight: '400',
        fontSize: '30px',
        marginRight: '1%',
        textAlign: 'left',
        width: '30%',
        cursor: "pointer"
    }

    const rightItemsTwo = {
        backgroundColor: Colors.primary,
        color: Colors.bg,
        fontWeight: '500',
        fontSize: '30px',
        marginRight: '1%',
        textAlign: 'left',
        width: '30%',
        cursor: "pointer"
    }

    const rightItemsThree = {
        backgroundColor: Colors.primary,
        color: Colors.bg,
        fontWeight: '300',
        fontSize: '22px',
        marginRight: '1%',
        textAlign: 'left',
        width: '30%'
    }

    const services = {
        position: "absolute",
        borderRadius: '3px',
        border: showServices ? '1px solid black' : 0,
        padding: showServices ? '10px 30px 10px 10px' : '0px 30px 0px 10px',
        gridColumn: '2 / 3',
        gridRow: '1 / 2',
        marginLeft: "54%",
        marginTop: "105px",
        transition: '0.3s',
        height: showServices ? '123px' : 0,
        overflow: 'hidden'
    }

    const service = {
        padding: 0,
        fontSize: "1.2em",
        marginBottom: "5px",
        cursor: "pointer"
    }

    return (
        <div style={{ fontFamily: 'Source Sans Pro' }}>
            <div style={cardStyle}>
                <div style={leftStyle}>
                    <div style={logoStyle}>
                        <img src={FootLogoSrc} style={imageStyle} />
                    </div>
                </div>
                <div style={rightOneStyle} >
                    <span style={rightItemsOne} onClick={goHome}>Home</span>
                    <span style={rightItemsOne} onClick={handleService}>Services</span>
                    {/* <span style={rightItemsOne}>blog</span> */}
                </div>
                <div style={services}>
                    <p onClick={goDoctor} style={service}>Find Doctor</p>
                    <p onClick={goMedicine} style={service}>Medicines</p>
                    <p onClick={goDiagnostics} style={service}>Diagnostics</p>
                </div>
                <div style={rightTwoStyle} >
                    <span style={rightItemsTwo} onClick={goSupport}>Support</span>
                    <span style={rightItemsTwo} onClick={goAbout}>About Us</span>
                </div>
                <div style={rightThreeStyle} >
                    <span style={rightItemsThree}>+91 9999999999</span>
                    <span style={rightItemsThree}>support@drdoc.com</span>
                </div>
            </div>
            <div style={footerStyle}>
                <img src={LogoSrc} style={{ width: '100px', marginTop: 40 }} />
                <p>Copyright &copy; 2021 <br />
                    dr.doc</p>
            </div>
        </div >
    )
}

export default Footer