import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLoading } from "./useLoading";
import axios from "axios";
import { getFeedUrlAndHeader } from "../Functions/componentFunctions";

export const useGetApi = () => {
    let navigate = useNavigate();
    let params = useParams();
    const [data, setData] = useState();
    const [loading, setLoading] = useLoading();

    const feedData = getFeedUrlAndHeader(params.category, navigate);

    console.log(`url is: ${feedData.url} and header text is: ${feedData.headerText}`);

    // useEffect(() => {
    //     (async () => {
    //         const cancelToken = axios.CancelToken.source();
    //         try {
    //             const feeds = await axios.get(link, { cancelToken: cancelToken.token });
    //             console.log(feeds.data);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     })();
    // }, []);

    return [data];
};
