import React, { useState } from "react";
import { AppBar as MuiAppBar } from "@mui/material";

import PrimaryToolBar from "./ToolBar/PrimaryToolBar";
import SecondaryToolBar from "./ToolBar/SecondaryToolBar";

import { NavBarProps } from "../TscTypes/TscTypes";
import Drawer from "./Drawer";

const NavBar: React.FC<NavBarProps> = ({ variant, button }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <MuiAppBar position="fixed">
            {variant === "primary" ? (
                <>
                    <PrimaryToolBar onIsDrawerOpen={setIsDrawerOpen} />
                    <Drawer isDrawerOpen={isDrawerOpen} onIsDrawerOpen={setIsDrawerOpen} />
                </>
            ) : (
                <SecondaryToolBar btn={button} />
            )}
        </MuiAppBar>
    );
};

export default NavBar;
