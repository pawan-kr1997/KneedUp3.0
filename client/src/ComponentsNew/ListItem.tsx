import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ListItem as MuiListItem, ListItemButton as MuiListItemButton, ListItemText as MuiListItemText } from "@mui/material";

import { ListItemIcon } from "../Styles/home.styles";

import { NavListItemProps } from "../TscTypes/TscTypes";

const ListItem: React.FC<NavListItemProps> = ({ children, to, icon, size = "0.8rem", color = "gray", hoverColor = "hsl(0,0%,90%)", weight = "normal" }) => {
    const { pathname } = useLocation();

    return (
        <MuiListItem
            disablePadding
            sx={{
                "& .css-10hburv-MuiTypography-root ": {
                    fontSize: size,
                    color: color,
                    fontWeight: weight,
                    lineHeight: ".1rem",
                },
                "& .css-16ac5r2-MuiButtonBase-root-MuiListItemButton-root:hover": {
                    backgroundColor: hoverColor,
                },
            }}
        >
            {to ? (
                <MuiListItemButton component={NavLink} to={to} selected={to === pathname}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <MuiListItemText primary={children} />
                </MuiListItemButton>
            ) : (
                <MuiListItemButton>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <MuiListItemText primary={children} />
                </MuiListItemButton>
            )}
        </MuiListItem>
    );
};

export default ListItem;
