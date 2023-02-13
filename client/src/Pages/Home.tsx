import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import CategorySidebar from "../ComponentsNew/CategoryBar/CategoryBar";
import Checklist from "../ComponentsNew/Checklist/Checklist";
import Feeds from "../ComponentsNew/Feeds/Feeds";
import NavBar from "../ComponentsNew/NavBar";
import Sidebar from "../ComponentsNew/Sidebar/Sidebar";
import ErrorFallback from "../ErrorBoundary/ErrorFallback";
import { useInitFeeds } from "../Hooks/useInitFeeds";
import { ContentSection } from "../Styles/home.styles";
import { ErrorBoundary } from "react-error-boundary";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    useInitFeeds();

    return (
        <>
            <NavBar variant="primary" />
            <Checklist isOpen={isOpen} onIsOpen={setIsOpen} />
            <ContentSection>
                <Sidebar onIsOpen={setIsOpen} />
                {/* <ErrorBoundary FallbackComponent={ErrorFallback}> */}
                <Box sx={{ width: "min(50rem, 100vw)" }}>
                    <Outlet />
                </Box>
                <CategorySidebar />
                {/* </ErrorBoundary> */}
            </ContentSection>
        </>
    );
};

export default Home;
