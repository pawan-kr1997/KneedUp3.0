import type { CreateStandaloneToastReturn } from "@chakra-ui/toast";

export type GetFeedUrlAndHeaderReturnType = {
    url: string;
    headerText: string;
};

export type LoginDataType = {
    emailId: string;
    password: string;
};

export type SignupDataType = {
    emailId: string;
    password: string;
    confirmPassword: string;
};

export type PostApiDataType = LoginDataType | SignupDataType;

export type loginUserParams = {
    emailId: string;
    password: string;
};

export type signupUserParams = {
    emailId: string;
    password: string;
    confirmPassword: string;
};

export type fetchFeedsParams = {
    url: string;
};

export type handleDeleteParams = {
    postId: string;
    toast: CreateStandaloneToastReturn;
};
