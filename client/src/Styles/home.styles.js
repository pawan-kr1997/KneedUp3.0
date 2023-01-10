import { Toolbar, IconButton, styled, ListItemIcon as MuiListItemIcon, Box, Button, Typography, Link } from "@mui/material";

export const PrimaryToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#212529",

    [theme.breakpoints.up("md")]: {
        justifyContent: "center",
    },
}));

export const SecondaryToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#212529",
}));

export const LogoContainer = styled(Box)(({ theme }) => ({
    width: "10rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.breakpoints.up("md")]: {
        width: "15rem",
    },
}));

export const LinkContainer = styled(Link)({
    color: "lightgray",
    textDecoration: "none",
    display: "flex",
    gap: ".3rem",
    alignItems: "center",
    cursor: "pointer",

    "&:hover": {
        color: "gray",
    },
});

export const LinkText = styled(Typography)(({ theme }) => ({
    display: "none",
    fontWeight: "bold",
    [theme.breakpoints.up("md")]: {
        display: "flex",
    },
}));

export const NavIcon = styled(IconButton)(({ theme }) => ({
    mr: "2",
    color: "white",

    [theme.breakpoints.up("md")]: {
        display: "none",
    },
}));

export const ListItemIcon = styled(MuiListItemIcon)({
    fontSize: "0.8rem",
    minWidth: "0",
    paddingRight: "1rem",
});
