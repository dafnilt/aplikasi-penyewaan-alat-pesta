import { useEffect, useState } from "react";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { privateApi } from "../utils/axios.js";

const ensureGuestId = () => {
  let guestId = localStorage.getItem("guestId");

  if (!guestId) {
    guestId = crypto.randomUUID();
    localStorage.setItem("guestId", guestId);
  }

  return guestId;
};

export function useCartDetail() {
  const [guestId, setGuestId] = useState("");

  useEffect(() => {
    setGuestId(ensureGuestId());
  }, []);

  return useQuery({
    queryKey: ["cart-detail", guestId],
    enabled: Boolean(guestId),
    queryFn: async ({ signal }) => {
      const response = await privateApi.get("/carts/", {
        params: { guestId },
        signal,
        headers: {
          "Content-Type": "application/json",
        },
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
    mutationFn: async ({ guestId, idCartItem }) => {
      const response = await privateApi.delete("/carts/", {
        guestId,
        idCartItem,
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
