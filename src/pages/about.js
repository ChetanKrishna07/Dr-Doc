import React from 'react';
import '../App.css';
import MainLogo from '../Components/MainLogo'
import Header from '../Components/Header'
import Card from '../Components/Card'

import LogoSrc from '../images/main_logo.png'
import Colors from '../colorsPallate'

const About = () => {

    const content = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."]

    return (
        <div>
            <MainLogo src={LogoSrc} />
            <Header title="About Us" />
            <Card content={content} />
        </div>
    )

}

export default About;