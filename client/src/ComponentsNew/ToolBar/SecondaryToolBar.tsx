import { Button as MuiButton, ListItemIcon, Typography } from "@mui/material";
import React from "react";
import { LinkContainer, LinkText, LogoContainer, SecondaryToolbar } from "../../Styles/home.styles";
import HomeIcon from "@mui/icons-material/Home";
import Logo from "../Logo";
import { Link } from "react-router-dom";

const SecondaryToolBar: React.FC = () => {
    return (
        <SecondaryToolbar>
            <LogoContainer>
                <Logo variant="light" />
                <LinkContainer href="/hometest">
                    <HomeIcon />
                    <LinkText>Home</LinkText>
                </LinkContainer>
            </LogoContainer>
            <MuiButton variant="contained">Login</MuiButton>
        </SecondaryToolbar>
    );
};

export default SecondaryToolBar;
