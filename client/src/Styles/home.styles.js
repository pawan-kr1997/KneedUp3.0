import { Toolbar, IconButton, styled, ListItemIcon as MuiListItemIcon, Box, Button, Typography, Link } from "@mui/material";

export const PrimaryToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#212529",

    [theme.breakpoints.up("lg")]: {
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

    [theme.breakpoints.up("lg")]: {
        display: "none",
    },
}));

export const ListItemIcon = styled(MuiListItemIcon)({
    fontSize: "0.8rem",
    minWidth: "0",
    paddingRight: "1rem",
});

export const ContentSection = styled(Box)({
    display: "flex",
    gap: "1rem",
    border: "1px solid black",
    justifyContent: "center",
    marginTop: "5.5rem",
});

export const SidebarContainer = styled(Box)(({ theme }) => ({
    width: "3.1rem",
    height: "30rem",
    backgroundColor: "cyan",
    border: "1px solid black",
    display: "none",
    // marginTop: "2rem",
    position: "sticky",
    top: "5.5rem",
    [theme.breakpoints.up("lg")]: {
        display: "flex",
    },
}));

export const FeedsContainer = styled(Box)(({ theme }) => ({
    width: "min(50rem, 100vw)",
    height: "80rem",
    backgroundColor: "lightskyblue",
    border: "1px solid black",
    // marginTop: "2rem",
}));

export const CategoryContainer = styled(Box)(({ theme }) => ({
    width: "22rem",
    height: "30rem",
    backgroundColor: "lightslategray",
    border: "1px solid black",
    display: "none",
    // marginTop: "2rem",
    position: "sticky",
    top: "5.5rem",

    [theme.breakpoints.up("lg")]: {
        display: "flex",
    },
}));
