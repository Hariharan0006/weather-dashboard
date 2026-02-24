import axios from 'axios'

const CURRENT_URL = 'https://api.jsonbin.io/v3/b/6981949143b1c97be9616e06'
const FORECAST_URL = 'https://api.jsonbin.io/v3/b/698194e3d0ea881f409cdb34'
const ERROR_URL = 'https://api.jsonbin.io/v3/b/69819517ae596e708f0d49ff'

export async function getCurrentWeather(useError = false) {
  const url = useError ? ERROR_URL : CURRENT_URL
  const response = await axios.get(url)
  return response.data.record
}

export async function getForecast(useError = false) {
  const url = useError ? ERROR_URL : FORECAST_URL
  const response = await axios.get(url)
  return response.data.record
}