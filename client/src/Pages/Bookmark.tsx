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
    const { bookmarks, handleDelete } = useBookmark();

    let cardArr = [...bookmarks].reverse().map((el: BookmarkData) => {
        return <BookmarkCard key={el.id} post={el} onDelete={handleDelete} />;
    });

    return (
        <>
            <NavBar variant="secondary" />
            <BookmarkContainer>{isFetching ? <BookmarkCardSkeleton /> : <>{cardArr}</>}</BookmarkContainer>
        </>
    );
};

export default Bookmark;
