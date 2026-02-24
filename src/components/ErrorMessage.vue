<template>
  <div 
    class="alert alert-danger alert-dismissible fade show shadow-sm mt-4 d-flex align-items-center"
    role="alert"
  >
    <!-- Icon -->
    <i class="bi bi-exclamation-triangle-fill me-3 fs-4"></i>

    <!-- Message -->
    <div class="flex-grow-1 text-start">
      <strong>Error!</strong>
      <div>{{ message }}</div>
    </div>

    <!-- Close Button -->
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>
</template>

<script setup>
defineProps(['message'])
</script>