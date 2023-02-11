import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router";
import NavBar from "../../ComponentsNew/NavBar";
import Message from "./Message";
import ProductDisplay from "./ProductDisplay";
import SuccessDisplay from "./SuccessDisplay";

import { setSubsParamOnSuccessAndFail } from "../../Functions/pageFunction";
import { useSubscription } from "../../Contexts/Subscription";
import { SubsContainer } from "../../Styles/helper.styles";

export default function Subscription() {
    // const token = localStorage.getItem("token");
    const { subscriptionStatus } = useSubscription();

    let [message, setMessage] = useState("");
    let [success, setSuccess] = useState(false);
    let [sessionId, setSessionId] = useState("");

    let navigate = useNavigate();

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        setSubsParamOnSuccessAndFail(query, setSuccess, setSessionId, setMessage);
    }, [sessionId]);

    let subscriptionPageContent = null;

    if (!success && message === "" && !subscriptionStatus) {
        subscriptionPageContent = <ProductDisplay />;
    } else if ((success && sessionId !== "") || (!success && sessionId === "" && subscriptionStatus)) {
        subscriptionPageContent = <SuccessDisplay sessionId={sessionId} />;
    } else {
        subscriptionPageContent = <Message message={message} />;
    }

    return (
        <>
            <NavBar variant="primary" />
            <SubsContainer>{subscriptionPageContent}</SubsContainer>
        </>
    );
}
