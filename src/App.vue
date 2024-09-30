<script setup lang="ts">
import { useFetchData } from "./assets/composables/useFetchData";
import { SortEnum } from "./type";

const { resultList, isLoading, isError } = useFetchData({ sortOption: SortEnum.Total_Time });

</script>

<template>
  <header></header>

  <main></main>
</template>

<style scoped></style>
