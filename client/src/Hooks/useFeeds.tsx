import { useEffect } from "react";
import { getFeedUrlAndHeader } from "../Functions/componentFunctions";
import { useParams, useNavigate } from "react-router-dom";
import { useGetApi } from "./useGetApi";
import { useScrollTop } from "./useScrollTop";
import { useInitFeeds } from "./useInitFeeds";

export const useFeeds = () => {
    const params = useParams();
    const navigate = useNavigate();
    const feedsData = getFeedUrlAndHeader(params.category, navigate);
    useScrollTop();
    useInitFeeds();
    const [data, loading] = useGetApi(feedsData.url);
    return [data, loading, feedsData.headerText] as const;
};
