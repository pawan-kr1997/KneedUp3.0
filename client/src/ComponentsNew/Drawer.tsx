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

import List from "./List/List";
import ListItem from "./List/ListItem";
import Accordion from "./Accordion";
import { DrawerProps } from "../TscTypes/TscTypes";
import AuthButtonGrp from "./Buttons/AuthButtonGrp";
import { useIsFetching } from "react-query";

const Drawer: React.FC<DrawerProps> = ({ isDrawerOpen, onIsDrawerOpen }) => {
    const isFetching = useIsFetching(["categoryList"]);
    const { list } = useCategoryList();

    // console.log(`list: ${list} anf loading: ${loading}`);

    return (
        <MuiDrawer anchor="left" open={isDrawerOpen} onClose={() => onIsDrawerOpen(false)}>
            <MuiBox p={1} width="280px">
                <MuiBox mb={3}>
                    <Logo variant="dark" />
                </MuiBox>

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
                <MuiBox>
                    {isFetching ? null : (
                        <>
                            {list.news && (
                                <Accordion category="News on air" icon={<NewspaperIcon />}>
                                    <List>
                                        <ListItem to="/newsOnAir_National"> National</ListItem>
                                        <ListItem to="/newsOnAir_International"> International</ListItem>
                                        <ListItem to="/newsOnAir_Business">Business</ListItem>
                                        <ListItem to="/newsOnAir_Sports">Sports</ListItem>
                                    </List>
                                </Accordion>
                            )}
                            {list.president && (
                                <Accordion category="President of India" icon={<CampaignIcon />}>
                                    <List>
                                        <ListItem to="/poi_Speeches">Speeches</ListItem>
                                        <ListItem to="/poi_pressReleases">Press release</ListItem>
                                    </List>
                                </Accordion>
                            )}
                            {list.pib && (
                                <Accordion category="Press information bureau" icon={<AssessmentIcon />}>
                                    <List>
                                        <ListItem to="/pib_pressReleases">Press release</ListItem>
                                    </List>
                                </Accordion>
                            )}
                            {list.prs && (
                                <Accordion category="PRS India" icon={<InboxIcon />}>
                                    <List>
                                        <ListItem to="/prs_Blogs">Blogs</ListItem>
                                        <ListItem to="/prs_Articles">Articles</ListItem>
                                    </List>
                                </Accordion>
                            )}
                        </>
                    )}
                </MuiBox>
                <MuiBox mt={2}>
                    <AuthButtonGrp />
                </MuiBox>
            </MuiBox>
        </MuiDrawer>
    );
};

export default Drawer;
