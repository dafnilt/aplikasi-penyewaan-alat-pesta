import { useMutation } from "@tanstack/react-query";

import { privateApi } from "../utils/axios";

export function useAddToCart() {
  return useMutation({
    mutationFn: async ({ guestId, idProduct, combinationId, quantity }) => {
      const response = await privateApi.post(
        import.meta.env.VITE_PRODUCTS_API_PATH || "/carts/add/",
        {
          guestId,
          idProduct,
          combinationId,
          quantity,
        },
      );

      return response.data?.data ?? response.data ?? null;
    },
  });
}
