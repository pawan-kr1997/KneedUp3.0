import React, { useState } from "react";
import { Skeleton } from "@mui/material";
import { CategoryContainer } from "../Styles/home.styles";
import ListContainer from "./ListContainer";
import ListItem from "./ListItem";

const CategoryBar = () => {
    const [loading, setLoading] = useState(false);

    const skeleton = (
        <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </>
    );

    return (
        <CategoryContainer>
            {loading ? (
                <>
                    <Skeleton width={150} sx={{ marginLeft: "1rem" }} />
                    <Skeleton width={100} sx={{ marginLeft: "1rem" }} />
                    <Skeleton width={100} sx={{ marginLeft: "1rem" }} />
                    <Skeleton width={100} sx={{ marginLeft: "1rem" }} />
                    <Skeleton width={90} sx={{ marginLeft: "1rem" }} />
                    <Skeleton width={150} sx={{ marginLeft: "1rem" }} />
                    <Skeleton width={100} sx={{ marginLeft: "1rem" }} />
                    <Skeleton width={90} sx={{ marginLeft: "1rem" }} />
                    <Skeleton width={200} sx={{ marginLeft: "1rem" }} />
                    <Skeleton width={100} sx={{ marginLeft: "1rem" }} />
                    <Skeleton width={90} sx={{ marginLeft: "1rem" }} />
                    <Skeleton width={150} sx={{ marginLeft: "1rem" }} />
                    <Skeleton width={100} sx={{ marginLeft: "1rem" }} />
                    <Skeleton width={90} sx={{ marginLeft: "1rem" }} />
                </>
            ) : (
                <>
                    <ListContainer heading="• News on air">
                        <ListItem to="/newsOnAir_National"> National</ListItem>
                        <ListItem to="/newsOnAir_International"> International</ListItem>
                        <ListItem to="/newsOnAir_Business">Business</ListItem>
                        <ListItem to="/newsOnAir_Sports">Sports</ListItem>
                    </ListContainer>
                    <ListContainer heading="• President of India">
                        <ListItem to="/poi_Speeches">Speeches</ListItem>
                        <ListItem to="/poi_pressReleases">Press release</ListItem>
                    </ListContainer>
                    <ListContainer heading="• Press information bureau">
                        <ListItem to="/pib_pressReleases">Press release</ListItem>
                    </ListContainer>
                    <ListContainer heading="• PRS India">
                        <ListItem to="/prs_Blogs">Blogs</ListItem>
                        <ListItem to="/prs_Articles">Articles</ListItem>
                    </ListContainer>
                </>
            )}
        </CategoryContainer>
    );
};

export default CategoryBar;
