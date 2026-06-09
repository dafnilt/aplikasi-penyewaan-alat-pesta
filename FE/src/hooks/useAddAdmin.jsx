import { adminApi } from "../utils/axios";

export const useAddAdmin = async (username, password, fullName, isActive) => {
  const response = await adminApi.post("/users/manage-admin/", {
    username,
    password,
    fullName,
    isActive
  });

  return response.data;
};