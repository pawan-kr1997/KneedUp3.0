import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const useScrollTop = () => {
    const params = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [params.category]);
};
