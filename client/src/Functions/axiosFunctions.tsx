import axios from "axios";
import { HandleLoginParamTypes, HandleSignupParamTypes, PostApiDataType } from "../TscTypes/Functions";
import { handleAuthenticationError } from "./errorFunction";
import { handleInitNavigation } from "./navigation";

export const postApi = async (link: string, data: PostApiDataType) => {
    const cancelToken = axios.CancelToken.source();
    const response = await axios.post(link, { ...data }, { cancelToken: cancelToken.token });
    return response.data;
};

export const handleLogin = async ({ e, navigate, data, setError, setLoading, setIsLogged, list }: HandleLoginParamTypes) => {
    try {
        e.preventDefault();
        const userData = await postApi("/login", { ...data });

        localStorage.setItem("token", userData.token);
        axios.defaults.headers.common["Authorization"] = userData.token;
        setLoading(true);
        setIsLogged(true);
        handleInitNavigation(navigate, list);
        // navigate("/");

        // window.location.reload();
    } catch (err) {
        console.log(err);
        if (axios.isAxiosError(err)) {
            setLoading(false);
            handleAuthenticationError(setError, err.response?.data, navigate);
        }
    }
};

export const handleSignup = async ({ e, navigate, data, setError, setLoading }: HandleSignupParamTypes) => {
    try {
        e.preventDefault();
        await postApi("/signup", { ...data });
        setLoading(true);
        navigate("/login");
    } catch (err) {
        console.log(err);
        if (axios.isAxiosError(err)) {
            setLoading(false);
            handleAuthenticationError(setError, err.response?.data, navigate);
        }
    }
};
