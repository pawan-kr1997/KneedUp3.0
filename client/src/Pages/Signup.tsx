import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField as MuiTextField } from "@mui/material";
import { Alert, Button, Container } from "../Styles/helper.styles";
import NavBar from "../ComponentsNew/NavBar";
import { signupUser } from "../Functions/axiosFunctions";
import { LoginBtn } from "../ComponentsNew/Buttons/Buttons";
import { signupUserParams } from "../TscTypes/Functions";
import { useMutation } from "react-query";
import axios from "axios";

const Signup = () => {
    const navigate = useNavigate();

    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const { mutate: handleSignup } = useMutation(({ emailId, password, confirmPassword }: signupUserParams) => signupUser({ emailId, password, confirmPassword }), {
        onSuccess: (data) => {
            navigate("/login");
        },

        onError: (error) => {
            console.log(error);
            if (axios.isAxiosError(error)) {
                setError(error.response?.data);
            } else {
                navigate("/somethingWentWrong");
            }
        },
    });

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
