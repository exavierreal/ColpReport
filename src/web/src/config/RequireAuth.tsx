import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getAuthToken } from "../auth/useAuth";

export function RequireAuth() {
    const auth = getAuthToken();
    const location = useLocation();

    return (
        auth
            ? <Outlet />
            : <Navigate to='/' state={{ from: location }} replace />
    );
}