import React from "react";
import { useAuth } from "../../Contexts/Auth";
import { ButtonGrpContainer } from "../../Styles/button.styles";
import { LoginBtn, LogoutBtn, SignupBtn } from "./Buttons";

const AuthButtonGrp = () => {
    const { isLogged } = useAuth();

    return (
        <ButtonGrpContainer>
            {!isLogged ? (
                <>
                    <LoginBtn variant="outlined" />
                    <SignupBtn variant="contained" />
                </>
            ) : (
                <LogoutBtn variant="contained" />
            )}
        </ButtonGrpContainer>
    );
};

export default AuthButtonGrp;
