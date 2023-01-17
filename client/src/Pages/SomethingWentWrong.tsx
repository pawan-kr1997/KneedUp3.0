import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography as MuiTypography, Button as MuiButton } from "@mui/material";
import NavBar from "../ComponentsNew/NavBar";
import { ExceptionContainer } from "../Styles/helper.styles";

const SomethingWentWrong = () => {
    const navigate = useNavigate();
    return (
        <>
            <NavBar variant="primary" />
            <ExceptionContainer>
                <MuiTypography variant="h5" sx={{ fontWeight: "bold" }}>
                    Err something went wrong
                </MuiTypography>
                <MuiTypography>Network error migh have occured. Please refresh you page.</MuiTypography>
                <MuiButton variant="contained" onClick={() => navigate("/")}>
                    Refresh page
                </MuiButton>
            </ExceptionContainer>
        </>
    );
};

export default SomethingWentWrong;
