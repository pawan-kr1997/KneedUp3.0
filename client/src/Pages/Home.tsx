import { useState } from "react";
import { Outlet } from "react-router-dom";
import CategorySidebar from "../ComponentsNew/CategoryBar/CategoryBar";
import Checklist from "../ComponentsNew/Checklist/Checklist";
import Feeds from "../ComponentsNew/Feeds/Feeds";
import NavBar from "../ComponentsNew/NavBar";
import Sidebar from "../ComponentsNew/Sidebar/Sidebar";
import { useInitFeeds } from "../Hooks/useInitFeeds";
import { ContentSection } from "../Styles/home.styles";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    useInitFeeds();

    return (
        <>
            <NavBar variant="primary" />
            <Checklist isOpen={isOpen} onIsOpen={setIsOpen} />
            <ContentSection>
                <Sidebar onIsOpen={setIsOpen} />
                <Outlet />
                <CategorySidebar />
            </ContentSection>
        </>
    );
};

export default Home;
