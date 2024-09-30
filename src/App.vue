<script setup lang="ts">
import { useFetchData } from "./assets/composables/useFetchData";
import { SortEnum } from "./type";
import Header from "./components/Header.vue";
import Filter from "./components/Filter.vue";
import DataTable from "./components/DataTable.vue";

const { resultList, isLoading, isError } = useFetchData({
  sortOption: SortEnum.Total_Time,
});
</script>

<template>
  <Header />
  <main class="container">
    <Filter />
    <DataTable v-if="resultList" :resultList="resultList" />
  </main>
</template>

<style scoped>
.container {
  padding: 3rem;
}
</style>
