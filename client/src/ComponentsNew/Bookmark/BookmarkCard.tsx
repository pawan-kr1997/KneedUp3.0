import React from "react";
import { Card, CardContent, CardDate, CardHeader, CardSource } from "../../Styles/card.styles";
import { Stack, IconButton } from "@mui/material";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ShareIcon from "@mui/icons-material/Share";
import { BookmarkProps } from "../../TscTypes/TscTypes";
import { getPostDateWithShortMonth } from "../../Functions/componentFunctions";

const BookmarkCard: React.FC<BookmarkProps> = ({ post, onDelete }) => {
    const postDate = getPostDateWithShortMonth(post.date);

    return (
        <Card>
            <CardHeader>
                <CardSource>{post.category}</CardSource>
                <CardDate>Posted on: {postDate}</CardDate>
            </CardHeader>

            <CardContent href={"https://" + post.url} target="_blank" rel="noopener noreferrer">
                {post.title}
            </CardContent>
            <Stack direction="row" spacing={2}>
                <IconButton onClick={() => onDelete(post.id)}>
                    <DeleteOutlineIcon />
                </IconButton>
                <IconButton
                    onClick={() => {
                        navigator.clipboard.writeText("https://" + post.url);
                    }}
                >
                    <ShareIcon />
                </IconButton>
            </Stack>
        </Card>
    );
};

export default BookmarkCard;
