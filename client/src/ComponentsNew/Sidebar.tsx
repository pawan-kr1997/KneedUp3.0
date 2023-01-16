import React from "react";
import { SidebarContainer } from "../Styles/home.styles";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import FeatureIcon from "./FeatureIcon";

const Sidebar = () => {
    return (
        <SidebarContainer>
            <FeatureIcon icon={<StarBorderIcon />} title="Follow sites" />
            <FeatureIcon icon={<PeopleOutlineIcon />} title="About us" />
            <FeatureIcon icon={<BookmarkBorderIcon />} title="Bookmark" />
            <FeatureIcon icon={<CreditCardIcon />} title="Subscription" />
        </SidebarContainer>
    );
};

export default Sidebar;
