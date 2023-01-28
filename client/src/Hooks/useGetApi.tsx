import { useState, useEffect } from "react";
import axios from "axios";
import { CategoryListProps, Post } from "../TscTypes/TscTypes";
import { useAuth } from "../Contexts/Auth";

export const useGetApi = (link: string) => {
    const [data, setData] = useState<CategoryListProps | Post[] | undefined>();
    const [loading, setLoading] = useState(true);
    const { isLogged } = useAuth();
    // console.log(`inside usegetapi hook ${link}`);

    const handleFetch = async () => {
        const cancelToken = axios.CancelToken.source();
        try {
            // setLoading(true);
            const response = await axios.get(link, { cancelToken: cancelToken.token });
            //console.log(response.data);
            setLoading(false);
            setData(response.data.data);
        } catch (err) {
            setLoading(true);
            console.log(err);
        }
    };

    useEffect(() => {
        handleFetch();
    }, [JSON.stringify(data), link, isLogged]);

    return [data, loading, setData] as const;
};
