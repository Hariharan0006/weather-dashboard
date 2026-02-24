<template>
  <div class="container py-4">
    <h1 class="text-center mb-4">🌤 Weather Dashboard</h1>

    <SearchBar />

    <div class="mt-4">
      <LoadingSpinner v-if="store.loading" />
      <ErrorMessage v-if="store.error" :message="store.error" />

      <CurrentWeather
        v-if="store.currentWeather"
        :weather="store.currentWeather"
      />

      <ForecastList
        v-if="store.forecast.length"
        :forecast="store.forecast"
      />
    </div>
  </div>
</template>

<script setup>
import { useWeatherStore } from './store/weatherStore'
import SearchBar from './components/SearchBar.vue'
import CurrentWeather from './components/CurrentWeather.vue'
import ForecastList from './components/ForecastList.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'
import ErrorMessage from './components/ErrorMessage.vue'
import { formatDate } from './utils/formatDate'
const store = useWeatherStore()
</script>