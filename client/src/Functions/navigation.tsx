import { NavigateFunction } from "react-router-dom";
import { CategoryListProps } from "../TscTypes/TscTypes";

export const handleNavigation = (navigate: NavigateFunction, location: string) => {
    navigate(location);
};

export const handleInitNavigation = (navigate: NavigateFunction, list: CategoryListProps) => {
    if (list.news) {
        return navigate("/newsOnAir_National");
    } else if (list.president) {
        return navigate("/poi_Speeches");
    } else if (list.pib) {
        return navigate("/pib_pressReleases");
    } else {
        return navigate("/prs_Blogs");
    }
};
