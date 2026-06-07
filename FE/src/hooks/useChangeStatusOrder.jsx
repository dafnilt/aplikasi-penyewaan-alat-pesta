import { privateApi } from "../utils/axios";

export const useChangeStatusOrder = async (orderId, statusId) => {
  const token = localStorage.getItem("accessToken");

  const response = await privateApi.patch(`/orders/`, 
    { 
        orderId,
        statusId:Number(statusId),
    },
    {
        headers: {

            Authorization: `Bearer ${token}`,
        },
    },
  );

  return response.data;
};