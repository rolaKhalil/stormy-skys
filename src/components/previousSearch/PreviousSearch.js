import React from 'react'

const PreviousSearch = props => (
    <div className="weather__info">
    {
        props.city && <p className="previous__weather__key">
        <span className="weather__value" onClick={() => props.weatherRequest(props.city)} > {props.city}</span>
        </p>  
    }
    </div>
)

export default PreviousSearch