<script setup lang="ts">
import ClipLoader from "vue-spinner/src/ClipLoader.vue";
</script>

<template>
  <div class="container">
    <h2 class="loading-text">Loading</h2>
    <ClipLoader color="#d4d3d4" />
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

.loading-text {
  font-size: 40px;
  font-weight: 700;
}
</style>
