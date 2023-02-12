import { NavigateFunction } from "react-router-dom";
import axios from "axios";

export const handleAuthenticationError = (setError: React.Dispatch<React.SetStateAction<string>>, errorMsg: string, navigate: NavigateFunction): void => {
    if (errorMsg === "Error: Please enter a password with only numbers and text and atleast 8 characters") {
        setError(errorMsg);
    } else if (errorMsg === "Error: Email id is not valid") {
        setError(errorMsg);
    } else if (errorMsg === "Error: User does not exist") {
        setError(errorMsg);
    } else if (errorMsg === "Error: Passwords do not match") {
        setError(errorMsg);
    } else if (errorMsg === "Error: User with this email id already exists") {
        setError(errorMsg);
    } else if (errorMsg === "Error: Invalid confirm password") {
        setError(errorMsg);
    } else {
        navigate("/somethingWentWrong");
    }
};

export const handleUserDataError = (errorMsg: string, navigate: NavigateFunction): void => {
    if (errorMsg === "JsonWebTokenError: invalid token" || errorMsg === "TokenExpiredError: jwt expired") {
        localStorage.removeItem("token");
        axios.defaults.headers.common["Authorization"] = null;
        window.location.reload();
        navigate("/login");
    } else {
        navigate("/somethingWentWrong");
    }
};

export const handleGetPostError = (setLoading: React.Dispatch<React.SetStateAction<boolean>>, setRefreshPost: React.Dispatch<React.SetStateAction<boolean>>): void => {
    setLoading(false);
    setRefreshPost(true);
};
