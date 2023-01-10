import React from "react";

import { Drawer as MuiDrawer, Box as MuiBox } from "@mui/material";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CampaignIcon from "@mui/icons-material/Campaign";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import HomeIcon from "@mui/icons-material/Home";
import Logo from "./Logo";
import { useCategoryList } from "../Contexts/CategoryList";

import List from "./List";
import ListItem from "./ListItem";
import Accordion from "./Accordion";
import { DrawerProps } from "../TscTypes/TscTypes";

const Drawer: React.FC<DrawerProps> = ({ isDrawerOpen, onIsDrawerOpen }) => {
    const { list } = useCategoryList();

    return (
        <MuiDrawer anchor="left" open={isDrawerOpen} onClose={() => onIsDrawerOpen(false)}>
            <MuiBox p={1} width="280px">
                <Logo variant="dark" />

                <List>
                    <ListItem to="/home" icon={<HomeIcon />}>
                        Home
                    </ListItem>
                    <ListItem to="/about" icon={<PeopleOutlineIcon />}>
                        About us
                    </ListItem>
                    <ListItem to="/bookmark" icon={<BookmarkBorderIcon />}>
                        Bookmark
                    </ListItem>
                    <ListItem to="/followsites" icon={<StarBorderIcon />}>
                        Follow sites
                    </ListItem>
                    <ListItem to="/subscription" icon={<CreditCardIcon />}>
                        Subscription
                    </ListItem>
                </List>

                {list.news && (
                    <Accordion category="News on air" icon={<NewspaperIcon />}>
                        <List>
                            <ListItem to="/national">National</ListItem>
                            <ListItem to="/international">International</ListItem>
                            <ListItem to="/sports">Sports</ListItem>
                            <ListItem to="/business">Business</ListItem>
                        </List>
                    </Accordion>
                )}
                {list.president && (
                    <Accordion category="President of India" icon={<CampaignIcon />}>
                        <List>
                            <ListItem to="/speeches">Speeches</ListItem>
                            <ListItem to="/pressRelease">Press release</ListItem>
                        </List>
                    </Accordion>
                )}
                {list.pib && (
                    <Accordion category="Press information bureau" icon={<AssessmentIcon />}>
                        <List>
                            <ListItem to="/pressRelease">Press release</ListItem>
                        </List>
                    </Accordion>
                )}
                {list.prs && (
                    <Accordion category="PRS India" icon={<InboxIcon />}>
                        <List>
                            <ListItem to="/blogs">Blogs</ListItem>
                            <ListItem to="/articles">Articles</ListItem>
                        </List>
                    </Accordion>
                )}
            </MuiBox>
        </MuiDrawer>
    );
};

export default Drawer;
