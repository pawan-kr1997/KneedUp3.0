import { Stack as MuiStack, Button as MuiButton, styled, Alert as MuiAlert, CircularProgress as MuiCircularProgress } from "@mui/material";

export const Container = styled(MuiStack)({
    width: "min(40rem, 95vw)",
    margin: "auto",
    marginTop: "10rem",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
});

export const Button = styled(MuiButton)({
    padding: ".5rem 5rem",
    marginTop: ".5rem",
});

export const Alert = styled(MuiAlert)(({ theme }) => ({
    width: "90%",
    backgroundColor: "hsl(0, 100%, 95%)",
    [theme.breakpoints.up("sm")]: {
        width: "95%",
    },
}));

export const Progress = styled(MuiCircularProgress)({
    color: "lightgray",
    padding: "0rem .5rem",
});
