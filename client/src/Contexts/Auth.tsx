import { useState, createContext, useContext } from "react";
import { AuthContextType } from "../TscTypes/ContextTypes";
import { ChildrenProps } from "../TscTypes/TscTypes";

const Auth = createContext<AuthContextType | null>(null);

export const useAuth = () => {
    const contextValue = useContext(Auth);
    if (!contextValue) {
        throw new Error("Auth context must be used within Auth provider");
    }
    return contextValue;
};

export const AuthProvider: React.FC<ChildrenProps> = ({ children }) => {
    const [isLogged, setIsLogged] = useState(localStorage.getItem("token") ? true : false);

    const value = { isLogged, setIsLogged };
    return <Auth.Provider value={value}>{children}</Auth.Provider>;
};
