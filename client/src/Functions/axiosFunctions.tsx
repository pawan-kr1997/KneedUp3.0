import axios from "axios";
import { HandleLoginParamTypes, PostApiDataType } from "../TscTypes/Functions";
import { handleAuthenticationError } from "./errorFunction";

export const postApi = async (link: string, data: PostApiDataType) => {
    const cancelToken = axios.CancelToken.source();
    const response = await axios.post(link, { ...data }, { cancelToken: cancelToken.token });
    return response.data;
};

export const handleLogin = async ({ e, navigate, data, setError, setLoading }: HandleLoginParamTypes) => {
    try {
        e.preventDefault();
        const userData = await postApi("/login", { ...data });

        localStorage.setItem("token", userData.token);
        axios.defaults.headers.common["Authorization"] = userData.token;

        setLoading(true);
        navigate("/");
    } catch (err) {
        console.log(err);
        if (axios.isAxiosError(err)) {
            setLoading(false);
            handleAuthenticationError(setError, err.response?.data, navigate);
        }
    }
};
