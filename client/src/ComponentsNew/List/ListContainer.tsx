import React from "react";
import { Box as MuiBox } from "@mui/material";
import { ListContainerProps } from "../../TscTypes/TscTypes";
import ListItem from "./ListItem";

const ListContainer: React.FC<ListContainerProps> = ({ children, heading }) => {
    return (
        <MuiBox mb={2}>
            <ListItem color="black" hoverColor="transparent" weight="bold" size="1rem">
                {heading}
            </ListItem>
            {children}
        </MuiBox>
    );
};

export default ListContainer;
