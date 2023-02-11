import axios from "axios";
import { signupUserParams, loginUserParams, fetchFeedsParams } from "../TscTypes/Functions";
import { CategoryListProps } from "../TscTypes/TscTypes";

export const loginUser = async ({ emailId, password }: loginUserParams) => {
    const { data } = await axios.post("/login", { emailId, password });
    // console.log(data);
    return data;
};

export const signupUser = async ({ emailId, password, confirmPassword }: signupUserParams) => {
    const { data } = await axios.post("/signup", { emailId, password, confirmPassword });
    // console.log(data);
    return data;
};

export const fetchCategoryList = async () => {
    const { data } = await axios.get("/feeds/category");
    // console.log(data);
    return data.category;
};

export const updateCategory = async ({ news, president, pib, prs }: CategoryListProps) => {
    const { data } = await axios.post("/feeds/category", {
        News: news,
        President: president,
        Pib: pib,
        Prs: prs,
    });

    // console.log(data);
    return data;
};

export const fetchBookmarks = async () => {
    const { data } = await axios.get("/bookmark");
    // console.log(data);
    return data.bookmark;
};

export const fetchFeeds = async (url: string) => {
    const { data } = await axios.get(url);
    // console.log(data);
    return data.feeds;
};

export const deleteBookmark = async (postId: string) => {
    const { data } = await axios.get("/postUnmark/" + postId);
    // console.log("delete bookmark: " + data.user);
    return data.user.bookmark;
};

export const addBookmark = async (postId: string) => {
    const { data } = await axios.get("/postBookmark/" + postId);
    // console.log("add bookmark: " + data.user);
    return data.user.bookmark;
};

export const fetchSubscriptionStatus = async () => {
    const { data } = await axios.get("/subscriptionStatus");
    // console.log(data);
    return data.status;
};

export const fetchDueDate = async () => {
    const { data } = await axios.get("/subscriptionStatus");
    // console.log(data);
    return data.data;
};
