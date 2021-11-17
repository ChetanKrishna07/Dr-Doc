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
    const [medicines, updateMedicines] = React.useState([])
    const [inputText, setInput] = React.useState("")

    function addMedicine() {
        if (inputText != "") {
            updateMedicines((prevMedicines) => {
                return [...prevMedicines, inputText];
            })
            setInput("")
        }
    }

    function inputChange(event) {
        setInput(event.target.value);
    }

    function deleteItem(index) {
        console.log(index)
        updateMedicines((prevMedicines) => {
            return prevMedicines.filter((medicine, idx) => {
                return idx != index
            });
        })
    }

    return (
        <div>
            <MainLogo src={LogoSrc} />
            <Header title="Find Medicines" />
            <Input name="Medicine"
                placeholder="Enter your medicine name"
                type="text"
                value={inputText}
                handleChange={inputChange}
            />
            <Button text="Add" color={Colors.primary} handleClick={addMedicine} />
            {medicines.map((medicine, index) => (
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

export default Medicines;
