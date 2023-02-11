import { useMutation, useQuery, useQueryClient } from "react-query";
import { addBookmark, deleteBookmark, fetchBookmarks } from "../Functions/axiosFunctions";
import { BookmarkData } from "../TscTypes/TscTypes";

export const useBookmark = () => {
    const queryClient = useQueryClient();

    const bookmarkFallback: BookmarkData[] = [];
    const { data: bookmarks = bookmarkFallback } = useQuery("bookmark", fetchBookmarks, {
        onError: (error) => {
            console.log(error);
        },
    });

    const { mutate: handleDelete } = useMutation((postId: string) => deleteBookmark(postId), {
        onSuccess: (data) => {
            queryClient.invalidateQueries("bookmark");
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const { mutate: handleBookmark } = useMutation((postId: string) => addBookmark(postId), {
        onSuccess: (data) => {
            console.log("bookmark added");
            queryClient.invalidateQueries("bookmark");
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const { mutate: handleUnmark } = useMutation((postId: string) => deleteBookmark(postId), {
        onSuccess: (data) => {
            console.log("bookmark deleted");
            queryClient.invalidateQueries("bookmark");
        },
        onError: (error) => {
            console.log(error);
        },
    });

    return { bookmarks, handleDelete, handleBookmark, handleUnmark };
};
