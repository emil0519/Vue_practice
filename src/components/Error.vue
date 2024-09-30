<script setup lang="ts"></script>

<template>
  <div class="container">
    <h2 class="error-text">Something went wrong, please try again.</h2>
    <img src="@/assets/retry.png" alt="Retry Icon" class="retry-icon" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 30vh;
}

.error-text {
  font-size: 30px;
  font-weight: 700;
}

.retry-icon {
  width: 70px;
  height: 70px;
  cursor: pointer;
  transform: rotate(140deg);
}
</style>
