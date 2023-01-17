import { NavigateFunction } from "react-router-dom";

export type GetFeedUrlAndHeaderReturnType = {
    url: string;
    headerText: string;
};

export type LoginDataType = {
    emailId: string;
    password: string;
};

export type PostApiDataType = LoginDataType;

export type HandleLoginParamTypes = {
    e: React.FormEvent<EventTarget>;
    navigate: NavigateFunction;
    data: LoginDataType;
    setError: React.Dispatch<React.SetStateAction<string>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
