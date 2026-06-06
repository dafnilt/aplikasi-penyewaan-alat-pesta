import { privateApi } from "../utils/axios";

export const useOrderDetail = async () => {
  const token = localStorage.getItem("accessToken");

  const response = await privateApi.get("/orders/detail/<orderId>", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};