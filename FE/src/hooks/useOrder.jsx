import { useQuery } from "@tanstack/react-query";
import { privateApi } from "../utils/axios.js";

export function useShipping(city) {
  const guestId = localStorage.getItem("guestId");

  return useQuery({
    queryKey: ["shipping-cost", city],
    queryFn: async () => {
      const response = await privateApi.get("/orders/shipping", {
        params: {
          guestId,
          city,
        },
      });

      return response.data?.data ?? null;
    },
  });
}

export function useOrderSummary() {
  const guestId = localStorage.getItem("guestId");
  
  return useQuery({
    queryKey: ["order-summary", guestId],
    enabled: Boolean(guestId),
    queryFn: async () => {
      const response = await privateApi.get("/orders/summary", {
        params: {
          guestId,
        },
      });

      return response.data?.data ?? null;
    },
  });
}
