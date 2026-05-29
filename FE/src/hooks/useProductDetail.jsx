import { useQuery } from "@tanstack/react-query";
import { privateApi } from "../utils/axios.js";

export function useProductDetail({ productId, startDate, endDate }) {
  return useQuery({
    queryKey: ["product-detail", productId, startDate, endDate],

    enabled: Boolean(productId) && Boolean(startDate) && Boolean(endDate),

    queryFn: async ({ signal }) => {
      const response = await privateApi.post(
        "/products/detail/",
        {
          idProduct: productId,
          startDate,
          endDate,
        },
        {
          signal,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      return response.data?.data ?? null;
    },
  });
}
