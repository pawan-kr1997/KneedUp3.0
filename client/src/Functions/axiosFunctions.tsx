import axios from "axios";
import { LoginDataType } from "../TscTypes/Functions";
import { handleAuthenticationError } from "./errorFunction";
import { NavigateFunction } from "react-router-dom";

export const handlePostApi = async (e: React.FormEvent<EventTarget>, link: string, data: LoginDataType) => {
    try {
        const cancelToken = axios.CancelToken.source();
        const response = await axios.post(link, { ...data }, { cancelToken: cancelToken.token });
        console.log(response);
    } catch (err) {
        console.log(err);
    }
};

export const handleLogin = async (
    e: React.FormEvent<EventTarget>,
    navigate: NavigateFunction,
    link: string,
    data: LoginDataType,
    setError: React.Dispatch<React.SetStateAction<string>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
    console.log("clicked");
    try {
        const cancelToken = axios.CancelToken.source();
        const response = await axios.post(link, { ...data }, { cancelToken: cancelToken.token });
        setLoading(true);
        localStorage.setItem("token", response.data.token);
        axios.defaults.headers.common["Authorization"] = response.data.token;

        navigate("/");
    } catch (err) {
        console.log(err);
        if (axios.isAxiosError(err)) {
            console.log(err);
            setLoading(false);
            handleAuthenticationError(setError, err.response?.data, navigate);
        }
    }
};
