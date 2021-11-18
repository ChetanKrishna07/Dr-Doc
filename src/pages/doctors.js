import React from 'react';
import '../App.css';
import MainLogo from '../Components/MainLogo'
import Header from '../Components/Header'
import Input from '../Components/Input'
import Button from '../Components/Button'
import Doctor from '../Components/DoctorList'

import LogoSrc from '../images/main_logo.png'
import Colors from '../colorsPallate'

const Medicines = () => {
    const [inputText, setInput] = React.useState("")
    const [specialist, setSpecialist] = React.useState("")

    function inputChange(event) {
        setInput(event.target.value);
    }

    function changeSpecialist() {
        setSpecialist(inputText)
        setInput("")
    }

    const doctorStyle = {
        fontFamily: "Source Sans Pro",
        fontWeight: 600,
        fontSize: "1.2em",
        textAlign: 'center'
    }

    return (
        <div>
            <MainLogo src={LogoSrc} />
            <Header title="Find Doctors" />
            <Input name="Specialist"
                placeholder="Enter your specialist"
                type="text"
                value={inputText}
                handleChange={inputChange}
            />
            <Button text="Search" color={Colors.primary} handleClick={changeSpecialist} />
            {specialist != "" && <h1 style={doctorStyle}>{specialist}</h1>}
            <Doctor doctorName="Dr. Singh" online = {true} offline = {true}/>
            <Doctor doctorName="Dr. Siri" online = {false} offline = {true}/>
            <Doctor doctorName="Dr. Kiran" online = {true} offline = {false}/>
            <Doctor doctorName="Dr. Vijay" online = {false} offline = {false}/>
        </div>
    );
}

export default Medicines;
