import React from 'react';
import '../App.css';
import Header from '../Components/Header'
import Input from '../Components/Input'
import Button from '../Components/Button'
import Colors from '../colorsPallate'
import axios from 'axios'

const Support = () => {

    const [nameText, setName] = React.useState("")
    const [emailText, setEmail] = React.useState("")
    const [phoneText, setPhone] = React.useState("")
    const [queryText, setQuery] = React.useState("")

    const [requiredName, setRequiredName] = React.useState(false)
    const [requiredQuery, setRequiredQuery] = React.useState(false)

    const [invalidEmail, setInvalidEmail] = React.useState(false)
    const [invalidPhone, setInvalidPhone] = React.useState(false)

    // const [details, setDetails] = React.useState({})

    function nameUpdate(event) {
        setName(event.target.value)
    }

    function emailUpdate(event) {
        setEmail(event.target.value)
    }

    function phoneUpdate(event) {
        setPhone(event.target.value)
    }

    function queryUpdate(event) {
        setQuery(event.target.value)
    }

    // let submitPromise = new Promise((resolve, reject) => {
    //     try {
    //         setTimeout(() => {
    //             setDetails(() => {
    //                 return (
    //                     {
    //                         name: nameText,
    //                         email: emailText,
    //                         phone: phoneText,
    //                         query: queryText
    //                     }
    //                 )
    //             })
    //             resolve("Data added")
    //         }, 1000)
    //     } catch (err) {
    //         reject("Error in getting data")
    //     }
    // })

    // function submit() {

    //     submitPromise.then((dataStatus) => {
    //         console.log(dataStatus)
    //         setName("")
    //         setEmail("")
    //         setPhone("")
    //         setQuery("")
    //         console.log(details)
    //     }).catch((err) => {
    //         console.log(err)
    //     })

    // }

    const apiConfig = {
        method: 'POST',
        url: 'http://localhost:2000/support'
    };

    async function sendQuery(data) {
        await axios({ ...apiConfig, data: data })
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    function validate() {
        let valid = true
        if (nameText == "") {
            setRequiredName(true)
            valid = false
        } else {
            setRequiredName(false)
        }
        if (queryText == "") {
            setRequiredQuery(true)
            valid = false
        } else {
            setRequiredQuery(false)
        }
        if (!(emailText.includes('@') && !emailText.endsWith('.') 
            && emailText.substring(emailText.indexOf('@')).includes('.') 
            && emailText.substring(emailText.indexOf('@'))[1] != '.') 
            && emailText != '') 
        {
            setInvalidEmail(true)
            valid = false
        } else {
            setInvalidEmail(false)
        }
        if (isNaN(phoneText)) {
            setInvalidPhone(true)
            valid = false
        } else {
            setInvalidPhone(false)
        }
        return valid
    }

    async function submit() {
        if (validate()) {
            const data = {
                name: nameText,
                email: emailText,
                phone: phoneText,
                query: queryText
            }
            await sendQuery(data)
            setName("")
            setEmail("")
            setPhone("")
            setQuery("")
            console.log(data)
        }
    }

    let error = {
        margin: "20px auto",
        width: "350px",
        border: "2px solid rgba(255, 0, 0, 0.3)",
        backgroundColor: "rgba(255, 0, 0, 0.07)",
        borderRadius: "4px",
        color: "red",
        padding: "7px",
    }

    return (
        <div>
            <Header title="Contact Us" />
            <Input name="Name *"
                placeholder="Enter your name"
                type="text"
                value={nameText}
                handleChange={nameUpdate}
                handleKeyDown={(e) => e.key === "Enter" ? submit() : null}
            />
            {requiredName ? <div style={error}>
                Please Enter Name
            </div> : null}
            <Input name="Email"
                placeholder="Enter your email id"
                type="email"
                value={emailText}
                handleChange={emailUpdate}
                handleKeyDown={(e) => e.key === "Enter" ? submit() : null}
            />
            {invalidEmail ? <div style={error}>
                Please Enter a valid Email ID
            </div> : null}
            <Input name="Phone No."
                placeholder="Enter your phone no."
                type="phone"
                value={phoneText}
                handleChange={phoneUpdate}
                handleKeyDown={(e) => e.key === "Enter" ? submit() : null}
            />
            {invalidPhone ? <div style={error}>
                Please Enter a valid Phone Number
            </div> : null}
            <Input name="Query *"
                placeholder="Please enter your query"
                type="text"
                value={queryText}
                handleChange={queryUpdate}
                handleKeyDown={(e) => e.key === "Enter" ? submit() : null}
            />
            {requiredQuery ? <div style={error}>
                Please Enter Query
            </div> : null}
            <Button text="Submit" color={Colors.primary} handleClick={submit} />

        </div>
    )

}

export default Support;