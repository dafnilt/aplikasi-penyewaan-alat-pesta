import { useMutation } from "@tanstack/react-query";

import { privateApi } from "../utils/axios.js";

export function useUpsellRecommendations() {
  return useMutation({
    mutationFn: async ({
      idProduct,
      idVariantCombination,
      startDate,
      endDate,
      quantity,
      isFromRecommendation,
    }) => {
      const response = await privateApi.post("/recommendations/upsell/", {
        idProduct,
        idVariantCombination,
        startDate,
        endDate,
        quantity,
        isFromRecommendation,
      });

      return response.data?.data ?? [];
    },
  });
}
