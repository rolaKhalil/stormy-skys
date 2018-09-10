import React from 'react' 

import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'


class App extends React.Component { 

    state = {
      city: undefined,
      country: undefined,
      weatherStateName: undefined, 
      applicabledDate: undefined,
      minTemp:undefined,
      maxTemp: undefined,
      theTemp: undefined,
      humidity: undefined,
      error: undefined
    }
  
    getWeather = async (e) => {
      e.preventDefault();
      const city = e.target.elements.city.value; 
      const apiCallOne = await fetch('https://www.metaweather.com/api/location/search/?query=' + city)
  
      if (city) {
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
            error: ''
        })
      }
      else {
        this.setState({
          city: undefined,
          country: undefined,
          weatherStateName: undefined, 
          applicabledDate: undefined, 
          minTemp: undefined,
          maxTemp: undefined,
          theTemp: undefined, 
          humidity: undefined,
          error: 'Please enter a city'
      })
      }
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
                      city={this.state.city}
                      country={this.state.country}
                      weatherStateName={this.state.weatherStateName}
                      applicabledDate={this.state.applicabledDate}
                      minTemp={this.state.minTemp}
                      maxTemp={this.state.maxTemp}
                      theTemp={this.state.theTemp}
                      humidity={this.state.humidity} 
                      error={this.state.error}
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

  export default App