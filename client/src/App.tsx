import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./Pages/Home";
import { CategoryListProvider } from "./Contexts/CategoryList";

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
        </Routes>
    );
};

export default App;
