<script setup lang="ts">
import { useFetchData } from "./assets/composables/useFetchData";
import { SortEnum } from "./type";
import Header from './components/Header.vue'; // Adjust the path as necessary


const { resultList, isLoading, isError } = useFetchData({ sortOption: SortEnum.Total_Time });

</script>

<template>
<Header></Header>
  <main class="container">
    
  </main>
</template>

<style scoped>
.container{
  padding: 3rem
}
</style>
