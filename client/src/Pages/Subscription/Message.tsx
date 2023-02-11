import { Stack, Button, Typography } from "@mui/material";
import { MessageProps } from "../../TscTypes/PageTypes";

const Message: React.FC<MessageProps> = ({ message }) => (
    <Stack spacing={1}>
        <Typography variant="h1">Err something went wrong</Typography>
        <Typography variant="h4">{message}</Typography>

        <Button href="/" variant="contained">
            Go to home
        </Button>
    </Stack>
);

export default Message;
