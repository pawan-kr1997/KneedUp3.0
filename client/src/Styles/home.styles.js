import { Toolbar, IconButton, styled, ListItem as MuiListItem, ListItemIcon as MuiListItemIcon, Box, Button, Typography, Link, hslToRgb } from "@mui/material";

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
    gap: "1.5rem",
    // border: "1px solid black",
    justifyContent: "center",
    marginTop: "4.1rem",
});

export const SidebarContainer = styled(Box)(({ theme }) => ({
    width: "3.1rem",
    height: "30rem",
    // backgroundColor: "cyan",
    // border: "1px solid black",
    display: "none",
    position: "sticky",
    top: "5.5rem",
    flexDirection: "column",
    alignItems: "center",
    gap: "3.7rem",
    [theme.breakpoints.up("lg")]: {
        display: "flex",
    },
}));

export const FeedsContainer = styled(Box)(({ theme }) => ({
    width: "min(50rem, 100vw)",
    // height: "80rem",
    // padding: "0rem 1rem 1rem 1rem",
    // backgroundColor: "lightskyblue",
    // border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    // marginTop: "2rem",
    paddingBottom: "7rem",
}));

export const CategoryContainer = styled(Box)(({ theme }) => ({
    width: "18rem",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    position: "sticky",
    top: "5.5rem",
    display: "none",
    [theme.breakpoints.up("lg")]: {
        display: "flex",
    },
}));

export const CategoryListContainer = styled(Box)(({ theme }) => ({
    width: "18rem",
    height: "fit-content",
    paddingTop: ".2rem",
    paddingBottom: ".2rem",
    // borderRadius: "7px",
    flexDirection: "column",
    borderLeft: "2px dashed #1976d2",
    // backgroundColor: "hsl(0, 0%, 97%)",
}));

export const Icon = styled(Box)({
    color: "gray",
    position: "relative",

    "& .css-i4bv87-MuiSvgIcon-root": {
        fontSize: "2rem",
    },

    "&:hover": {
        color: "black",
    },
});
