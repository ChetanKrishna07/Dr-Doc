import React from 'react';
import '../App.css';
import MainLogo from '../Components/MainLogo'
import Header from '../Components/Header'

import LogoSrc from '../images/main_logo.png'
import Colors from '../colorsPallate'

const Support = () => {

    return (
        <div>
            <MainLogo src={LogoSrc} />
            <Header title="Contact Us" />
        </div>
    )

}

export default Support;