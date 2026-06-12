import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { useAuthMe } from "../hooks/useAuthMe";

const adminMenus = [
	{
		label: "Pesanan",
		to: "/orders",
		roles: ["Admin", "Super Admin"],
	},
	{
		label: "Akun Admin",
		to: "/admin-accounts",
		roles: ["Super Admin"],
	},
];

function NavbarAdmin({ isOpen, setIsOpen, disabled = false }) {
	const [user, setUser] = useState(null);

	const fetchUser = async () => {
		try {
			const response = await useAuthMe();
			setUser(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchUser();
	}, []);

	const filteredMenus = adminMenus.filter((menu) =>
		menu.roles.some((role) => user?.groups?.includes(role))
	);

	return (
		<>
			<div className="fixed top-5 left-1 z-[10000]">
				<IconButton
					disabled={disabled}
					onClick={() => {
						if (!disabled) {
							setIsOpen(!isOpen);
						}
					}}
					sx={{
						backgroundColor: "#ffffff",
						opacity: disabled ? 0.5 : 1,
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
					h-screen sticky top-0 z-[9000] bg-white shadow-md transition-all duration-300 overflow-hidden
					${isOpen ? "w-[200px]" : "w-0"}
				`}
			>
				<div className={`${isOpen ? "block" : "hidden"} pt-16`}>
					<nav className="space-y-2" aria-label="Navigasi Admin">
						{filteredMenus.map((menu) => (
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
					</nav>
				</div>
			</aside>
		</>
	);
}

export default NavbarAdmin;