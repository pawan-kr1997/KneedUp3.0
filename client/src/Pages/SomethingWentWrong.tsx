import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Typography as MuiTypography, Button as MuiButton } from "@mui/material";
import NavBar from "../ComponentsNew/NavBar";
import { ExceptionContainer } from "../Styles/helper.styles";
import { useQueryClient } from "react-query";
import { useAuth } from "../Contexts/Auth";

const SomethingWentWrong = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { setIsLogged } = useAuth();
    return (
        <>
            <NavBar variant="primary" />
            <ExceptionContainer>
                <MuiTypography variant="h5" sx={{ fontWeight: "bold" }}>
                    Err something went wrong
                </MuiTypography>
                <MuiTypography>Network error migh have occured. Please refresh you page.</MuiTypography>
                <MuiButton
                    variant="contained"
                    onClick={() => {
                        navigate("/newsOnAir_National");
                        localStorage.removeItem("token");
                        axios.defaults.headers.common["Authorization"] = null;
                        queryClient.invalidateQueries(["categoryList"]);
                        queryClient.invalidateQueries("bookmark");
                        setIsLogged(false);
                    }}
                >
                    Refresh page
                </MuiButton>
            </ExceptionContainer>
        </>
    );
};

export default SomethingWentWrong;
