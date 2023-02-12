import { useQueryClient, useMutation } from "react-query";
import { loginUser } from "../Functions/axiosFunctions";
import { loginUserParams } from "../TscTypes/Functions";
import axios from "axios";
import { handleAuthenticationError } from "../Functions/errorFunction";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/Auth";
import { useToast } from "@chakra-ui/react";

export const useLogin = (setError: React.Dispatch<React.SetStateAction<string>>) => {
    const { setIsLogged } = useAuth();
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const toast = useToast();

    const { mutate: handleLogin } = useMutation(({ emailId, password }: loginUserParams) => loginUser({ emailId, password }), {
        onSuccess: (data) => {
            localStorage.setItem("token", data.token);
            axios.defaults.headers.common["Authorization"] = data.token;
            queryClient.invalidateQueries(["categoryList"]);
            queryClient.invalidateQueries(["subsStatus"]);
            setIsLogged(true);
            toast({ title: "User logged", status: "success", duration: 3000, isClosable: true });
            navigate("/");
        },
        onError: (error) => {
            console.log(error);
            if (axios.isAxiosError(error)) {
                handleAuthenticationError(setError, error.response?.data, navigate);
            } else {
                navigate("/somethingWentWrong");
            }
        },
    });

    return handleLogin;
};
