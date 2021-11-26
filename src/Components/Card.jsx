import React from 'react'

const Card = (props) => {
    const cardStyle = {
        width: '80%',
        margin: 'auto',
        padding: '20px',
        boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25), -4px -4px 4px rgba(255, 255, 255, 0.65)',
        marginTop: '-40px'
    }

    return (
        <div style={cardStyle}>
            {props.content.map((line => {
                return <p>{line}</p>
            }))}
        </div>
    )
}

export default Card