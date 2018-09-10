import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import WeatherApp from './WeatherApp'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import'./WeatherApp.css'
import './index.css'

const initalState = {
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

function reducer(state = initalState, action) { 
    switch(action.type) { 
        case "WEATHER_REQUEST":
            return { 
                // fill later
            }
        default: 
            return state
    }
}

const store = createStore(reducer)

const App = () => (
    <Provider store={store}> 
        <WeatherApp /> 
    </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
