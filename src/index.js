import React from 'react'
import ReactDOM from 'react-dom'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { takeEvery } from 'redux-saga/effects'

import { weatherSaga } from './sagas'
import WeatherApp from './WeatherApp'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import'./WeatherApp.css'
import './index.css'

function * rootSaga () {
    yield takeEvery('WEATHER_REQUEST', weatherSaga)
}

const sagaMiddleware = createSagaMiddleware() 

const initalState = {
    city: undefined,
    country: undefined,
    applicabledDate: undefined,
    weatherStateName: undefined, 
    minTemp:undefined,
    maxTemp: undefined,
    theTemp: undefined,
    humidity: undefined,
    error: undefined
  }

function reducer(state = initalState, action) { 
    switch(action.type) { 
        case "WEATHER_REQUEST_SUCCESS": 
            return action.payload
        case "ERROR": 
            return action.payload
        default: 
            return state
    }
}

const store = createStore (
    reducer,
    applyMiddleware(sagaMiddleware)
)   

sagaMiddleware.run(rootSaga)

const App = () => (
    <Provider store={store}> 
        <WeatherApp /> 
    </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
