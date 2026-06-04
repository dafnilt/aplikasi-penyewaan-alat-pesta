import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";

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
      const response = await privateApi.get(
        "/carts/detail/",
        {
          guestId,
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
