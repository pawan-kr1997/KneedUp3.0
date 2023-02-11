import { useState } from "react";
import { TextField as MuiTextField } from "@mui/material";
import NavBar from "../ComponentsNew/NavBar";
import { SignupBtn } from "../ComponentsNew/Buttons/Buttons";
import { Alert, Button, Container } from "../Styles/helper.styles";
import { useLogin } from "../Hooks/useLogin";

const Login = () => {
    const [error, setError] = useState("");
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = useLogin(setError);

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
                <Button variant="contained" disabled={!emailId || !password} onClick={() => handleLogin({ emailId, password })}>
                    Login
                </Button>
            </Container>
        </>
    );
};

export default Login;
