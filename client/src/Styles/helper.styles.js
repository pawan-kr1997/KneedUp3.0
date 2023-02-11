import { Box, Stack as MuiStack, Button as MuiButton, styled, Alert as MuiAlert, CircularProgress as MuiCircularProgress } from "@mui/material";

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

export const SubsContainer = styled(MuiStack)({
    width: "min(40rem, 95vw)",
    margin: "auto",
    marginTop: "10rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
});

export const StatusSuccess = styled(Box)({
    display: "flex",
    background: "green",
    color: "white",
    alignItems: "center",
    padding: "0rem 1rem",
    borderRadius: "5px",
    fontWeight: "bold",
});

export const StatusFail = styled(Box)({
    background: "red",
    display: "flex",
    color: "black",
    alignItems: "center",
    padding: "0rem 1rem",
    borderRadius: "5px",
    fontWeight: "bold",
});

export const ExceptionContainer = styled(MuiStack)({
    width: "fit-content",
    margin: "auto",
    marginTop: "10rem",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: "1rem",
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
