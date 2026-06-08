import { useQuery } from "@tanstack/react-query";
import { privateApi } from "../utils/axios.js";
import { useMutation } from "@tanstack/react-query";

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

export function useCheckout() {
  return useMutation({
    mutationFn: async ({ name, address, city, phone }) => {
      const response = await privateApi.post("/orders", {
        guestId: localStorage.getItem("guestId"),
        recipientName: name,
        phoneNumber: `0${phone}`,
        shippingAddress: address,
        city,
      });

      return response.data?.data ?? null;
    },
  });
}
