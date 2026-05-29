import { useMutation } from "@tanstack/react-query";

import { privateApi } from "../utils/axios.js";

export function useAddToCart() {
  return useMutation({
    mutationFn: async ({ guestId, idProduct, combinationId, quantity }) => {
      const response = await privateApi.post("/carts/add/", {
        guestId,
        idProduct,
        combinationId,
        quantity,
      });

      return response.data?.data ?? response.data ?? null;
    },
  });
}
