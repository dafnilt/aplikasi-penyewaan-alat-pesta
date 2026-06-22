import { adminApi } from "../utils/axios";

export const useChangeAdmin = async (
  idAdmin,
  fullName,
  username,
  password,
  isActive
) => {
  const payload = {
    idAdmin,
    fullName,
    username,
    password,
    isActive,
  };

  const response = await adminApi.patch(
    "/users/manage-admin/",
    payload
  );

  return response.data;
};