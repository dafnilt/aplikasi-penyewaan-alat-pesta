import { adminApi } from "../utils/axios";

export const useOrderDetail = async (orderId) => {
  const response = await adminApi.get(`/orders/detail/`, {
    params: { 
        orderId: orderId,
    }
  });

  return response.data;
};