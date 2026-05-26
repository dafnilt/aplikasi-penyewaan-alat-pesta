import { useQuery } from "@tanstack/react-query";
import { privateApi } from "../utils/axios";

export function useProductDetail({ productId, startDate, endDate }) {

  return useQuery({
    queryKey: ["product-detail", productId, startDate, endDate],

    enabled: Boolean(productId) && Boolean(startDate) && Boolean(endDate),

    queryFn: async ({ signal }) => {
      const response = await privateApi.post(
        import.meta.env.VITE_PRODUCTS_DETAIL_API_PATH || "/products/detail/",
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
