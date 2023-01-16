import React from "react";
import { TextField as MuiTextField } from "@mui/material";
import { Alert, Button, Container } from "../Styles/helper.styles";
import NavBar from "../ComponentsNew/NavBar";

const Signup = () => {
    return (
        <>
            <NavBar variant="secondary" />
            <Container>
                <MuiTextField fullWidth label="Email address" id="outlined-size-small" size="small" />
                <MuiTextField fullWidth label="Password" id="outlined-size-small" size="small" />
                <MuiTextField fullWidth label="Confirm password" id="outlined-size-small" size="small" />
                <Alert variant="outlined" severity="error">
                    This is an error alert — check it out!
                </Alert>
                <Button variant="contained">Signup</Button>
            </Container>
        </>
    );
};

export default Signup;
