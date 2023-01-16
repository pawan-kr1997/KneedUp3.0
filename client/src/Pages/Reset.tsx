import React from "react";
import { TextField as MuiTextField } from "@mui/material";
import { Alert, Button, Container } from "../Styles/helper.styles";
import NavBar from "../ComponentsNew/NavBar";

const Reset = () => {
    return (
        <>
            <NavBar variant="secondary" />
            <Container>
                <MuiTextField fullWidth label="Email address" id="outlined-size-small" size="small" />
                <MuiTextField fullWidth label="New Password" id="outlined-size-small" size="small" />
                <MuiTextField fullWidth label="Confirm new password" id="outlined-size-small" size="small" />
                <Alert variant="outlined" severity="error">
                    This is an error alert — check it out!
                </Alert>
                <Button variant="contained">Reset password</Button>
            </Container>
        </>
    );
};

export default Reset;
