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

const Diagnostics = () => {
    const [diagnostics, updateDiagnostics] = React.useState([])
    const [inputText, setInput] = React.useState("")

    function addMedicine() {
        if (inputText != "") {
            updateDiagnostics((prevDiagnostics) => {
                return [...prevDiagnostics, inputText];
            })
            setInput("")
        }
    }

    function inputChange(event) {
        setInput(event.target.value);
    }

    function deleteItem(index) {
        console.log(index)
        updateDiagnostics((prevDiagnostics) => {
            return prevDiagnostics.filter((diagnostics, idx) => {
                return idx != index
            });
        })
    }

    return (
        <div>

            <MainLogo src={LogoSrc} />
            <Header title="Find Diagnostics" />
            <Input name="Diagnostics"
                placeholder="Enter your test name"
                type="text"
                value={inputText}
                handleChange={inputChange}
            />
            <Button text="Add" color={Colors.primary} handleClick={addMedicine} />
            {diagnostics.map((medicine, index) => (
                <Medicine
                    key={index}
                    name={medicine}
                    index={index}
                    handleClick={deleteItem}
                />
            ))}
            <Store storeName="Apollo Pharmacy" available="3" unavailable="2" />
            <Store storeName="Medplus" available="2" unavailable="3" />
            <Store storeName="JSS" available="1" unavailable="4" />
            <Store storeName="ESI Pharmacy" available="1" unavailable="4" />

        </div>
    );
}

export default Diagnostics;
