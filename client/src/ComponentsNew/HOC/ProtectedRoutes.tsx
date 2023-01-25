import react from "react";
import { useNavigate } from "react-router-dom";
import { AuthProvider, useAuth } from "../../Contexts/Auth";
import { CategoryListProvider } from "../../Contexts/CategoryList";
import { Navigate, Route, RouteProps, Outlet } from "react-router-dom";
import { ChildrenProps } from "../../TscTypes/TscTypes";

// type ProtectedRouteProps = RouteProps & {};

export const ProtectedRoute = () => {
    const { isLogged } = useAuth();

    return isLogged ? <Outlet /> : <Navigate to="/login" />;
};

export const HomeProvider: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <AuthProvider>
            <CategoryListProvider>{children}</CategoryListProvider>
        </AuthProvider>
    );
};
