import { NavigateFunction } from "react-router-dom";

export const handleNavigation = (navigate: NavigateFunction, location: string) => {
    navigate(location);
};
