import logo from "../assets/logo.webp";

function Login() {
  return (
    <div className="min-h-screen bg-[#F3F3F3] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg overflow-hidden rounded-3xl bg-white">
          <div className="p-8 sm:p-10 md:p-12">
            <div className="mb-8">
              <img src={logo} alt="Logo" className="h-12 w-auto mx-auto" />
            </div>

            <form className="space-y-5">
              <div>
                <label htmlFor="username" className="mb-2 block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Masukkan username"
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
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-[#2F4C23] focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#53823F] px-4 py-3 font-semibold text-white transition hover:bg-[#243b1b]"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Login;
