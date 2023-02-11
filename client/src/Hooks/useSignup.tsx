import { useMutation } from "react-query";
import { signupUser } from "../Functions/axiosFunctions";
import { signupUserParams } from "../TscTypes/Functions";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useSignup = (setError: React.Dispatch<React.SetStateAction<string>>) => {
    const navigate = useNavigate();

    const { mutate: handleSignup } = useMutation(({ emailId, password, confirmPassword }: signupUserParams) => signupUser({ emailId, password, confirmPassword }), {
        onSuccess: (data) => {
            navigate("/login");
        },

        onError: (error) => {
            console.log(error);
            if (axios.isAxiosError(error)) {
                setError(error.response?.data);
            } else {
                navigate("/somethingWentWrong");
            }
        },
    });

    return handleSignup;
};
