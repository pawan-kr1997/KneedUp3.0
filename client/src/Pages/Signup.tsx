import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField as MuiTextField } from "@mui/material";
import { Alert, Button, Container, Progress } from "../Styles/helper.styles";
import NavBar from "../ComponentsNew/NavBar";
import { handleSignup } from "../Functions/axiosFunctions";
import { LoginBtn } from "../ComponentsNew/Buttons/Buttons";

const Signup = () => {
    const navigate = useNavigate();

    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    return (
        <>
            <NavBar variant="secondary" button={<LoginBtn variant="contained" />} />
            <Container>
                <MuiTextField
                    fullWidth
                    label="Email address"
                    id="outlined-size-small"
                    size="small"
                    type="email"
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
                <MuiTextField
                    fullWidth
                    label="Confirm password"
                    id="outlined-size-small"
                    size="small"
                    onChange={(event) => {
                        setConfirmPassword(event.target.value);
                        setError("");
                    }}
                />
                {error && (
                    <Alert variant="outlined" severity="error">
                        {error}
                    </Alert>
                )}
                <Button variant="contained" onClick={(e) => handleSignup({ e, navigate, data: { emailId, password, confirmPassword }, setError, setLoading })}>
                    {loading ? <Progress size={20} /> : "Create new user"}
                </Button>
            </Container>
        </>
    );
};

export default Signup;
