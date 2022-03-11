import React from 'react';
import '../App.css';
import Header from '../Components/Header'
import Input from '../Components/Input'
import Button from '../Components/Button'
import Medicine from '../Components/MedicineList'
import Store from '../Components/Store'

import Colors from '../colorsPallate'

const Diagnostics = () => {
    const [diagnostics, updateDiagnostics] = React.useState([])
    const [inputText, setInput] = React.useState("")
    const [stores, updateStores] = React.useState([
        {
            name: "Apollo Diagnostics",
            available: "3",
            unavailable: "2",
            availableList: ['test 1', 'test 2', 'test 3'],
            unavailableList: ['test 4', 'test 5']
        },
        {
            name: "Vijaya Diagnostics",
            available: "2",
            unavailable: "3",
            availableList: ['test 1', 'test 2'],
            unavailableList: ['test 3', 'test 4', 'test 5']
        },
        {
            name: "JSS",
            available: "1",
            unavailable: "4",
            availableList: ['test 1'],
            unavailableList: ['test 2', 'test 3', 'test 4', 'test 5']
        },
        {
            name: "Anand's Lab",
            available: "1",
            unavailable: "4",
            availableList: ['test 2'],
            unavailableList: ['test 1', 'test 3', 'test 4', 'test 5']
        }
    ])

    function addDiagnostics() {
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

            <Header title="Find Diagnostics" />
            <Input name="Diagnostics"
                placeholder="Enter your test name"
                type="text"
                value={inputText}
                handleChange={inputChange}
                handleKeyDown={(e) => e.key === "Enter" ? addDiagnostics() : null}
            />
            <Button text="Add" color={Colors.primary} handleClick={addDiagnostics} />
            {diagnostics.map((medicine, index) => (
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

export default Diagnostics;
