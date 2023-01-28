import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button as MuiButton } from "@mui/material";
import { useAuth } from "../../Contexts/Auth";
import { useCategoryList } from "../../Contexts/CategoryList";

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
    const { setIsLogged } = useAuth();
    const { setList } = useCategoryList();
    return (
        <MuiButton
            variant={variant}
            onClick={() => {
                navigate("/newsOnAir_National");
                localStorage.removeItem("token");
                axios.defaults.headers.common["Authorization"] = null;
                setIsLogged(false);
                setList({
                    news: true,
                    president: true,
                    pib: true,
                    prs: true,
                });
            }}
        >
            Logout
        </MuiButton>
    );
};
