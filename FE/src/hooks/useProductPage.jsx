import { useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";

export function useProductPage() {
  const location = useLocation();

  const { idProduct } = useParams();

  const routeState = location.state ?? {};

  const searchParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search],
  );

  return {
    productId: Number(idProduct ?? routeState.idProduct),

    startDate: searchParams.get("startDate") || routeState.startDate || "",

    endDate: searchParams.get("endDate") || routeState.endDate || "",
  };
}
