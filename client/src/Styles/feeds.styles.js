import { Box as MuiBox, styled } from "@mui/material";

export const FeedsHeaderContainer = styled(MuiBox)({
    position: "sticky",
    top: "4.1rem",
    paddingTop: "1.3rem",
    background: "white",
    // border: "2px solid black",
    margin: "0rem 0.5rem",
    zIndex: "10",
});

export const FeedsHeaderContent = styled(MuiBox)(({ theme }) => ({
    fontSize: "1.5rem",
    fontWeight: "bolder",
    padding: "1.2rem",
    background: "#ffd43b",
    borderRadius: "7px",
    height: "6rem",
    display: "flex",
    alignItems: "center",
    transition: "all 0.5s ease",
    [theme.breakpoints.up("sm")]: {
        fontSize: "2rem",
    },
}));

export const DateContainer = styled(MuiBox)({
    fontSize: ".7rem",
    width: "5rem",
    height: "fit-content",
    padding: ".5rem 1rem",
    backgroundColor: "hsl(0, 0%, 90%)",
    margin: "auto",
    marginTop: ".2rem",
    marginBottom: ".2rem",
    borderRadius: "4px",
});
