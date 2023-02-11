import { createContext, useContext } from "react";
import { useQuery } from "react-query";
import { fetchSubscriptionStatus } from "../Functions/axiosFunctions";
import { SubscriptionContextType } from "../TscTypes/ContextTypes";
import { ChildrenProps } from "../TscTypes/TscTypes";

const Subscription = createContext<SubscriptionContextType | null>(null);

export const useSubscription = () => {
    const contextValue = useContext(Subscription);
    if (!contextValue) {
        throw new Error("Auth context must be used within Auth provider");
    }
    return contextValue;
};

export const SubscriptionProvider: React.FC<ChildrenProps> = ({ children }) => {
    const fallback = false;
    const { data: subscriptionStatus = fallback } = useQuery("subsStatus", fetchSubscriptionStatus, {
        onError: (err) => {
            console.log(err);
        },
    });

    const value = { subscriptionStatus };
    return <Subscription.Provider value={value}>{children}</Subscription.Provider>;
};
