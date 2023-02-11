import { useMutation, useQueryClient } from "react-query";
import { updateCategory } from "../Functions/axiosFunctions";
import { CategoryListProps } from "../TscTypes/TscTypes";

export const useUser = (onIsOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
    const queryClient = useQueryClient();

    const { mutate: updateCategoryList } = useMutation(({ news, president, pib, prs }: CategoryListProps) => updateCategory({ news, president, pib, prs }), {
        onSuccess: (data) => {
            queryClient.invalidateQueries(["categoryList"]);
            onIsOpen(false);
        },
        onError: (err) => {
            console.log(err);
        },
    });

    return { updateCategoryList };
};
