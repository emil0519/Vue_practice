<script setup lang="ts">
import { SortEnum } from "@/type";
import { defineProps, defineEmits, ref, watch } from "vue";
import { dropDownOptionList } from "../constant";
import Select from "primevue/select";

const props = defineProps<{
  sortOption: SortEnum;
}>();
const { sortOption } = props;

const emit = defineEmits<{
  (e: "update-sort-option", newSortOption: SortEnum): void;
}>();

const selectedSortOption = ref(sortOption);

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
      <div class="filter-controls">
        <h2 class="filter-title">Search for Triathlon result</h2>
        <div class="base-on-container">
          <p class="base-on-text">Based on</p>
          <Select
            v-model="selectedSortOption"
            :options="dropDownOptionList"
            optionLabel="label"
            optionValue="value"
            @change="onSortChange"
          />
        </div>
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
  justify-content: space-between;
  align-items: center;
}

.base-on-container {
  display: flex;
  gap: 8px;
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
