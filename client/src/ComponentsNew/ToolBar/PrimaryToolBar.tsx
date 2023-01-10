import React from "react";

import MenuIcon from "@mui/icons-material/Menu";

import Logo from "../Logo";
import { NavIcon, PrimaryToolbar } from "../../Styles/home.styles";
import { PrimaryToolbarProps } from "../../TscTypes/TscTypes";

const PrimaryToolBar: React.FC<PrimaryToolbarProps> = ({ onIsDrawerOpen }) => {
    return (
        <PrimaryToolbar>
            <Logo variant="light" />
            <NavIcon onClick={() => onIsDrawerOpen(true)}>
                <MenuIcon />
            </NavIcon>
        </PrimaryToolbar>
    );
};

export default PrimaryToolBar;
