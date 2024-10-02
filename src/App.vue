<script setup lang="ts">
import { useFetchData } from "./composables/useFetchData";
import { SortEnum } from "./type";
import Header from "./components/Header.vue";
import Filter from "./components/Filter.vue";
import DataTable from "./components/DataTable.vue";
import Loading from "./components/Loading.vue";
import Error from "./components/Error.vue";

const { resultList, isLoading, isError, sortOption, fetchAthletes } =
  useFetchData();
const updateSortOption = (newSortOption: SortEnum): void => {
  sortOption.value = newSortOption;
};
</script>

<template>
  <Header />
  <main class="container">
    <div v-if="isLoading"><Loading /></div>
    <div v-if="isError"><Error :fetchAthletes="fetchAthletes" /></div>
    <div v-if="!isLoading && !isError && resultList">
      <Filter :sortOption="sortOption" @update-sort-option="updateSortOption" />
      <DataTable :resultList="resultList" />
    </div>
  </main>
</template>

<style scoped>
.container {
  padding: 3rem;
}
</style>
