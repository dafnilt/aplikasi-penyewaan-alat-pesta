import { useQuery } from "@tanstack/react-query";

import { privateApi } from "../utils/axios";

export function useCatalogProducts(requestParams) {
  const {
    data: products = [],
    isFetching,
    isError,
  } = useQuery({
    queryKey: ["products", requestParams],

    enabled: !!requestParams,

    queryFn: async ({ signal }) => {
      const guestId = localStorage.getItem("guestId") || "";

      const response = await privateApi.post(
        import.meta.env.VITE_PRODUCTS_API_PATH || "/products/",
        {
          ...requestParams,
          guestId,
        },
        {
          signal,
        },
      );

      return response.data?.data ?? [];
    },
  });

  return {
    products,
    isFetching,
    isError,
  };
}
