import NavbarAdmin from "../components/NavbarAdmin";

function LayoutAdmin({ children, className = "" }) {
	return (
		<div className={`flex min-h-screen ${className}`}>
			<NavbarAdmin />

			<div className="flex-1 p-4 md:p-6 lg:p-8">
				{children}
			</div>
		</div>
	);
}

export default LayoutAdmin;