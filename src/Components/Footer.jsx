import React from 'react'
import LogoSrc from '../images/main_logo.png'
import FootLogoSrc from '../images/main_logo_white.png'

const Footer = () => {

    const footerStyle = {
        textAlign: 'center',
        fontFamily: 'Source Sans Pro'
    }

    return (
        <div>
            <div className='Card' >

            </div>
            <div style={footerStyle}>
                <img src={LogoSrc} style={{width:'100px', marginTop:40}}/>
                <p>Copyright &copy; 2021 <br />
                    dr.doc</p>
            </div>
        </div>
    )
}

export default Footer