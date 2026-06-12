import { adminApi } from "../utils/axios";

export const useChangeStatusOrder = async (orderId, statusId) => {
  const response = await adminApi.patch(`/orders/`, 
    { 
        orderId,
        statusId:Number(statusId),
    },
  );

  return response.data;
};