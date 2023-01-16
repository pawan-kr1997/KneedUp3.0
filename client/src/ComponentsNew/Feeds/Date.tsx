import React from "react";
import { DateContainer } from "../../Styles/feeds.styles";
import { ChildrenProps } from "../../TscTypes/TscTypes";

const Date: React.FC<ChildrenProps> = ({ children }) => {
    return <DateContainer>{children}</DateContainer>;
};

export default Date;
