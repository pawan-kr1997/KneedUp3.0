import React, { useState } from "react";
import { useCategoryList } from "../../Contexts/CategoryList";
import { CategoryContainer, CategoryListContainer } from "../../Styles/home.styles";
import AuthButtonGrp from "../Buttons/AuthButtonGrp";
import ListContainer from "../List/ListContainer";
import ListItem from "../List/ListItem";
import CategoryBarSkeleton from "./CategoryBarSkeleton";
import { useIsFetching } from "react-query";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../../ErrorBoundary/ErrorFallback";

const CategoryBar = () => {
    const { list } = useCategoryList();
    const isFetching = useIsFetching(["categoryList"]);

    return (
        <CategoryContainer>
            <AuthButtonGrp />
            {/* <ErrorBoundary FallbackComponent={ErrorFallback}> */}
            <CategoryListContainer>
                {isFetching ? (
                    <CategoryBarSkeleton />
                ) : (
                    <>
                        {list.news && (
                            <ListContainer heading=" News on air">
                                <ListItem to="/newsOnAir_National" size="0.9rem" color="gray">
                                    {" "}
                                    National
                                </ListItem>
                                <ListItem to="/newsOnAir_International" size="0.9rem" color="gray">
                                    {" "}
                                    International
                                </ListItem>
                                <ListItem to="/newsOnAir_Business" size="0.9rem" color="gray">
                                    Business
                                </ListItem>
                                <ListItem to="/newsOnAir_Sports" size="0.9rem" color="gray">
                                    Sports
                                </ListItem>
                            </ListContainer>
                        )}
                        {list.president && (
                            <ListContainer heading="President of India">
                                <ListItem to="/poi_Speeches" size="0.9rem" color="gray">
                                    Speeches
                                </ListItem>
                                <ListItem to="/poi_pressReleases" size="0.9rem" color="gray">
                                    Press release
                                </ListItem>
                            </ListContainer>
                        )}
                        {list.pib && (
                            <ListContainer heading="Press information bureau">
                                <ListItem to="/pib_pressReleases" size="0.9rem" color="gray">
                                    Press release
                                </ListItem>
                            </ListContainer>
                        )}
                        {list.prs && (
                            <ListContainer heading="PRS India">
                                <ListItem to="/prs_Blogs" size="0.9rem" color="gray">
                                    Blogs
                                </ListItem>
                                <ListItem to="/prs_Articles" size="0.9rem" color="gray">
                                    Articles
                                </ListItem>
                            </ListContainer>
                        )}
                    </>
                )}
            </CategoryListContainer>
            {/* </ErrorBoundary> */}
        </CategoryContainer>
    );
};

export default CategoryBar;
