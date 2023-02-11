import { AuthProvider, useAuth } from "../Contexts/Auth";
import { CategoryListProvider } from "../Contexts/CategoryList";
import { Navigate, Outlet } from "react-router-dom";
import { ChildrenProps } from "../TscTypes/TscTypes";
import { SubscriptionProvider } from "../Contexts/Subscription";
import { useSubscription } from "../Contexts/Subscription";

export const AuthProtectedRoute = () => {
    const { isLogged } = useAuth();

    return isLogged ? <Outlet /> : <Navigate to="/login" />;
};

export const SubsProtectedRoute = () => {
    const { isLogged } = useAuth();
    const { subscriptionStatus } = useSubscription();

    console.log(`isLogged: ${isLogged} and Status: ${subscriptionStatus}`);

    if (!isLogged) {
        return <Navigate to="/login" />;
    }

    if (!subscriptionStatus) {
        console.log("hello");
        return <Navigate to="/subscription" />;
    }

    return <Outlet />;
};

export const HomeProvider: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <AuthProvider>
            <SubscriptionProvider>
                <CategoryListProvider>{children}</CategoryListProvider>
            </SubscriptionProvider>
        </AuthProvider>
    );
};
