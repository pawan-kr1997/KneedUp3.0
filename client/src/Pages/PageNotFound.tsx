import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography as MuiTypography, Button as MuiButton } from "@mui/material";
import NavBar from "../ComponentsNew/NavBar";
import { ExceptionContainer } from "../Styles/helper.styles";

const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <>
            <NavBar variant="primary" />
            <ExceptionContainer>
                <MuiTypography variant="h5" sx={{ fontWeight: "bold" }}>
                    Page Not Found
                </MuiTypography>
                <MuiTypography>Invalid route. Please go back to home</MuiTypography>
                <MuiButton variant="contained" onClick={() => navigate("/newsOnAir_National")}>
                    Back to home
                </MuiButton>
            </ExceptionContainer>
        </>
    );
};

export default PageNotFound;
