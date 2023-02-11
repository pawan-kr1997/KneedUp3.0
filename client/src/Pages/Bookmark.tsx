import BookmarkCard from "../ComponentsNew/Bookmark/BookmarkCard";
import BookmarkCardSkeleton from "../ComponentsNew/Bookmark/BookmarkCardSkeleton";
import NavBar from "../ComponentsNew/NavBar";
import { BookmarkContainer } from "../Styles/bookmark.styles";
import { BookmarkData } from "../TscTypes/TscTypes";
import { useIsFetching, useQuery, useMutation, useQueryClient } from "react-query";
import { deleteBookmark, fetchBookmarks } from "../Functions/axiosFunctions";

const Bookmark = () => {
    const queryClient = useQueryClient();
    const bookmarkFallback: BookmarkData[] = [];
    const { data: bookmarks = bookmarkFallback } = useQuery("bookmark", fetchBookmarks, {
        onError: (error) => {
            console.log(error);
        },
    });
    const isFetching = useIsFetching();

    const { mutate: handleDelete } = useMutation((postId: string) => deleteBookmark(postId), {
        onSuccess: (data) => {
            queryClient.invalidateQueries("bookmark");
        },
        onError: (error) => {
            console.log(error);
        },
    });

    let cardArr = bookmarks.map((el: BookmarkData) => {
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
