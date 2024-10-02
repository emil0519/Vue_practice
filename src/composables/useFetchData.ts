import { SortEnum, type ResultListType } from "@/type";
import { replaceOutliers, sortData } from "@/utilis";
import { ref, onMounted, type Ref, watch } from "vue";

interface ReturnType {
  resultList: Ref<ResultListType[] | null>;
  isLoading: Ref<boolean>;
  isError: Ref<boolean>;
  sortOption: Ref<SortEnum>;
}

export const useFetchData = (): ReturnType => {
  const resultList = ref<ResultListType[] | null>(null);
  const isLoading = ref<boolean>(false);
  const isError = ref<boolean>(false);
  const sortOption = ref<SortEnum>(SortEnum.Total_Time);

  onMounted(async () => {
    const fetchAthletes = async () => {
      try {
        isLoading.value = true;
        isError.value = false;
        const response = await fetch(
          "https://core.xterraplanet.com/api/application-task/cee4389b-1668-4e39-b500-3572f0982b09"
        );
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);
        const data: ResultListType[] = await response.json();
        const replacedData = replaceOutliers(data, ["00:00:00", "23:59:59"]);
        const sortedData = sortData(replacedData, sortOption.value);
        resultList.value = sortedData;
      } catch (error) {
        console.error("Error fetching athletes:", error);
        isError.value = true;
      } finally {
        isLoading.value = false;
      }
    };
    fetchAthletes();
  });

  watch(sortOption, (newVal) => {
    if (resultList) {
      const sortedData = sortData(resultList.value as ResultListType[], newVal);
      resultList.value = sortedData;
    }
  });

  return { resultList, isLoading, isError, sortOption };
};
