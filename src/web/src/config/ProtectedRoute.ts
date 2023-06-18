import { getUserRoles } from "../auth/useAuth";

type Role = 'leader';

interface ProtectedRouteProps {
    component: React.ComponentType<any>;
    allowedRoles: Role[];
    path: string;
    exact?: boolean;

}

export function ProtectedRoute(props: ProtectedRouteProps) {
    const { component: Component, allowedRoles, ...rest } = props;

    const userRoles = getUserRoles();

    const isAuthorized = userRoles?.some(role => allowedRoles.includes(role));
}