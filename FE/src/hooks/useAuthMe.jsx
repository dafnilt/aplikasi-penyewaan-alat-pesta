import { adminApi } from "../utils/axios";

export const useAuthMe = async () => {
  const response = await adminApi.get("/auth/me/");

  return response.data;
};