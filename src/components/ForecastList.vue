<template>
  <div class="forecast-section mt-5 p-4 rounded-4 shadow-sm">

    <!-- Section Header -->
    <div class="text-center mb-4">
      <h4 class="fw-bold text-primary mb-1">
        5-Day Forecast
      </h4>
      <small class="text-muted">
        Weather outlook for upcoming days
      </small>
    </div>

    <!-- Forecast Cards -->
    <div class="row g-3 justify-content-center">

      <div
        class="col-6 col-md-4 col-lg-2"
        v-for="day in forecast"
        :key="day.dateIso"
      >
        <ForecastCard :day="day" />
      </div>

    </div>

  </div>
</template>

<script setup>
import ForecastCard from './ForecastCard.vue'
defineProps(['forecast'])
</script>

<style scoped>
.forecast-section {
  background: #ffffff;
  border-radius: 20px;
}
</style>