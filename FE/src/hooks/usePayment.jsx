import { useQuery } from "@tanstack/react-query";
import { privateApi } from "../utils/axios.js";

export function usePayment() {
  const guestId = localStorage.getItem("guestId");

  return useQuery({
    queryKey: ["payment", guestId],
    enabled: Boolean(guestId),

    queryFn: async ({ signal }) => {
      const response = await privateApi.get("/orders/checkout-data/", {
        params: { guestId },
        signal,
      });

      return response.data?.data ?? null;
    },
  });
}