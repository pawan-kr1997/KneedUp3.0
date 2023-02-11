import { useState, useEffect } from "react";
import axios from "axios";
import { BookmarkData, CategoryListProps, Post } from "../TscTypes/TscTypes";
import { useAuth } from "../Contexts/Auth";

export const useGetApi = (link: string) => {
    const [data, setData] = useState<CategoryListProps | Post[] | BookmarkData[] | boolean | undefined>();
    const [loading, setLoading] = useState(true);
    const { isLogged } = useAuth();

    useEffect(() => {
        const handleFetch = async () => {
            const cancelToken = axios.CancelToken.source();
            try {
                const response = await axios.get(link, { cancelToken: cancelToken.token });
                setLoading(false);
                setData(response.data.data);
            } catch (err) {
                setLoading(true);
                // console.log(err);
            }
        };
        handleFetch();
    }, [JSON.stringify(data), link, isLogged]);
    // }, [link, isLogged]);

    return [data, loading, setData] as const;
};
