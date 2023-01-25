import { Tooltip } from "@mui/material";
import React from "react";
import { Icon } from "../../Styles/home.styles";
import { FeatureIconProps } from "../../TscTypes/TscTypes";

const FeatureIcon: React.FC<FeatureIconProps> = ({ icon, title, onIconClick }) => {
    return (
        <>
            <Tooltip title={title} placement="bottom">
                <Icon onClick={onIconClick}>{icon}</Icon>
            </Tooltip>
        </>
    );
};

export default FeatureIcon;
