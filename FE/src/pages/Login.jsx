import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import logo from "../assets/logo.webp";
import Skeleton from "@mui/material/Skeleton";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

const getLoginErrorMessage = (error) => {
  const status = error?.response?.status;

  if (status === 400 || status === 401 || status === 403) {
    return "Login gagal. Periksa username dan password Anda.";
  }
};

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const loginMutation = useLogin();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await loginMutation.mutateAsync({
        username,
        password,
      });

      notification.success({
        message: "Login berhasil",
        description: "Anda berhasil login.",
        placement: "topRight",
      });

      navigate("/orders");
    } catch (error) {
      setErrorMessage(getLoginErrorMessage(error));
      notification.error({
        message: "Login gagal",
        description: getLoginErrorMessage(error),
        placement: "topRight",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F3F3] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg overflow-hidden rounded-lg bg-white">
          <div className="p-8 sm:p-10 md:p-12">
            <div className="mb-8">
              <img src={logo} alt="Logo" className="h-12 w-auto mx-auto" />
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username" className="mb-2 block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Masukkan username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-[#2F4C23] focus:bg-white"
                />
              </div>

              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Masukkan password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-[#2F4C23] focus:bg-white"
                />
              </div>

            <button
              type="submit"
              disabled={loginMutation.isPending}
              className="w-full rounded-lg bg-[#53823F] px-4 py-3 font-semibold text-white transition hover:bg-[#243b1b] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loginMutation.isPending ? (
                <Skeleton
                  variant="text"
                  width={80}
                  height={24}
                  sx={{
                    bgcolor: "rgba(255,255,255,0.3)",
                    margin: "0 auto",
                  }}
                />
              ) : (
                "Login"
              )}
            </button>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Login;
