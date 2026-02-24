<template>
  <div class="row justify-content-center mt-4">
    <div class="col-12 col-md-8 col-lg-6">

      <div class="input-group shadow-lg rounded-pill overflow-hidden">

        <!-- Search Icon -->
        <span class="input-group-text bg-white border-0">
          <i class="bi bi-geo-alt-fill text-primary"></i>
        </span>

        <!-- Input -->
        <input
          v-model="city"
          type="text"
          class="form-control border-0"
          placeholder="Search city (e.g. Chennai, Mumbai...)"
          @keyup.enter="search"
        />

        <!-- Search Button -->
        <button
          class="btn btn-primary px-4"
          @click="search"
          :disabled="store.loading"
        >
          <span v-if="!store.loading">
            <i class="bi bi-search"></i>
          </span>

          <span v-else class="spinner-border spinner-border-sm"></span>
        </button>

        <!-- Refresh Button -->
        <button
          v-if="store.city"
          class="btn btn-outline-secondary px-3"
          @click="refresh"
        >
          <i class="bi bi-arrow-clockwise"></i>
        </button>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useWeatherStore } from '../store/weatherStore'

const city = ref('')
const store = useWeatherStore()

function search() {
  if (city.value.trim()) {
    store.fetchWeather(city.value)
  }
}

function refresh() {
  store.fetchWeather(store.city)
}
</script>