import { useQuery } from "react-query";
import { fetchDueDate } from "../Functions/axiosFunctions";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { handleUserDataError } from "../Functions/errorFunction";

export const useSubs = () => {
    const toast = useToast();
    const navigate = useNavigate();
    const fallback = "";
    const { data: dueDate = fallback } = useQuery("subsDate", fetchDueDate, {
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

    return { dueDate };
};
