import React from "react";
import { List as MuiList } from "@mui/material";

import { ChildrenProps } from "../../TscTypes/TscTypes";

const List: React.FC<ChildrenProps> = ({ children }) => {
    return <MuiList disablePadding>{children}</MuiList>;
};

export default List;
