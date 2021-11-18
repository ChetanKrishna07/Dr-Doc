import React from 'react';
import '../App.css';
import MainLogo from '../Components/MainLogo'
import Header from '../Components/Header'
import Input from '../Components/Input'
import Button from '../Components/Button'
import LogoSrc from '../images/main_logo.png'
import Colors from '../colorsPallate'

const Support = () => {

    const [nameText, setName] = React.useState("")
    const [emailText, setEmail] = React.useState("")
    const [phoneText, setPhone] = React.useState("")
    const [queryText, setQuery] = React.useState("")
    // const [details, setDetails] = React.useState({})

    let details = {}

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

    function submit() {
        details = {
            name: nameText,
            email: emailText,
            phone: phoneText,
            query: queryText
        }
        setName("")
        setEmail("")
        setPhone("")
        setQuery("")
        console.log(details)
    }

    return (
        <div>
            <MainLogo src={LogoSrc} />
            <Header title="Contact Us" />
            <Input name="Name"
                placeholder="Enter your name"
                type="text"
                value={nameText}
                handleChange={nameUpdate}
            />
            <Input name="Email"
                placeholder="Enter your email id"
                type="email"
                value={emailText}
                handleChange={emailUpdate}
            />
            <Input name="Phone No."
                placeholder="Enter your phone no."
                type="phone"
                value={phoneText}
                handleChange={phoneUpdate}
            />
            <Input name="Query"
                placeholder="Please enter your query"
                type="text"
                value={queryText}
                handleChange={queryUpdate}
            />
            <Button text="Submit" color={Colors.primary} handleClick={submit} />
        </div>
    )

}

export default Support;