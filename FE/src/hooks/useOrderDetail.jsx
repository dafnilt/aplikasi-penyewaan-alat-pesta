import { privateApi } from "../utils/axios";

export const useOrderDetail = async (orderId) => {
  const token = localStorage.getItem("accessToken");

  const response = await privateApi.get(`/orders/detail/`, {
    params: { 
        orderId: orderId,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};