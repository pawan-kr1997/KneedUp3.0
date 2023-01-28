import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField as MuiTextField } from "@mui/material";
import { Alert, Button, Container, Progress } from "../Styles/helper.styles";
import NavBar from "../ComponentsNew/NavBar";
import { handleLogin } from "../Functions/axiosFunctions";
import { SignupBtn } from "../ComponentsNew/Buttons/Buttons";
import { useAuth } from "../Contexts/Auth";
import { useCategoryList } from "../Contexts/CategoryList";

const Login = () => {
    const navigate = useNavigate();
    const { setIsLogged } = useAuth();
    const { list } = useCategoryList();

    const [error, setError] = useState("");
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    return (
        <>
            <NavBar variant="secondary" button={<SignupBtn variant="contained" />} />
            <Container>
                <MuiTextField
                    fullWidth
                    label="Email address"
                    id="email"
                    size="small"
                    onChange={(event) => {
                        setEmailId(event.target.value);
                        setError("");
                    }}
                />
                <MuiTextField
                    fullWidth
                    label="Password"
                    id="pwd"
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
                <Button variant="contained" disabled={!emailId || !password} onClick={(e) => handleLogin({ e, navigate, data: { emailId, password }, setError, setLoading, setIsLogged, list })}>
                    {loading ? <Progress size={20} /> : "Login"}
                </Button>
            </Container>
        </>
    );
};

export default Login;
