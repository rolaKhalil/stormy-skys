import React from 'react'
import { connect } from 'react-redux' 

import {weatherRequest, errorHere} from './actions'
import Title from './components/title/Title'
import Form from './components/form/Form'
import Weather from './components/weather/Weather'
import PreviousSearch from './components/previousSearch/PreviousSearch';

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
                  {this.props.last5.length > 0 &&
                  <div className="previous__weather__key"> Previous Search
                      {
                      this.props.last5.map(itemInList => (
                        <PreviousSearch 
                          key={itemInList.city}
                          city={itemInList.city}
                          weatherRequest={this.props.weatherRequest}
                        />
                        )
                      )
                    }
                  </div>
                  }
                  <Weather
                    weatherStateAbbr={this.props.currentWeather.weatherStateAbbr}
                    city={this.props.currentWeather.city}
                    country={this.props.currentWeather.country}
                    applicabledDate={this.props.currentWeather.applicabledDate}
                    weatherStateName={this.props.currentWeather.weatherStateName}
                    minTemp={this.props.currentWeather.minTemp}
                    maxTemp={this.props.currentWeather.maxTemp}
                    theTemp={this.props.currentWeather.theTemp}
                    humidity={this.props.currentWeather.humidity} 
                    error={this.props.currentWeather.error}
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
    last5: state.last5,
    currentWeather: state.currentWeather
  })

  export default connect(
    mapStateToProps,
    {
      weatherRequest,
      errorHere
    }
  )(WeatherApp)