import Logo from "../assets/logo.webp";

import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useLogin } from "../hooks/useLogin";

function HeaderAdmin({ isSidebarOpen }) {
	const { user } = useLogin();

	return (
		<header
            className={`
                bg-white border-b border-gray-200 flex items-center justify-between
                pr-4 py-3 shadow-sm transition-all duration-300
            `}
        >
			<div className={`flex items-center gap-3 transition-all duration-300 ${isSidebarOpen ? "pl-24 md:pl-5" : "pl-8 md:pl-12"}`}>
				<img
					src={Logo}
					alt="Logo"
					className="w-[130px] object-contain"
				/>

				<div>
					<div className="text-sm font-medium text-[#1f1f1f]">
						Admin Panel - Penyewaan Alat Pesta
					</div>
				</div>
			</div>

			<div className="flex items-center gap-3">
				<AccountCircleRoundedIcon />

				<div className="text-right pr-2">
					<div className="text-sm font-medium text-[#1f1f1f]">
						{user?.username}
					</div>

					<div className="text-xs text-gray-500">
						{user?.groups?.includes("Admin") ? "Admin" : "Masih salah"}
					</div>
				</div>
			</div>
		</header>
	);
}

export default HeaderAdmin;