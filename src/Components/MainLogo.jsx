import React from 'react';

const MainLogo = (props) => {

    const mainLogo = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '60px',
        cursor: 'pointer'
    }

    const logoImg = {
        height: '80px'
    }

    function goHome() {
        window.location.href = "/"
    }

    return (
        <div style={mainLogo} onClick={goHome}>
            <img src={props.src} alt='Logo' style={logoImg} />
        </div>
    )
}

export default MainLogo;
