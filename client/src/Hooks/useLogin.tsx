import { useQueryClient, useMutation } from "react-query";
import { loginUser } from "../Functions/axiosFunctions";
import { loginUserParams } from "../TscTypes/Functions";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/Auth";

export const useLogin = () => {
    const { setIsLogged } = useAuth();
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: handleLogin } = useMutation(({ emailId, password }: loginUserParams) => loginUser({ emailId, password }), {
        onSuccess: (data) => {
            localStorage.setItem("token", data.token);
            axios.defaults.headers.common["Authorization"] = data.token;
            queryClient.invalidateQueries(["categoryList"]);
            queryClient.invalidateQueries(["subsStatus"]);
            setIsLogged(true);
            navigate("/");
        },

        onError: (error) => {
            console.log(error);
            if (axios.isAxiosError(error)) {
                // setError(error.response?.data);
            } else {
                navigate("/somethingWentWrong");
            }
        },
    });
};
