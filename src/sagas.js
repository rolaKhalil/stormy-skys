import { put, call } from 'redux-saga/effects'

export function* weatherSaga(action) {
    if (!action.payload.city) {
        yield put({ 
        type: 'ERROR',
        payload: {
            error: 'Please enter a city'
        }
        })
    }
    else {
        try {
            const apiCallOne = yield call(fetch, 'https://www.metaweather.com/api/location/search/?query=' + action.payload.city)
            const dataOne = yield apiCallOne.json()
            const woeid = dataOne[0].woeid
            const apiCallTwo = yield call(fetch, 'https://www.metaweather.com/api/location/' + woeid)
            const dataTwo = yield apiCallTwo.json()
            yield put({
                type: 'WEATHER_REQUEST_SUCCESS',
                payload: {
                    city: dataOne[0].title,
                    country: dataTwo.parent.title,
                    applicabledDate: dataTwo.consolidated_weather[0].applicable_date, 
                    weatherStateName: dataTwo.consolidated_weather[0].weather_state_name, 
                    minTemp: dataTwo.consolidated_weather[0].min_temp,
                    maxTemp: dataTwo.consolidated_weather[0].max_temp,
                    theTemp: dataTwo.consolidated_weather[0].the_temp, 
                    humidity: dataTwo.consolidated_weather[0].humidity,
                }
            })
        }catch(error) {
            console.error(error)
            yield put({ 
                type: 'ERROR',
                payload: {
                    error: 'City not found'
                }
        })
        }
    }
}
