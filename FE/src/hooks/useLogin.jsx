import { useMutation } from "@tanstack/react-query";

import { authApi } from "../utils/axios";

export function useLogin() {
  return useMutation({
    mutationFn: async ({ username, password }) => {
      const response = await authApi.post(
        import.meta.env.VITE_AUTH_API_PATH || "/auth/login/",
        {
          username,
          password,
        }, 
      );

      return response.data?.data ?? response.data ?? null;
    },
  });
}
