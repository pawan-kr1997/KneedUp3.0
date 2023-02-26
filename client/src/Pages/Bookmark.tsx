import BookmarkCard from "../ComponentsNew/Bookmark/BookmarkCard";
import BookmarkCardSkeleton from "../ComponentsNew/Bookmark/BookmarkCardSkeleton";
import NavBar from "../ComponentsNew/NavBar";
import { BookmarkContainer } from "../Styles/bookmark.styles";
import { BookmarkData } from "../TscTypes/TscTypes";
import { useIsFetching } from "react-query";
import { useBookmark } from "../Hooks/useBookmark";
import { useState } from "react";

const Bookmark = () => {
    const isFetching = useIsFetching();
    const { bmarks, handleDelete } = useBookmark();

    let cardArr = [...Object.entries(bmarks)].reverse().map((el: [string, BookmarkData]) => {
        return <BookmarkCard key={el[0]} post={el[1]} onDelete={handleDelete} />;
    });

    return (
        <>
            <NavBar variant="secondary" />
            <BookmarkContainer>{isFetching ? <BookmarkCardSkeleton /> : <>{cardArr}</>}</BookmarkContainer>
        </>
    );
};

export default Bookmark;
