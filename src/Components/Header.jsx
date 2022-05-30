import React from 'react';
import Colors from '../colorsPallate'

const Header = (props) => {

    const customStyles = {
        textAlign: 'center',
        fontWeight: 600,
        marginTop: 100,
        marginBottom: 70,
        color: Colors.primary
    }
    return <h1 style={customStyles}>{props.title}</h1>
}

export default Header;