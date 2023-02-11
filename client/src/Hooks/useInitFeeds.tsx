import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/Auth";
import { useCategoryList } from "../Contexts/CategoryList";
import { handleInitNavigation } from "../Functions/navigation";

export const useInitFeeds = () => {
    const { list } = useCategoryList();
    const { isLogged } = useAuth();
    const navigate = useNavigate();
    // console.log(list);
    useEffect(() => {
        if (list) {
            handleInitNavigation(navigate, list);
            console.log(`hello ${JSON.stringify(list)}`);
        }
    }, [JSON.stringify(list), isLogged]);
};
