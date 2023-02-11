export const setSubsParamOnSuccessAndFail = (
    query: URLSearchParams,
    setSuccess: React.Dispatch<React.SetStateAction<boolean>>,
    setSessionId: React.Dispatch<React.SetStateAction<string>>,
    setMessage: React.Dispatch<React.SetStateAction<string>>
) => {
    if (query.get("success")) {
        console.log("success");
        setSuccess(true);
        setSessionId(query.get("session_id") as string);
    }

    if (query.get("canceled")) {
        console.log("cnacelled");
        setSuccess(false);
        setMessage("Order canceled -- continue to shop around and checkout when you're ready.");
    }
};
