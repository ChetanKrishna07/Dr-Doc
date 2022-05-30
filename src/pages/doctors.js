import React from 'react';
import '../App.css';
import Header from '../Components/Header'
import Input from '../Components/Input'
import Button from '../Components/Button'
import Doctor from '../Components/DoctorList'
import axios from 'axios'
import Colors from '../colorsPallate'

const Medicines = () => {
    const [inputText, setInput] = React.useState("")
    const [doctors, updateDoctors] = React.useState([])
    const [specialist, setSpecialist] = React.useState("")

    React.useEffect(async () => {
        console.log(doctors);
        updateDoctorList()
    }, [specialist])


    function inputChange(event) {
        setInput(event.target.value);
    }

    function changeSpecialist() {
        setSpecialist(inputText)
        setInput("")
    }

    const apiConfig = {
        method: 'POST',
        url: 'http://localhost:2000/doctor'
    };

    async function updateDoctorList() {
        await axios({ ...apiConfig, data: { "specialization": specialist } })
            .then(res => {
                updateDoctors(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    const doctorStyle = {
        fontFamily: "Source Sans Pro",
        fontWeight: 600,
        fontSize: "1.2em",
        textAlign: 'center'
    }

    return (
        <div>
            <Header title="Find Doctors" />
            <Input name="Specialist"
                placeholder="Enter your specialist"
                type="text"
                value={inputText}
                handleChange={inputChange}
                handleKeyDown={(e) => e.key === "Enter" ? changeSpecialist() : null}
            />
            <Button text="Search" color={Colors.primary} handleClick={changeSpecialist} />
            {specialist != "" && <h1 style={doctorStyle}>{specialist}</h1>}
            {doctors.map((doctor, index) => (
                <Doctor
                    key={index}
                    doctorName={doctor.name}
                    online={doctor.online}
                    offline={doctor.offline}
                    specialization={doctor.specialization}
                    education={doctor.education}
                    address={doctor.address}
                    phone={doctor.phone}
                    website={doctor.website}
                />
            ))}
            {/* {doctors.length > 0 && <Doctor doctorName={doctors[0].name} />} */}
            {/* <Doctor doctorName="Dr. Singh" online={true} offline={true} specialization='Cardiolgist' />
            <Doctor doctorName="Dr. Siri" online={false} offline={true} />
            <Doctor doctorName="Dr. Kiran" online={true} offline={false} />
            <Doctor doctorName="Dr. Vijay" online={false} offline={false} /> */}
        </div>
    );
}

export default Medicines;
