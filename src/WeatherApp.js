import React from 'react'
import { connect } from 'react-redux' 

import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'


class WeatherApp extends React.Component { 
  
    getWeather = async (e) => {
      e.preventDefault();
      const city = e.target.elements.city.value; 
      const apiCallOne = await fetch('https://www.metaweather.com/api/location/search/?query=' + city)

      const dataOne = await apiCallOne.json()
      const woeid = dataOne[0].woeid
  
      const apiCallTwo = await fetch('https://www.metaweather.com/api/location/' + woeid)
      const dataTwo = await apiCallTwo.json()
  
      this.setState({
        city: dataOne[0].title,
        country: dataTwo.parent.title,
        weatherStateName: dataTwo.consolidated_weather[0].weather_state_name, 
        applicabledDate: dataTwo.consolidated_weather[0].created, 
        minTemp: dataTwo.consolidated_weather[0].min_temp,
        maxTemp: dataTwo.consolidated_weather[0].max_temp,
        theTemp: dataTwo.consolidated_weather[0].the_temp, 
        humidity: dataTwo.consolidated_weather[0].humidity,
        })
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
  })

  export default connect(mapStateToProps)(WeatherApp)