import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Stack, IconButton } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Card, CardContent } from "../../Styles/card.styles";
import { FeedsCardProps, Post } from "../../TscTypes/TscTypes";
import { configurePostUrl } from "../../Functions/componentFunctions";

const FeedsCard: React.FC<FeedsCardProps> = ({ post, onBookmark, onUnmark, isBookmark }) => {
    const params = useParams();
    const postUrl = configurePostUrl(params.category as string, post.url);

    return (
        <Card>
            <CardContent href={postUrl} target="_blank" rel="noopener noreferrer">
                {post.title}
            </CardContent>
            <Stack direction="row" spacing={2}>
                {isBookmark ? (
                    <IconButton onClick={() => onUnmark(post.id)}>
                        <BookmarkIcon sx={{ color: "#1976d2" }} />
                    </IconButton>
                ) : (
                    <IconButton onClick={() => onBookmark(post.id)}>
                        <BookmarkBorderIcon />
                    </IconButton>
                )}
                <IconButton>
                    <ShareIcon />
                </IconButton>
            </Stack>
        </Card>
    );
};

export default FeedsCard;
