import { NavLink, useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

const adminMenus = [
	{
		label: "Pesanan",
		to: "/orders",
	},
];

function NavbarAdmin({ isOpen, setIsOpen }) {
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("accessToken");
		localStorage.removeItem("refreshToken");
		navigate("/login");
	};

	return (
		<>
			<div className="fixed top-2 left-1 z-50">
				<IconButton
					onClick={() => setIsOpen(!isOpen)}
					sx={{
						backgroundColor: "#ffffff",
						"&:hover": {
							backgroundColor: "#f5f5f5",
						},
					}}
				>
					{isOpen ? <CloseIcon /> : <MenuIcon />}
				</IconButton>
			</div>

			<aside
				className={`
					h-screen sticky top-0 bg-white shadow-md transition-all duration-300 overflow-hidden
					${isOpen ? "w-[200px]" : "w-0"}
				`}
			>
				<div className={`${isOpen ? "block" : "hidden"} pt-16`}>
					<nav className="space-y-2" aria-label="Navigasi Admin">
						{adminMenus.map((menu) => (
							<NavLink
								key={menu.label}
								to={menu.to}
								className={({ isActive }) =>
									`block px-4 py-3 text-sm transition-colors ${
										isActive
											? "bg-[#5B9941] text-white"
											: "text-[#1f1f1f] hover:bg-[#5B9941] hover:text-white"
									}`
								}
							>
								{menu.label}
							</NavLink>
						))}

						<button
							type="button"
							onClick={handleLogout}
							className="block w-full px-4 py-3 text-left text-sm text-[#1f1f1f] transition-colors hover:bg-[#5B9941] hover:text-white"
						>
							Logout
						</button>
					</nav>
				</div>
			</aside>
		</>
	);
}

export default NavbarAdmin;