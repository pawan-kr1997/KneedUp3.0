import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button as MuiButton } from "@mui/material";

type ButtonProps = {
    variant: "text" | "outlined" | "contained" | undefined;
};

export const LoginBtn: React.FC<ButtonProps> = ({ variant }) => {
    const navigate = useNavigate();
    return (
        <MuiButton variant="contained" onClick={() => navigate("/login")}>
            Login
        </MuiButton>
    );
};

export const SignupBtn: React.FC<ButtonProps> = ({ variant }) => {
    const navigate = useNavigate();
    return (
        <MuiButton variant="outlined" onClick={() => navigate("/signup")}>
            Signup
        </MuiButton>
    );
};

export const LogoutBtn: React.FC<ButtonProps> = ({ variant }) => {
    const navigate = useNavigate();
    return (
        <MuiButton
            variant={variant}
            onClick={() => {
                navigate("/newsOnAir_National");
                localStorage.removeItem("token");
                axios.defaults.headers.common["Authorization"] = null;
            }}
        >
            Logout
        </MuiButton>
    );
};
