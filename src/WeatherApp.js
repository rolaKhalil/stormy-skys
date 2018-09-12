import React from 'react'
import { connect } from 'react-redux' 

import {weatherRequest, errorHere} from './actions'
import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'

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
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather}/>
                  <Weather
                    weatherStateAbbr={this.props.weatherStateAbbr}
                    city={this.props.city}
                    country={this.props.country}
                    applicabledDate={this.props.applicabledDate}
                    weatherStateName={this.props.weatherStateName}
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
      )
    }
  }

  const mapStateToProps = (state) => ({ 
    weatherStateAbbr: state.weatherStateAbbr,
    city: state.city,
    country: state.country,
    applicabledDate: state.applicabledDate,
    weatherStateName: state.weatherStateName, 
    minTemp: state.minTemp,
    maxTemp: state.maxTemp,
    theTemp: state.theTemp, 
    humidity: state.humidity,
    error: state.error
  })

  export default connect(
    mapStateToProps,
    {
      weatherRequest,
      errorHere
    }
  )(WeatherApp)