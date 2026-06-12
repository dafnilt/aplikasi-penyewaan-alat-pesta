import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { privateApi } from "../utils/axios.js";
import { formatApiDateTime } from "../utils/formatApiDateTime.jsx";

export function useAddToCart() {
  return useMutation({
    mutationFn: async ({
      guestId,
      idProduct,
      combinationId,
      quantity,
      startDate,
      endDate,
    }) => {
      const response = await privateApi.post("/carts/", {
        guestId,
        idProduct,
        combinationId,
        quantity,
        startDate: formatApiDateTime(startDate),
        endDate: formatApiDateTime(endDate),
      });

      return response.data?.data ?? response.data ?? null;
    },
  });
}

export function useCartDetail() {
  const guestId = localStorage.getItem("guestId");

  return useQuery({
    queryKey: ["cart-detail", guestId],
    enabled: Boolean(guestId),

    queryFn: async ({ signal }) => {
      const response = await privateApi.get("/carts/", {
        params: { guestId },
        signal,
      });

      return response.data?.data ?? null;
    },
  });
}

export function useUpdateCartItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ guestId, idCartItem, quantity }) => {
      const response = await privateApi.patch(
        "/carts/",
        {
          guestId,
          idCartItem,
          quantity,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      return response.data?.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart-detail"] });
    },
  });
}

export function useDeleteCartItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ idCartItem }) => {
      const guestId = localStorage.getItem("guestId");

      const response = await privateApi.delete("/carts/", {
        data: {
          guestId,
          idCartItem,
        },
      });

      return response.data?.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart-detail"],
      });
    },
  });
}