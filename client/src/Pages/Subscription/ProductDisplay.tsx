import { Typography, Stack, Button, Box } from "@mui/material";
import { useSubscription } from "../../Contexts/Subscription";
import { Container, StatusFail, StatusSuccess } from "../../Styles/helper.styles";

const ProductDisplay = () => {
    const token = localStorage.getItem("token");
    const { subscriptionStatus } = useSubscription();

    return (
        <Stack spacing={1.5}>
            <Stack spacing={1.5}>
                <Stack direction="row" spacing={1.5}>
                    <Typography fontWeight={"bold"} variant="h5">
                        Subscription status:
                    </Typography>
                    {subscriptionStatus ? <StatusSuccess>Active</StatusSuccess> : <StatusFail>Inactive</StatusFail>}
                </Stack>

                <Typography mb={1.5} sx={{ textAlign: "center" }}>
                    Avail the membership to unlock bookmark feature in KneedUp
                </Typography>
            </Stack>
            <form action="http://localhost:8090/create-checkout-session" method="POST">
                <input type="hidden" name="lookup_key" value="price_1LzwC7SAy6HVqYxUwz8vXMff" />
                <input type="hidden" name="user_token" value={token as string} />

                <Button variant="contained" fullWidth type="submit">
                    Subscribe for ₹100 / month
                </Button>
            </form>
        </Stack>
    );
};

export default ProductDisplay;
