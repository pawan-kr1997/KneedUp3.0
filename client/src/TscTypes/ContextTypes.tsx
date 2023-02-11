export type AuthContextType = {
    isLogged: boolean;
    setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
};

export type SubscriptionContextType = {
    subscriptionStatus: boolean;
};
