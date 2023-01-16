import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { CategoryListProvider } from "./Contexts/CategoryList";
import Home from "./Pages/Home";
import Bookmark from "./Pages/Bookmark";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Reset from "./Pages/Reset";
import PreReset from "./Pages/PreReset";

const App = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <CategoryListProvider>
                        <Home />
                    </CategoryListProvider>
                }
            ></Route>
            <Route path="/bookmark" element={<Bookmark />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
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
