import { useState } from "react";
import CategorySidebar from "../ComponentsNew/CategoryBar/CategoryBar";
import Checklist from "../ComponentsNew/Checklist/Checklist";
import Feeds from "../ComponentsNew/Feeds/Feeds";
import NavBar from "../ComponentsNew/NavBar";
import Sidebar from "../ComponentsNew/Sidebar/Sidebar";
import { ContentSection } from "../Styles/home.styles";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <NavBar variant="primary" />
            <Checklist isOpen={isOpen} onIsOpen={setIsOpen} />
            <ContentSection>
                <Sidebar onIsOpen={setIsOpen} />
                <Feeds />
                <CategorySidebar />
            </ContentSection>
        </>
    );
};

export default Home;
