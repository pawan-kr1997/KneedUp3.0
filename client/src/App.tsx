import { Routes, Route } from "react-router-dom";
import { CategoryListProvider } from "./Contexts/CategoryList";
import Home from "./Pages/Home";
import Bookmark from "./Pages/Bookmark";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Reset from "./Pages/Reset";
import PreReset from "./Pages/PreReset";
import SomethingWentWrong from "./Pages/SomethingWentWrong";
import PageNotFound from "./Pages/PageNotFound";
import { AuthProtectedRoute, HomeProvider, SubsProtectedRoute } from "./HOC/ProtectedRoutes";
import Feeds from "./ComponentsNew/Feeds/Feeds";
import Subscription from "./Pages/Subscription/Subscription";

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

            <Route
                element={
                    <HomeProvider>
                        <SubsProtectedRoute />
                    </HomeProvider>
                }
            >
                <Route path="/bookmark" element={<Bookmark />} />
            </Route>

            <Route
                element={
                    <HomeProvider>
                        <AuthProtectedRoute />
                    </HomeProvider>
                }
            >
                <Route path="/subscription" element={<Subscription />} />
            </Route>

            <Route
                path="/login"
                element={
                    <HomeProvider>
                        <Login />
                    </HomeProvider>
                }
            />
            <Route
                path="/signup"
                element={
                    <HomeProvider>
                        <Signup />
                    </HomeProvider>
                }
            ></Route>
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
