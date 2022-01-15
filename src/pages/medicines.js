import React from 'react';
import '../App.css';
import MainLogo from '../Components/MainLogo'
import Header from '../Components/Header'
import Input from '../Components/Input'
import Button from '../Components/Button'
import Medicine from '../Components/MedicineList'
import Store from '../Components/Store'
import axios from 'axios'

import LogoSrc from '../images/main_logo.png'
import Colors from '../colorsPallate'

const Medicines = () => {
    const [medicines, updateMedicines] = React.useState([])
    const [inputText, setInput] = React.useState("")
    const [stores, updateStores] = React.useState([])

    const apiConfig = {
        method: 'GET',
        url: 'https://localhost:2000/store'
    };

    async function getStores() {
        await axios({
            ...config, data: { meds: medicines }
        })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    async function updateStoreList() {
        await getStores()
    }

    function addMedicine() {
        if (inputText != "") {
            updateMedicines((prevMedicines) => {
                return [...prevMedicines, inputText];
            })
            setInput("")
        }
        updateStoreList()
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
            {stores.map((store, index) => (
                <Store
                    key={index}
                    storeName={store.name}
                    available={store.available}
                    unavailable={store.unavailable}
                    availableList={store.availableList}
                    unavailableList={store.unavailableList}
                />
            ))}
        </div>
    );
}

export default Medicines;
