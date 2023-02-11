import { useState } from "react";
import { TextField as MuiTextField } from "@mui/material";
import { Alert, Button, Container } from "../Styles/helper.styles";
import NavBar from "../ComponentsNew/NavBar";
import { LoginBtn } from "../ComponentsNew/Buttons/Buttons";
import { useSignup } from "../Hooks/useSignup";

const Signup = () => {
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignup = useSignup(setError);

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
                <Button variant="contained" disabled={!emailId || !password || !confirmPassword} onClick={() => handleSignup({ emailId, password, confirmPassword })}>
                    Create new user
                </Button>
            </Container>
        </>
    );
};

export default Signup;
