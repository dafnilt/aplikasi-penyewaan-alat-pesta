import { adminApi } from "../utils/axios";

export const useChangeAdmin = async (idAdmin, fullName, isActive) => {
  const response = await adminApi.patch("/users/manage-admin/", {
    idAdmin,
    fullName,
    isActive
  },);

  return response.data;
};