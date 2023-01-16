import { Box as MuiBox, styled } from "@mui/material";

export const BookmarkContainer = styled(MuiBox)(({ theme }) => ({
    width: "min(50rem, 100vw)",
    height: "80rem",
    padding: "6rem 1rem 9rem 1rem",
    // border: "2px solid red",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    margin: "auto",
}));
