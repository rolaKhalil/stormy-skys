import React from 'react'
import { connect } from 'react-redux' 

import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'

export const weatherRequest = city => {
  return dispatch => {
    if (!city) {
      dispatch({ 
        type: 'ERROR',
        payload: {
          error: 'Please enter a city'
        }
      })
    }
    else {
    fetch('https://www.metaweather.com/api/location/search/?query=' + city)
      .then(apiCallOne => {
        if (!apiCallOne.ok) {
          return Promise.reject(new Error('Fail'))
        }
        return apiCallOne.json()
      })
      .then(dataOne => {
        const woeid = dataOne[0].woeid
        fetch('https://www.metaweather.com/api/location/' + woeid)
          .then(apiCallTwo => apiCallTwo.json())
          .then(dataTwo => {
            dispatch({
              type: 'WEATHER_REQUEST_SUCCESS',
              payload: {
                  city: dataOne[0].title,
                  country: dataTwo.parent.title,
                  weatherStateName: dataTwo.consolidated_weather[0].weather_state_name, 
                  applicabledDate: dataTwo.consolidated_weather[0].created, 
                  minTemp: dataTwo.consolidated_weather[0].min_temp,
                  maxTemp: dataTwo.consolidated_weather[0].max_temp,
                  theTemp: dataTwo.consolidated_weather[0].the_temp, 
                  humidity: dataTwo.consolidated_weather[0].humidity,
              }
            })
          })
        
        }
      ).catch(error => { 
        dispatch({ 
          type: "ERROR",
          payload: { 
            error: 'City not found'
          }
        })

      })
    }
  }
}

class WeatherApp extends React.Component { 
    getWeather = (e) => {
      e.preventDefault();
      const city = e.target.elements.city.value;
      this.props.weatherRequest(city)
    }  
  
    render() {
      return (
        <div>
          <div className="wrapper">
            <div className="main">
              <div className="container">
                <div className="row">
                  <div className="col-xs-5 title-container">
                    <Title />
                  </div>
                  <div className="col-xs-7 form-container">
                    <Form getWeather={this.getWeather}/>
                    <Weather
                      city={this.props.city}
                      country={this.props.country}
                      weatherStateName={this.props.weatherStateName}
                      applicabledDate={this.props.applicabledDate}
                      minTemp={this.props.minTemp}
                      maxTemp={this.props.maxTemp}
                      theTemp={this.props.theTemp}
                      humidity={this.props.humidity} 
                      error={this.props.error}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  const mapStateToProps = (state) => ({ 
    city: state.city,
    country: state.country,
    weatherStateName: state.weatherStateName, 
    applicabledDate: state.applicabledDate, 
    minTemp: state.minTemp,
    maxTemp: state.maxTemp,
    theTemp: state.theTemp, 
    humidity: state.humidity,
    error: state.error
  })

  export default connect(
    mapStateToProps,
    {
      weatherRequest
    }
  )(WeatherApp)