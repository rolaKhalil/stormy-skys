export const weatherRequest = city => ({
    type: 'WEATHER_REQUEST',
    payload: {
        city
    }
  })

export const errorHere = city => ({
    type: "ERROR"
})
