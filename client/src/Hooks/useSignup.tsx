import { useMutation } from "react-query";
import { signupUser } from "../Functions/axiosFunctions";
import { signupUserParams } from "../TscTypes/Functions";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { handleAuthenticationError } from "../Functions/errorFunction";
import { useToast } from "@chakra-ui/react";

export const useSignup = (setError: React.Dispatch<React.SetStateAction<string>>) => {
    const navigate = useNavigate();
    const toast = useToast();

    const { mutate: handleSignup } = useMutation(({ emailId, password, confirmPassword }: signupUserParams) => signupUser({ emailId, password, confirmPassword }), {
        onSuccess: (data) => {
            navigate("/login");
            toast({ title: "New user created", status: "success", duration: 3000, isClosable: true });
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

    return handleSignup;
};
