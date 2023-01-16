import { Tooltip } from "@mui/material";
import React from "react";
import { Icon } from "../Styles/home.styles";
import { FeatureIconProps } from "../TscTypes/TscTypes";

const FeatureIcon: React.FC<FeatureIconProps> = ({ icon, title }) => {
    return (
        <div>
            <Tooltip title={title} placement="bottom">
                <Icon>{icon}</Icon>
            </Tooltip>
        </div>
    );
};

export default FeatureIcon;
