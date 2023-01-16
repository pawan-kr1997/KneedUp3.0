import MoveToInbox from "@mui/icons-material/MoveToInbox";
import { Box as MuiBox, Typography as MuiTypography, Stack as MuiStack, Button as MuiButton, styled } from "@mui/material";

export const ChecklistContainer = styled(MuiBox)({
    width: "min(30rem, 90vw)",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "1rem",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: ".3rem",
    alignItems: "center",
});

export const ChecklistTitle = styled(MuiTypography)({
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginTop: "1rem",
    marginBottom: "1rem",
    // border: "1px solid red",
});

export const ChecklistItem = styled(MuiStack)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // border: "1px solid red",
    width: "min(70vw,25rem )",
});

export const ChecklistButton = styled(MuiButton)({
    margin: "1rem 0rem",
});
