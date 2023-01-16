import { Box as MuiBox, styled, Typography as MuiTypography, Stack as MuiStack } from "@mui/material";

export const Card = styled(MuiBox)({
    border: "1px solid lightgray",
    borderRadius: "7px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem",
    margin: "0rem 1rem",
});

export const CardHeader = styled(MuiStack)({
    display: "flex",
    color: "hsl(0,0%,40%)",
    flexDirection: "row",
    justifyContent: "space-between",
});

export const CardSource = styled(MuiTypography)({
    fontSize: "0.8rem",
});

export const CardDate = styled(MuiTypography)(({ theme }) => ({
    fontSize: "0.8rem",
    display: "none",
    [theme.breakpoints.up("sm")]: {
        display: "grid",
    },
}));

export const CardContent = styled(MuiTypography)({
    fontSize: "1.2rem",
    fontWeight: "bold",
    textOverflow: "ellipsis",
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": "2",
    "-webkit-box-orient": "vertical",
    "&:hover": { textDecoration: "underline" },
    cursor: "pointer",
});
