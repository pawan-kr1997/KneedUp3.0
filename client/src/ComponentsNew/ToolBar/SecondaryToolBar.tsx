import { Button as MuiButton, ListItemIcon, Typography } from "@mui/material";
import React from "react";
import { LinkContainer, LinkText, LogoContainer, SecondaryToolbar } from "../../Styles/home.styles";
import HomeIcon from "@mui/icons-material/Home";
import Logo from "../Logo";
import { useNavigate } from "react-router-dom";
import { SecondaryToolbarProps } from "../../TscTypes/TscTypes";

const SecondaryToolBar: React.FC<SecondaryToolbarProps> = ({ btn }) => {
    const navigate = useNavigate();

    return (
        <SecondaryToolbar>
            <LogoContainer>
                <Logo variant="light" />
                <LinkContainer onClick={() => navigate("/")}>
                    <HomeIcon />
                    <LinkText>Home</LinkText>
                </LinkContainer>
            </LogoContainer>
            {btn}
        </SecondaryToolbar>
    );
};

export default SecondaryToolBar;
