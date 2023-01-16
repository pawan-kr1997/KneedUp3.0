import { Navigate } from "react-router-dom";

type HandleNavigationProps = {
    location: string;
};

export const HandleNavigation: React.FC<HandleNavigationProps> = ({ location }) => {
    console.log("clicked");
    return <Navigate to="/" replace />;
};
