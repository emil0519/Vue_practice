<template>
  <div class="filter">
    <div class="filter-container">
      <h2 class="filter-title">Search for Triathlon result</h2>
      <div class="filter-controls">
        <p class="base-on-text">Based on</p>
        <select id="sort-results-select" class="select">
          <!-- v-model="sortOption" @change="handleSelectOption" -->
          <option
            v-for="option in dropDownOptionList"
            :key="option.value"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
        <!-- <input
          type="text"
          placeholder="Name / Nationality"
          @input="handleSearchText"
          class="search-input"
        /> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { dropDownOptionList } from "../constant";
</script>

<style scoped>
.filter {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
}

.filter-container {
  display: flex;
  flex-direction: column;
}

.filter-title {
  font-size: 40px;
  font-weight: 700;
}

.filter-controls {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex-direction: column;
}

.base-on-text {
  font-size: 16px;
  color: #2e2d2f;
  margin-top: 8px;
}

.select {
  margin-top: 8px;
  border-radius: 4px;
  width: 60%;
}

.search-input {
  margin-top: 8px;
  width: 60%;
  border-radius: 4px;
}
</style>
