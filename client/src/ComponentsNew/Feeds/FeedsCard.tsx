import React from "react";
import { Box, Typography, Stack, IconButton } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import { Card, CardContent } from "../../Styles/card.styles";

const FeedsCard = () => {
    return (
        <Card>
            <CardContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </CardContent>
            <Stack direction="row" spacing={2}>
                <IconButton>
                    <BookmarkBorderIcon />
                </IconButton>
                <IconButton>
                    <ShareIcon />
                </IconButton>
            </Stack>
        </Card>
    );
};

export default FeedsCard;
