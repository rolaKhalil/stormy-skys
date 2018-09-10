import React from 'react'

const Form = props => (
    <form onSubmit={props.getWeather}> 
        <input className="form-group" type='text' name='city' placeholder='City'/>
        <button>Weather</button>
    </form>   
)

export default Form