import { defineStore } from 'pinia'
import { getCurrentWeather, getForecast } from '../services/weatherService'

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    city: '',
    currentWeather: null,
    forecast: [],
    loading: false,
    error: null
  }),

  actions: {
    async fetchWeather(city, useError = false) {
      this.city = city
      this.loading = true
      this.error = null

      try {
        const current = await getCurrentWeather(useError)
        const forecast = await getForecast(useError)

        if (current.status === 'error') {
          throw new Error(current.error.message)
        }

        this.currentWeather = current.data
        this.forecast = forecast.data.days
      } catch (err) {
        this.error = err.message
        this.currentWeather = null
        this.forecast = []
      } finally {
        this.loading = false
      }
    }
  }
})