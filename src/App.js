import React from 'react';
import './App.css';
import Navigation from './Components/Navbar'
import MainLogo from './Components/MainLogo'
import Header from './Components/Header'
import Input from './Components/Input'
import Button from './Components/Button'
import Medicine from './Components/MedicineList'
import Store from './Components/Store'
import Footer from './Components/Footer'

import LogoSrc from './images/main_logo.png'
import Colors from './colorsPallate'

function App() {
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
      <Navigation />
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
      <Footer />

    </div>
  );
}

export default App;
