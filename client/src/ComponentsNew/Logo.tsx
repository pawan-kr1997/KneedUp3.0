import React from "react";
import { Typography } from "@mui/material";

import { LogoProps } from "../TscTypes/TscTypes";

const Logo: React.FC<LogoProps> = ({ variant }) => {
    return (
        <Typography variant="h6" component="span" p={2} sx={{ color: "white", fontWeight: "bolder", fontSize: "1.5rem" }}>
            <span style={variant === "dark" ? { color: "black" } : { color: "white" }}>Kneed</span>
            <span style={{ color: "#1a73e8" }}>Up</span>
            <span style={{ color: "#B60000" }}>.</span>
        </Typography>
    );
};

export default Logo;
