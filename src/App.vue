<script setup lang="ts">
import { useFetchData } from "./assets/composables/useFetchData";
import { SortEnum } from "./type";
import Header from "./components/Header.vue";
import Filter from "./components/Filter.vue";
import DataTable from "./components/DataTable.vue";
import Loading from "./components/Loading.vue";
import Error from "./components/Error.vue";

const { resultList, isLoading, isError } = useFetchData({
  sortOption: SortEnum.Total_Time,
});
</script>

<template>
  <Header />
  <main class="container">
    <div v-if="isLoading"><Loading /></div>
    <div v-if="isError"><Error /></div>
    <div v-if="!isLoading && !isError && resultList">
      <Filter /> <DataTable :resultList="resultList" />
    </div>
  </main>
</template>

<style scoped>
.container {
  padding: 3rem;
}
</style>
