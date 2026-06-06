import { privateApi } from "../utils/axios";

export const useOrderPage = async () => {
  const token = localStorage.getItem("accessToken");

  const response = await privateApi.get("/orders/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};