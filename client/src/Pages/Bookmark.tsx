import React, { useState } from "react";
import BookmarkCard from "../ComponentsNew/Bookmark/BookmarkCard";
import BookmarkCardSkeleton from "../ComponentsNew/Bookmark/BookmarkCardSkeleton";
import NavBar from "../ComponentsNew/NavBar";
import { BookmarkContainer } from "../Styles/bookmark.styles";

const Bookmark = () => {
    const [loading, setLoading] = useState(false);

    const bookmarkContent = loading ? (
        <>
            <BookmarkCardSkeleton />
            <BookmarkCardSkeleton />
            <BookmarkCardSkeleton />
            <BookmarkCardSkeleton />
        </>
    ) : (
        <>
            <BookmarkCard />
            <BookmarkCard />
            <BookmarkCard />
            <BookmarkCard />
            <BookmarkCard />
            <BookmarkCard />
            <BookmarkCard />
        </>
    );

    return (
        <>
            <NavBar variant="secondary" />
            <BookmarkContainer>{bookmarkContent}</BookmarkContainer>
        </>
    );
};

export default Bookmark;
