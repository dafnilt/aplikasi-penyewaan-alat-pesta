import { useQuery } from "@tanstack/react-query";

import { privateApi } from "../utils/axios.js";

export function useCrossSellRecommendations() {
  const guestId = localStorage.getItem("guestId");

  const {
    data: products = [],
    isFetching,
    isError,
  } = useQuery({
    queryKey: ["cross-sell-products"],
    enabled: Boolean(guestId),
    queryFn: async ({ signal }) => {
      const response = await privateApi.get("/recommendations/cross-sell", {
        params: { guestId },
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
