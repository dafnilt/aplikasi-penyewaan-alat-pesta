import Logo from "../assets/logo.webp";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useAuthMe } from "../hooks/useAuthMe";
import { useLogout } from "../hooks/useLogout";
import { notification } from "antd";

function HeaderAdmin({ isSidebarOpen }) {
	const [user, setUser] = useState(null);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const navigate = useNavigate();
	const logoutMutation = useLogout();

	const fetchUser = async () => {
		try {
			const response = await useAuthMe();
			setUser(response.data);
		} catch (error) {
			console.error(error);
		} 
	};

	const handleLogout = async () => {
		try {
			await logoutMutation.mutateAsync();

			notification.success({
			message: "Logout berhasil",
			description: "Anda berhasil logout.",
			placement: "topRight",
			});

			navigate("/login");
		} catch (error) {
			notification.error({
			message: "Logout gagal",
			description: "Terjadi kesalahan saat logout.",
			placement: "topRight",
			});
	}
	};

	useEffect(() => {
		fetchUser();
	}, []);	
	

	return (
		<header
            className={`
                sticky top-0 z-[1] bg-white border-b border-gray-200 flex items-center justify-between
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

			<div className="relative">
				<button
					type="button"
					onClick={() => {
						setIsDropdownOpen(!isDropdownOpen);
					}}
					className={`flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-gray-100`}
				>
					<AccountCircleRoundedIcon />

					<div className="text-right pr-2">
						<div className="text-sm font-medium text-[#1f1f1f]">
							{user?.fullName || user?.username}
						</div>

						<div className="text-xs text-gray-500">
							{user?.groups?.includes("Admin") ? "Admin" : user?.groups?.includes("Super Admin") ? "Super Admin" : ""}
						</div>
					</div>
				</button>

				{isDropdownOpen ? (
					<div className="absolute right-0 w-40 rounded-lg border border-gray-200 bg-white shadow-lg">
						<button
							type="button"
							onClick={handleLogout}
							className="block w-full px-4 py-3 text-left text-sm text-[#1f1f1f] transition hover:bg-gray-100"
						>
							{logoutMutation.isPending ? "Logout..." : "Logout"}
						</button>
					</div>
				) : null}
			</div>
		</header>
	);
}

export default HeaderAdmin;