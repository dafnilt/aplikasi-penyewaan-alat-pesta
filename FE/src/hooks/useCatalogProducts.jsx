import { useQuery } from "@tanstack/react-query";
import { privateApi } from "../utils/axios.js";
import { formatApiDateTime } from "../utils/formatApiDateTime.jsx";

export function useCatalogProducts(startDate, endDate) {
  const guestId = localStorage.getItem("guestId") || "";
  const {
    data: products = [],
    isFetching,
    isError,
  } = useQuery({
    queryKey: ["products", startDate, endDate, guestId],

    enabled: !!startDate && !!endDate,

    queryFn: async ({ signal }) => {
      const response = await privateApi.post(
        "/products/",
        {
          startDate: formatApiDateTime(startDate),
          endDate: formatApiDateTime(endDate),
          guestId,
        },
        { signal },
      );

      return response.data?.data ?? [];
    },
  });

  return {
    products,
    isFetching,
    isError,
  };
}
