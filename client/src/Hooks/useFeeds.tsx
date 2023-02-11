import { useEffect } from "react";
import { getFeedUrlAndHeader } from "../Functions/componentFunctions";
import { useParams, useNavigate } from "react-router-dom";
import { useGetApi } from "./useGetApi";
import { useScrollTop } from "./useScrollTop";
import { useInitFeeds } from "./useInitFeeds";
import { useQuery } from "react-query";
import { fetchFeedsParams } from "../TscTypes/Functions";
import { fetchFeeds } from "../Functions/axiosFunctions";
import { Post } from "../TscTypes/TscTypes";

export const useFeeds = () => {
    const params = useParams();
    const navigate = useNavigate();
    const feedsData = getFeedUrlAndHeader(params.category, navigate);
    const url = feedsData.url;
    useScrollTop();
    const fallback: Post[] = [];
    const { data = fallback } = useQuery(["feeds", feedsData.headerText], () => fetchFeeds(url), {
        onError: (error) => {
            console.log(error);
        },
    });

    return [data, feedsData.headerText] as const;
};
