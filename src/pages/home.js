import React from 'react';
import '../App.css';
import MainLogo from '../Components/MainLogo'
import Header from '../Components/Header'
import Card from '../Components/Card'

import LogoSrc from '../images/main_logo.png'
import Colors from '../colorsPallate'

const Support = () => {

    // backgroundColor: Colors.primary,
    // width: '100%',
    // height: '300px',
    // display: 'grid',
    // gridTemplateColumns: 'repeat(3, 1fr)',
    // gridTemplateRows: 'repeat(3, 1fr)',
    // marginTop: '200px'

    const cardStyle = {
        width: '100%',
        height: '300px',
        backgroundColor: Colors.primary,
        marginTop: 100,
        marginBottom: 70,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px'
    }

    const contentStyle = {
        fontFamily: 'Comfortaa',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '50px',
        textAlign: 'center',
        backgroundColor: Colors.primary,
        color: Colors.bg
    }

    const faq = ["Q1) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus lobortis porta. Cras ac lorem at elit euismod sollicitudin in quis ligula.", "Ans) Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce finibus lobortis porta.Cras ac lorem at elit euismod sollicitudin in quis ligula.", "Q2) bitasse platea dictumst.Nullam pellentesque malesuada neque, vel ornare enim cursus fermentum.Orci varius natoque penatibus et magnis dis parturient montes, nas", "Ans) lobortis sapien ac, ullamcorper tincidunt tortor.Sed rutrum tincidunt ligula ac rutrum.Cras dignissim leo nisi, ac consequat nunc facilisis id.Nunc imperdiet orci ut enim rhoncus, eu porta quam consequat"]

    return (
        <div>
            <MainLogo src={LogoSrc} />
            <div style={cardStyle}>
                <span style={contentStyle}>One destination for all your medical needs</span>
            </div>
            <Header title="Customer Reviews" />
            <Card content={[]} />
            <Header title="Frequently Asked Questions" />
            <Card content={faq} />
        </div>
    )

}

export default Support;