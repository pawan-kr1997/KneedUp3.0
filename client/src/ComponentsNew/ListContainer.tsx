import React from "react";
import { ListContainerProps } from "../TscTypes/TscTypes";
import ListItem from "./ListItem";

const ListContainer: React.FC<ListContainerProps> = ({ children, heading }) => {
    return (
        <>
            <ListItem color="black" hoverColor="transparent" weight="bold" size="0.8rem">
                {heading}
            </ListItem>
            {children}
        </>
    );
};

export default ListContainer;
