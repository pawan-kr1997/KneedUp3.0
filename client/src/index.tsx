import React from "react";
import axios from "axios";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";

import { theme } from "./Styles/theme.styles";
import { ThemeProvider } from "@mui/material";
import { AuthProvider } from "./Contexts/Auth";
import { queryClient } from "./React-Query/QueryClient";

axios.defaults.baseURL = "http://localhost:8090";
axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");

axios.interceptors.request.use(
    (request) => {
        return request;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
                <ReactQueryDevtools />
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>
);
