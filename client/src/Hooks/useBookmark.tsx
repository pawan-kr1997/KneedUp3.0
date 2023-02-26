import { useMutation, useQuery, useQueryClient } from "react-query";
import { addBookmark, deleteBookmark, fetchBmarks, fetchBookmarks } from "../Functions/axiosFunctions";
import { BmarkData, BookmarkData } from "../TscTypes/TscTypes";
import { useToast } from "@chakra-ui/react";
import { handleUserDataError } from "../Functions/errorFunction";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/Auth";
import { useSubscription } from "../Contexts/Subscription";

export const useBookmark = () => {
    const queryClient = useQueryClient();
    const toast = useToast();
    const navigate = useNavigate();
    const { isLogged } = useAuth();
    const { subscriptionStatus } = useSubscription();

    const bmarkFallback: BmarkData = {};

    const { data: bmarks = bmarkFallback } = useQuery("bmark", fetchBmarks, {
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
            queryClient.invalidateQueries("bmark");
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

    const { mutate } = useMutation((postId: string) => addBookmark(postId), {
        onSuccess: (data) => {
            console.log("bookmark added");
            toast({ title: "Bookmark added", status: "success", duration: 3000, isClosable: true });
            queryClient.invalidateQueries("bmark");
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

    const handleBookmark = (postId: string) => {
        if (!isLogged) {
            return navigate("/login");
        }
        if (!subscriptionStatus) {
            return navigate("/subscription");
        }
        mutate(postId);
    };

    const { mutate: handleUnmark } = useMutation((postId: string) => deleteBookmark(postId), {
        onSuccess: (data) => {
            console.log("bookmark deleted");
            toast({ title: "Bookmark deleted", status: "success", duration: 3000, isClosable: true });
            queryClient.invalidateQueries("bmark");
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

    return { bmarks, handleDelete, handleBookmark, handleUnmark };
};
