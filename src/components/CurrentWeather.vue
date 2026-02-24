<template>
  <div class="card shadow-lg border-0 mt-4 overflow-hidden">
    
    <!-- Header Section -->
    <div class="bg-primary text-white text-center py-4">
      <h3 class="mb-0 fw-bold">
        {{ weather.city }}, {{ weather.country }}
      </h3>
      <small class="opacity-75">
        Updated: {{ formatDate(weather.updatedAtIso) }}
      </small>
    </div>

    <!-- Body Section -->
    <div class="card-body text-center">

      <!-- Temperature Section -->
      <div class="d-flex justify-content-center align-items-center mb-3">
        <h1 class="display-4 fw-bold text-primary me-3">
          {{ formatTemp(weather.temperatureC) }}
        </h1>

        <span class="badge bg-info text-dark fs-6 px-3 py-2">
          {{ weather.condition }}
        </span>
      </div>

      <!-- Weather Details -->
      <div class="row text-center mt-4">
        <div class="col-md-6 mb-3">
          <div class="p-3 bg-light rounded shadow-sm">
            <h6 class="text-muted mb-1">Humidity</h6>
            <span class="fs-5 fw-semibold">
              {{ weather.humidityPercent }}%
            </span>
          </div>
        </div>

        <div class="col-md-6 mb-3">
          <div class="p-3 bg-light rounded shadow-sm">
            <h6 class="text-muted mb-1">Wind Speed</h6>
            <span class="fs-5 fw-semibold">
              {{ weather.windKmph }} km/h
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { formatDate } from '../utils/formatDate'
import { formatTemp } from '../utils/formatTemp'

defineProps(['weather'])
</script>