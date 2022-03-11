import React from 'react';
import '../App.css';
import Header from '../Components/Header'
import Input from '../Components/Input'
import Button from '../Components/Button'

import Colors from '../colorsPallate'
import { Form } from 'react-bootstrap';

const Register = () => {
    const [mobileEmail, setMobileEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [rememberMe, setRememberMe] = React.useState(false)

    function mobileEmailChange(event) {
        setMobileEmail(event.target.value);
    }

    function passwordChange(event) {
        setPassword(event.target.value);
    }

    function login() {
        console.log(`Eamil/Mobile : ${mobileEmail}\nPassword : ${password}`);
        const details = {
            'mobileEmail': mobileEmail,
            'password': password,
            'remember': rememberMe
        }
        setMobileEmail("");
        setPassword("");
        setRememberMe(false);
        window.localStorage.clear();
        window.localStorage.setItem("logindetails", JSON.stringify(details));
        if (details.mobileEmail != "" && details.password != "") {
            window.location.href = "/"
        }
    }

    function handleCheckbox(event) {
        setRememberMe(event.target.checked)
    }

    const label = {
        fontFamily: "Source Sans Pro",
        fontSize: '1.1em'
    }

    return (
        <div>
            <Header title="Register" />
            <Input name="Mobile Number/Email"
                placeholder="Mobile Number/Email"
                type="email"
                value={mobileEmail}
                handleChange={mobileEmailChange}
                handleKeyDown={(e) => e.key === "Enter" ? login() : null}
            />
            <Input name="Password"
                placeholder="Password"
                type="password"
                value={password}
                handleChange={passwordChange}
                handleKeyDown={(e) => e.key === "Enter" ? login() : null}
            />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "15px" }}>
                <div style={{ width: "350px", display: "flex", justifyContent: "space-between" }}>
                    <Form.Check
                        type='checkbox'
                        label="Remember Me"
                        style={label}
                        checked={rememberMe}
                        onChange={handleCheckbox}
                    />
                    <h1 style={label}>Forgot Password?</h1>
                </div>
            </div>
            <Button text="Register" color={Colors.secondary} handleClick={login} />
            <div style={
                {
                    border: "1px solid #989898",
                    width: "400px",
                    height: "1px",
                    backgroundColor: "#989898",
                    margin: "auto",
                    marginBottom: "20px",
                    marginTop: "-10px"
                }
            } ></div>
            <Button text="Login" color={Colors.primary} handleClick={() => window.location.href = "/login"} />
        </div >
    )
}

export default Register;