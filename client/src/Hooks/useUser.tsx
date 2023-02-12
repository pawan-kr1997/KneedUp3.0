import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { updateCategory } from "../Functions/axiosFunctions";
import { CategoryListProps } from "../TscTypes/TscTypes";
import { useToast } from "@chakra-ui/react";
import { handleUserDataError } from "../Functions/errorFunction";

export const useUser = (onIsOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const toast = useToast();

    const { mutate: updateCategoryList } = useMutation(({ news, president, pib, prs }: CategoryListProps) => updateCategory({ news, president, pib, prs }), {
        onSuccess: (data) => {
            queryClient.invalidateQueries(["categoryList"]);
            onIsOpen(false);
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

    return { updateCategoryList };
};
