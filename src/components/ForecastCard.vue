<template>
  <div class="card border-0 shadow-sm h-40 forecast-card">
    <div class="card-body text-center">

      <!-- Date -->
      <h6 class="fw-bold mb-3 text-primary">
        {{ formatDate(day.dateIso) }}
      </h6>

      <!-- Weather Condition Badge -->
      <span class="badge bg-light text-dark mb-3 px-3 py-2">
        {{ day.condition }}
      </span>

      <!-- Temperature Section -->
      <div class="mt-3">
        <div class="fs-6 text-muted">
          Min: 
          <span class="fw-semibold text-info">
            {{ formatTemp(day.minTempC) }}
          </span>
        </div>

        <div class="fs-5 mt-2">
          Max: 
          <span class="fw-bold text-danger">
            {{ formatTemp(day.maxTempC) }}
          </span>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { formatDate } from '../utils/formatDate'
import { formatTemp } from '../utils/formatTemp'

defineProps(['day'])
</script>

<style scoped>
.forecast-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 15px;
}

.forecast-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}
</style>
