import React from 'react';

const MainLogo = (props) => {

    const mainLogo = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '60px'
    }

    const logoImg = {
        height: '80px'
    }

    return (
        <div style={mainLogo}>
            <img src={props.src} alt='Logo' style={logoImg} />
        </div>
    )
}

export default MainLogo;
