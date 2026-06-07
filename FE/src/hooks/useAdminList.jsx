import { privateApi } from "../utils/axios";

export const useAdminList = async () => {
    const token = localStorage.getItem("accessTokern");

    const response = await privateApi.get("/users/manage-admin/",{
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};