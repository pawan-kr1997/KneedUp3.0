import React, { useState } from "react";
import { useGetApi } from "../../Hooks/useGetApi";
import { FeedsContainer } from "../../Styles/home.styles";
import Date from "./Date";
import FeedsCard from "./FeedsCard";
import FeedsCardSkeleton from "./FeedsCardSkeleton";
import FeedsHeader from "./FeedsHeader";

const Feeds = () => {
    const [data] = useGetApi();
    const [loading, setLoading] = useState(false);

    const feedsContent = loading ? (
        <>
            <FeedsCardSkeleton />
            <FeedsCardSkeleton />
            <FeedsCardSkeleton />
            <FeedsCardSkeleton />
            <FeedsCardSkeleton />
            <FeedsCardSkeleton />
            <FeedsCardSkeleton />
            <FeedsCardSkeleton />
        </>
    ) : (
        <>
            <FeedsHeader />
            <Date>19th oct 2022</Date>
            <FeedsCard />
            <FeedsCard />
            <FeedsCard />
            <FeedsCard />
            <FeedsCard />
            <Date>19th oct 2022</Date>
            <FeedsCard />
        </>
    );

    return <FeedsContainer>{feedsContent}</FeedsContainer>;
};

export default Feeds;
