import { useQuery } from "react-query";
import { fetchDueDate } from "../Functions/axiosFunctions";

export const useSubs = () => {
    const fallback = "";
    const { data: dueDate = fallback } = useQuery("subsDate", fetchDueDate, {
        onError: (err) => {
            console.log(err);
        },
    });

    return { dueDate };
};
