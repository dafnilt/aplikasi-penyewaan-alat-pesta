import { useQuery } from "@tanstack/react-query";

import { privateApi } from "../utils/axios.js";

export function useCrossSellRecommendations() {
  const {
    data: products = [],
    isFetching,
    isError,
  } = useQuery({
    queryKey: ["cross-sell-products"],
    queryFn: async ({ signal }) => {
      const response = await privateApi.get("/recommendations/cross-sell", {
        signal,
      });

      return response.data?.data ?? [];
    },
  });

  return {
    products,
    isFetching,
    isError,
  };
}
