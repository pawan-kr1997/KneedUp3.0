import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField as MuiTextField, Snackbar as MuiSnackbar, CircularProgress as MuiCircularProgress } from "@mui/material";
import { Alert, Button, Container, Progress } from "../Styles/helper.styles";
import NavBar from "../ComponentsNew/NavBar";
import { handleLogin, handlePostApi } from "../Functions/axiosFunctions";

const Login = () => {
    const navigate = useNavigate();

    const [error, setError] = useState("");
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    return (
        <>
            <NavBar variant="secondary" />
            <Container>
                <MuiTextField
                    fullWidth
                    label="Email address"
                    id="outlined-size-small"
                    size="small"
                    onChange={(event) => {
                        setEmailId(event.target.value);
                        setError("");
                    }}
                />
                <MuiTextField
                    fullWidth
                    label="Password"
                    id="outlined-size-small"
                    size="small"
                    onChange={(event) => {
                        setPassword(event.target.value);
                        setError("");
                    }}
                />
                {error && (
                    <Alert variant="outlined" severity="error">
                        {error}
                    </Alert>
                )}
                <Button variant="contained" onClick={(e) => handleLogin(e, navigate, "/login", { emailId, password }, setError, setLoading)}>
                    {loading ? <Progress size={20} /> : "Login"}
                </Button>
            </Container>
        </>
    );
};

export default Login;
