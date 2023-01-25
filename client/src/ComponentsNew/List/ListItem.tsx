import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ListItem as MuiListItem, ListItemButton as MuiListItemButton, ListItemText as MuiListItemText } from "@mui/material";

import { ListItemIcon } from "../../Styles/home.styles";

import { NavListItemProps } from "../../TscTypes/TscTypes";

const ListItem: React.FC<NavListItemProps> = ({ children, to, icon, size = "1rem", color = "black", hoverColor = "	hsl(210, 79%, 96%)", weight = "normal", pl = "0rem" }) => {
    const { pathname } = useLocation();

    return (
        <MuiListItem
            disablePadding
            sx={{
                paddingLeft: pl,
                "& .css-10hburv-MuiTypography-root ": {
                    fontSize: size,
                    color: color,
                    fontWeight: weight,
                    lineHeight: ".1rem",
                    paddingLeft: pl,
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
