import React from 'react';
import './MainLogo.css'

const MainLogo = (props) => {
    return (
        <div class="main-logo">
            <img src={props.src} alt='Logo' />
        </div>
    )
}

export default MainLogo;
