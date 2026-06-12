import { adminApi } from "../utils/axios";

export const useOrderPage = async () => {
  const response = await adminApi.get("/orders/");

  return response.data;
};