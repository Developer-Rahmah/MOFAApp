import { useRef, useState } from "react";
import { showCrossToast } from "helpers/general";

// type checking.
interface IUseService {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  apiCall: (...args: any[]) => Promise<any>;
}
interface CommonItemParams {
  id: any;
}

/**
 * A function that shows a custom hook to make an api calls.
 */
function useService<T extends CommonItemParams>({ apiCall }: IUseService) {
  // refs.
  const totalItems = useRef<number>(Infinity);

  // state.
  const [data, setData] = useState<T[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [showRefresh, setShowRefresh] = useState<boolean>(false);

  // Request data.
  const request = (...args: any[]) => {
    (async () => {
      try {
        setIsFetching(true);
        const response = await apiCall(...args);
        setData(response.results);
        totalItems.current = response.count;
      } catch (e: any) {
        console.log("ERROR: request_loadDataFromApi_hook", e);
        showCrossToast(e.message);
      } finally {
        setIsFetching(false);
      }
    })();
  };

  // Refresh data
  const refresh = (...args: any[]) => {
    (async () => {
      try {
        setIsRefreshing(true);
        const response = await apiCall(...args);
        setData(response.results);
        totalItems.current = response.count;
      } catch (e: any) {
        console.log("ERROR: refresh_loadDataFromApi_hook", e);
        showCrossToast(e.message);
      } finally {
        setIsRefreshing(false);
      }
    })();
  };

  return {
    request,
    refresh,
    isFetching,
    isRefreshing,
    isLoading: loading,
    showRefresh,
    data,
    setData,
  };
}

// export as default.
export default useService;
