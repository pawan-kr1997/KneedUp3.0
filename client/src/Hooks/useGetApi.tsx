import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { getFeedUrlAndHeader } from "../Functions/componentFunctions";
import { CategoryListProps } from "../TscTypes/TscTypes";

export const useGetApi = (link: string) => {
    const [data, setData] = useState<CategoryListProps | undefined>();
    const [loading, setLoading] = useState(true);

    const handleFetch = async () => {
        const cancelToken = axios.CancelToken.source();
        try {
            const response = await axios.get(link, { cancelToken: cancelToken.token });
            console.log(response.data);
            setLoading(false);
            setData(response.data.data);
        } catch (err) {
            setLoading(true);
            console.log(err);
        }
    };

    useEffect(() => {
        handleFetch();
    }, [JSON.stringify(data)]);

    return [data, loading] as const;
};
