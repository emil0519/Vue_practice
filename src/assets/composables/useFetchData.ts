import type { ResultListType } from "@/type";
import { ref, onMounted, type Ref } from "vue";

interface ReturnType {
  resultList: Ref<ResultListType[] | null>;
  isLoading: Ref<boolean>;
  isError: Ref<boolean>;
}

export const useFetchData = (): ReturnType => {
  const resultList = ref<ResultListType[] | null>(null);
  const isLoading = ref<boolean>(false);
  const isError = ref<boolean>(false);

  onMounted(async () => {
    try {
      isLoading.value = true;
      isError.value = false;
      const response = await fetch(
        "https://core.xterraplanet.com/api/application-task/cee4389b-1668-4e39-b500-3572f0982b09"
      );
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      const data: ResultListType[] = await response.json();
      resultList.value = data;
    } catch (error) {
      console.error("Error fetching athletes:", error);
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  });

  return { resultList, isLoading, isError };
};
