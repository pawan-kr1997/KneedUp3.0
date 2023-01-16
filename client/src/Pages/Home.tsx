import CategorySidebar from "../ComponentsNew/CategoryBar";
import Feeds from "../ComponentsNew/Feeds/Feeds";
import NavBar from "../ComponentsNew/NavBar";
import Sidebar from "../ComponentsNew/Sidebar";
import { ContentSection } from "../Styles/home.styles";

const Home = () => {
    return (
        <>
            <NavBar variant="primary" />
            <ContentSection>
                <Sidebar />
                <Feeds />
                <CategorySidebar />
            </ContentSection>
        </>
    );
};

export default Home;
