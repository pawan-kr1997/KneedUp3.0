import React, { useState } from "react";
import { getPostDateWithShortMonth } from "../../Functions/componentFunctions";
import { useFeeds } from "../../Hooks/useFeeds";
import { useGetApi } from "../../Hooks/useGetApi";
import { FeedsContainer } from "../../Styles/home.styles";
import { Post } from "../../TscTypes/TscTypes";
import Date from "./Date";
import FeedsCard from "./FeedsCard";
import FeedsCardSkeleton from "./FeedsCardSkeleton";
import FeedsHeader from "./FeedsHeader";

const Feeds = () => {
    const [data, loading, headerText] = useFeeds();
    const posts = data as Post[];
    let oldPostDate = "";
    let showDate = true;

    // console.log(data);

    let cardArray = null;
    if (data) {
        const finalPosts = [...posts].reverse();
        cardArray = finalPosts.map((el) => {
            const currentPostDate = getPostDateWithShortMonth(el.createdAt);
            if (oldPostDate !== currentPostDate) {
                showDate = true;
                oldPostDate = currentPostDate;
            } else {
                showDate = false;
            }

            return (
                <>
                    {showDate && <Date>{currentPostDate}</Date>}
                    <FeedsCard key={el.id} post={el} />
                </>
            );
        });
    }

    return (
        <FeedsContainer>
            <FeedsHeader header={headerText} />
            {loading ? (
                <>
                    <FeedsCardSkeleton />
                </>
            ) : (
                <>{cardArray}</>
            )}
        </FeedsContainer>
    );
};

export default Feeds;
