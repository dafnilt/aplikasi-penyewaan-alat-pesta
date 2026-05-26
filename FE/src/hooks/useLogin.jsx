import { useMutation } from "@tanstack/react-query";

import { privateApi } from "../utils/axios";

export function useLogin() {
  return useMutation({
    mutationFn: async ({ username, password }) => {
      const response = await privateApi.post(
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
