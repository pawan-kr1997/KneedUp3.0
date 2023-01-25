import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SidebarContainer } from "../../Styles/home.styles";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LogoutIcon from "@mui/icons-material/Logout";
import FeatureIcon from "./FeatureIcon";
import { SidebarProps } from "../../TscTypes/TscTypes";
import { useAuth } from "../../Contexts/Auth";

const Sidebar: React.FC<SidebarProps> = ({ onIsOpen }) => {
    const navigate = useNavigate();
    const { isLogged } = useAuth();
    return (
        <SidebarContainer>
            <FeatureIcon icon={<PeopleOutlineIcon />} title="About us" onIconClick={() => navigate("/aboutUs")} />
            <FeatureIcon icon={<StarBorderIcon />} title="Follow sites" onIconClick={() => onIsOpen(true)} />
            <FeatureIcon icon={<BookmarkBorderIcon />} title="Bookmark" onIconClick={() => navigate("/bookmark")} />
            <FeatureIcon icon={<CreditCardIcon />} title="Subscription" onIconClick={() => navigate("/subscription")} />
        </SidebarContainer>
    );
};

export default Sidebar;
