import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { CategoryListProvider } from "./Contexts/CategoryList";
import { AuthProvider } from "./Contexts/Auth";
import Home from "./Pages/Home";
import Bookmark from "./Pages/Bookmark";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Reset from "./Pages/Reset";
import PreReset from "./Pages/PreReset";
import SomethingWentWrong from "./Pages/SomethingWentWrong";
import PageNotFound from "./Pages/PageNotFound";
import { HomeProvider, ProtectedRoute } from "./HOC/ProtectedRoutes";
import Feeds from "./ComponentsNew/Feeds/Feeds";

const App = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <HomeProvider>
                        <Home />
                    </HomeProvider>
                }
            >
                <Route path="/:category" element={<Feeds />} />
            </Route>

            {/* <Route
                path="/"
                element={
                    <HomeProvider>
                        <Home />
                    </HomeProvider>
                }
            /> */}
            {/* <Route
                path="/bookmark"
                element={
                    <AuthProvider>
                        <ProtectedRoute path="/bookmark" element={<Bookmark />} />
                    </AuthProvider>
                }
            /> */}

            <Route
                element={
                    <HomeProvider>
                        <ProtectedRoute />
                    </HomeProvider>
                }
            >
                <Route path="/bookmark" element={<Bookmark />} />
            </Route>

            <Route
                path="/login"
                element={
                    <HomeProvider>
                        <Login />
                    </HomeProvider>
                }
            />
            <Route path="/signup" element={<Signup />}></Route>
            <Route
                path="/somethingWentWrong"
                element={
                    <CategoryListProvider>
                        <SomethingWentWrong />
                    </CategoryListProvider>
                }
            ></Route>
            <Route
                path="/pageNotFound"
                element={
                    <CategoryListProvider>
                        <PageNotFound />
                    </CategoryListProvider>
                }
            ></Route>
            <Route path="/reset/:resetToken" element={<Reset />}></Route>
            <Route path="/reset" element={<PreReset />}></Route>
            <Route
                path="/aboutUs"
                element={
                    <CategoryListProvider>
                        <About />
                    </CategoryListProvider>
                }
            ></Route>
        </Routes>
    );
};

export default App;
