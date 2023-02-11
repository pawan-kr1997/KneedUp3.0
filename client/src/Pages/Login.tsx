import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField as MuiTextField } from "@mui/material";
import { useMutation } from "react-query";
import axios from "axios";

import NavBar from "../ComponentsNew/NavBar";
import { loginUser } from "../Functions/axiosFunctions";
import { SignupBtn } from "../ComponentsNew/Buttons/Buttons";
import { loginUserParams } from "../TscTypes/Functions";
import { Alert, Button, Container } from "../Styles/helper.styles";
import { useAuth } from "../Contexts/Auth";
import { useQueryClient } from "react-query";

const Login = () => {
    const navigate = useNavigate();
    const { setIsLogged } = useAuth();
    const [error, setError] = useState("");
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const queryClient = useQueryClient();

    const { mutate: handleLogin } = useMutation(({ emailId, password }: loginUserParams) => loginUser({ emailId, password }), {
        onSuccess: (data) => {
            localStorage.setItem("token", data.token);
            axios.defaults.headers.common["Authorization"] = data.token;
            queryClient.invalidateQueries(["categoryList"]);
            queryClient.invalidateQueries(["subsStatus"]);
            setIsLogged(true);
            navigate("/");
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
