import { Button, Stack, Typography } from "@mui/material";
import { SuccessDisplayProps } from "../../TscTypes/PageTypes";
import { useSubscription } from "../../Contexts/Subscription";
import { StatusFail, StatusSuccess } from "../../Styles/helper.styles";
import { useSubs } from "../../Hooks/useSubs";

const SuccessDisplay: React.FC<SuccessDisplayProps> = ({ sessionId }) => {
    const token = localStorage.getItem("token");
    const { subscriptionStatus } = useSubscription();
    const { dueDate } = useSubs();

    return (
        <Stack spacing={1.5} justifyContent="center">
            <Stack spacing={1.5}>
                <Stack direction="row" spacing={2}>
                    <Typography fontWeight={"bold"} variant="h5">
                        Subscription status:
                    </Typography>
                    {subscriptionStatus ? <StatusSuccess>Active</StatusSuccess> : <StatusFail>Inactive</StatusFail>}
                </Stack>

                <Typography>Your next payment is due on {new Date(dueDate * 1000).toUTCString()}</Typography>
                <Typography>Your are now subscribed to the pro membership of KneedUp!!!🎉</Typography>
            </Stack>
            <form action="http://localhost:8090/create-portal-session" method="POST">
                <input type="hidden" id="session-id" name="session_id" value={sessionId} />
                <input type="hidden" name="user_token" value={token as string} />

                <Button variant="contained" type="submit" fullWidth>
                    Manage your billing information
                </Button>
            </form>
        </Stack>
    );
};

export default SuccessDisplay;
