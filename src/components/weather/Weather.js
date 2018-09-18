import React from 'react'

const Weather = props => (
    <div className="weather__info">
        {
            props.city && <p>
                <img src={'https://www.metaweather.com/static/img/weather/png/64/' + props.weatherStateAbbr + '.png'} alt="Weather"  />
            </p> 
        }
        
        {
            props.city && props.country && <p className="weather__key"> Location: 
            <span className="weather__value"> {props.city}, {props.country}</span>
            </p> 
        }

        {
            props.applicabledDate && <p className="weather__key"> Date:  
                <span className="weather__value">{props.applicabledDate}</span>
            
            </p>

        }

        {
            props.weatherStateName && <p className="weather__key"> Weather: 
                <span className="weather__value">{props.weatherStateName}</span>
            
            </p>

        }

        {
            props.minTemp && <p className="weather__key"> Minimum Temperature: 
                <span className="weather__value">{props.minTemp}</span>
            
            </p>
        
        }

        {
            props.maxTemp && <p className="weather__key"> Maximum Temperature:  
                <span className="weather__value">{props.maxTemp}</span>
            
            </p>
        
        }

        {
            props.theTemp && <p className="weather__key"> Current Temperature: 
                <span className="weather__value">{props.theTemp}</span>
            
            </p>
        
        }

        {
            props.humidity && <p className="weather__key"> Humidity:  
                 <span className="weather__value">{props.humidity}</span>
            
            </p>
        
        }

        {
            props.error && <p className="weather__key">{props.error}</p>
        }

    </div> 
)

export default Weather