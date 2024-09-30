<script setup lang="ts">
import { useFetchData } from "./assets/composables/useFetchData";

const { resultList, isLoading, isError } = useFetchData();
</script>

<template>
  <header></header>

  <main></main>
</template>

<style scoped></style>
