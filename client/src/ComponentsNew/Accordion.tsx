import React, { useState } from "react";
import { Collapse as MuiCollapse, ListItemButton as MuiListItemButton, ListItemText as MuiListItemText } from "@mui/material";

import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";

import { ListItemIcon } from "../Styles/home.styles";
import List from "./List/List";

import { NavAccordionProps } from "../TscTypes/TscTypes";

const Accordion: React.FC<NavAccordionProps> = ({ children, category, icon }) => {
    const [open, setOpen] = useState(false);
    return (
        <List>
            <MuiListItemButton onClick={() => setOpen(!open)}>
                <ListItemIcon>{icon}</ListItemIcon>
                <MuiListItemText primary={category} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </MuiListItemButton>
            <MuiCollapse in={open} timeout="auto" unmountOnExit>
                {children}
            </MuiCollapse>
        </List>
    );
};

export default Accordion;
