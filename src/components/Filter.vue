<script setup lang="ts">
import { SortEnum } from "@/type";
import { defineProps, defineEmits, ref, watch } from "vue";
import { dropDownOptionList } from "../constant";

const props = defineProps<{
  sortOption: SortEnum;
}>();

const emit = defineEmits<{
  (e: "update-sort-option", newSortOption: SortEnum): void;
}>();

const selectedSortOption = ref(props.sortOption);

watch(
  () => props.sortOption,
  (newVal) => {
    selectedSortOption.value = newVal;
  }
);

function onSortChange() {
  emit("update-sort-option", selectedSortOption.value);
}
</script>

<template>
  <div class="filter">
    <div class="filter-container">
      <h2 class="filter-title">Search for Triathlon result</h2>
      <div class="filter-controls">
        <p class="base-on-text">Based on</p>
        <select
          v-model="selectedSortOption"
          id="sort-results-select"
          class="select"
          @change="onSortChange"
        >
          <option
            v-for="option in dropDownOptionList"
            :key="option.value"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

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
