<script setup lang="ts">
import { defineProps, type Ref } from "vue";
import type { ResultListType } from "@/type";
import { getSplitTime } from "../utilis";
import { SortEnum } from "@/type";

const props = defineProps<{
  resultList: ResultListType[];
}>();
const { resultList } = props;
</script>
<template>
  <table>
    <thead>
      <tr>
        <th>First name</th>
        <th>Last name</th>
        <th>Gender</th>
        <th>Division</th>
        <th>Nationality</th>
        <th>Total time</th>
        <th>Swim time</th>
        <th>Bike time</th>
        <th>Run time</th>
        <th>T1 time</th>
        <th>T2 time</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="result in resultList"
        :key="`${result.first_name}_${result.last_name}_${result.nationality}`"
      >
        <td>{{ result.first_name }}</td>
        <td>{{ result.last_name }}</td>
        <td>{{ result.gender }}</td>
        <td>{{ result.division }}</td>
        <td>{{ result.nationality }}</td>
        <td>{{ result.total_time }}</td>
        <td>{{ getSplitTime(result.splits, SortEnum.Swim_Time) }}</td>
        <td>{{ getSplitTime(result.splits, SortEnum.Bike_Time) }}</td>
        <td>{{ getSplitTime(result.splits, SortEnum.Run_time) }}</td>
        <td>{{ getSplitTime(result.splits, SortEnum.T1_time) }}</td>
        <td>{{ getSplitTime(result.splits, SortEnum.T2_time) }}</td>
      </tr>
    </tbody>
  </table>
</template>
<style lang="css" scoped>
.item-container {
  display: flex;
  flex-direction: column;
}
.item {
  display: flex;
  gap: 8px;
}
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}
</style>
