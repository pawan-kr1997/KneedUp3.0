import { useMutation, useQuery, useQueryClient } from "react-query";
import { addBookmark, deleteBookmark, fetchBookmarks } from "../Functions/axiosFunctions";
import { BookmarkData } from "../TscTypes/TscTypes";
import { useToast } from "@chakra-ui/react";
import { handleUserDataError } from "../Functions/errorFunction";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useBookmark = () => {
    const queryClient = useQueryClient();
    const toast = useToast();
    const navigate = useNavigate();

    const bookmarkFallback: BookmarkData[] = [];
    const { data: bookmarks = bookmarkFallback } = useQuery("bookmark", fetchBookmarks, {
        onError: (error) => {
            console.log(error);
            toast({ title: "Something went wrong", status: "error", duration: 3000, isClosable: true });
            if (axios.isAxiosError(error)) {
                handleUserDataError(error.response?.data, navigate);
            } else {
                navigate("/somethingWentWrong");
            }
        },
    });

    const { mutate: handleDelete } = useMutation((postId: string) => deleteBookmark(postId), {
        onSuccess: (data) => {
            console.log(data);
            toast({ title: "Bookmark deleted", status: "success", duration: 3000, isClosable: true });
            queryClient.invalidateQueries("bookmark");
        },
        onError: (error) => {
            console.log(error);
            toast({ title: "Something went wrong", status: "error", duration: 3000, isClosable: true });
            if (axios.isAxiosError(error)) {
                handleUserDataError(error.response?.data, navigate);
            } else {
                navigate("/somethingWentWrong");
            }
        },
    });

    const { mutate: handleBookmark } = useMutation((postId: string) => addBookmark(postId), {
        onSuccess: (data) => {
            console.log("bookmark added");
            toast({ title: "Bookmark added", status: "success", duration: 3000, isClosable: true });
            queryClient.invalidateQueries("bookmark");
        },
        onError: (error) => {
            console.log(error);
            if (axios.isAxiosError(error)) {
                handleUserDataError(error.response?.data, navigate);
            } else {
                navigate("/somethingWentWrong");
            }
        },
    });

    const { mutate: handleUnmark } = useMutation((postId: string) => deleteBookmark(postId), {
        onSuccess: (data) => {
            console.log("bookmark deleted");
            toast({ title: "Bookmark deleted", status: "success", duration: 3000, isClosable: true });
            queryClient.invalidateQueries("bookmark");
        },
        onError: (error) => {
            console.log(error);
            toast({ title: "Something went wrong", status: "error", duration: 3000, isClosable: true });
            if (axios.isAxiosError(error)) {
                handleUserDataError(error.response?.data, navigate);
            } else {
                navigate("/somethingWentWrong");
            }
        },
    });

    return { bookmarks, handleDelete, handleBookmark, handleUnmark };
};
