import React from "react";
import { Card, CardContent, CardDate, CardHeader, CardSource } from "../../Styles/card.styles";
import { Stack, IconButton } from "@mui/material";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const BookmarkCard = () => {
    return (
        <Card>
            <CardHeader>
                <CardSource>Press information bureau/press releases</CardSource>
                <CardDate>Posted on: 20 jul 22</CardDate>
            </CardHeader>

            <CardContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt m
            </CardContent>
            <Stack direction="row" spacing={2}>
                <IconButton>
                    <BookmarkBorderIcon />
                </IconButton>
                <IconButton>
                    <DeleteOutlineIcon />
                </IconButton>
            </Stack>
        </Card>
    );
};

export default BookmarkCard;
