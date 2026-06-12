import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthMe } from "../hooks/useAuthMe";

function ProtectedSuperAdminRoute() {
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await useAuthMe();

        setAllowed(
          response.data.groups?.includes("Super Admin")
        );
      } catch {
        setAllowed(false);
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  if (loading) return null;

  return allowed
    ? <Outlet />
    : <Navigate to="/login" replace />;
}

export default ProtectedSuperAdminRoute;