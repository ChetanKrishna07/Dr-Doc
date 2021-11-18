import React from 'react';
import '../App.css';
import MainLogo from '../Components/MainLogo'
import Header from '../Components/Header'
import Input from '../Components/Input'
import Button from '../Components/Button'
import Medicine from '../Components/MedicineList'
import Store from '../Components/Store'

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
            {specialist != "" && <h1 style = {doctorStyle}>{specialist}</h1>}
            <Store storeName="Apollo Pharmacy" available="3" unavailable="2" availableList = {['med 1', 'med 2', 'med 3']} unavailableList = {['med 4', 'med 5']}/>
            <Store storeName="Medplus" available="2" unavailable="3" availableList = {['med 1', 'med 2']} unavailableList = {['med 3', 'med 4', 'med 5']}/>
            <Store storeName="JSS" available="1" unavailable="4" availableList = {['med 1']} unavailableList = {['med 2', 'med 3', 'med 4', 'med 5']}/>
            <Store storeName="ESI Pharmacy" available="1" unavailable="4" availableList = {['med 2']} unavailableList = {['med 1','med 3','med 4', 'med 5']}/>
        </div>
    );
}

export default Medicines;
