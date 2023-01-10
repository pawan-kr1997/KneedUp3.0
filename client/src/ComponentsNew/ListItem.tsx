import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ListItem as MuiListItem, ListItemButton as MuiListItemButton, ListItemText as MuiListItemText } from "@mui/material";

import { ListItemIcon } from "../Styles/home.styles";

import { NavListItemProps } from "../TscTypes/TscTypes";

const ListItem: React.FC<NavListItemProps> = ({ children, to, icon }) => {
    const { pathname } = useLocation();

    return (
        <MuiListItem disablePadding>
            <MuiListItemButton component={NavLink} to={to} selected={to === pathname}>
                <ListItemIcon>{icon}</ListItemIcon>
                <MuiListItemText primary={children} />
            </MuiListItemButton>
        </MuiListItem>
    );
};

export default ListItem;
