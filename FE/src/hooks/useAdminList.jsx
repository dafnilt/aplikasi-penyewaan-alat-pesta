import { adminApi } from "../utils/axios";

export const useAdminList = async () => {
    const response = await adminApi.get("/users/manage-admin/");
    return response.data;
};