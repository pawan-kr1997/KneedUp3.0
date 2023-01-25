import React from "react";
import { Skeleton } from "@mui/material";

const CategoryBarSkeleton = () => {
    return (
        <>
            <Skeleton width={150} sx={{ marginLeft: "1rem" }} />
            <Skeleton width={100} height={12} sx={{ marginLeft: "1rem" }} />
            <Skeleton width={100} height={12} sx={{ marginLeft: "1rem" }} />
            <Skeleton width={100} height={12} sx={{ marginLeft: "1rem" }} />
            <Skeleton width={90} height={12} sx={{ marginLeft: "1rem", marginBottom: "1rem" }} />
            <Skeleton width={150} sx={{ marginLeft: "1rem" }} />
            <Skeleton width={100} height={12} sx={{ marginLeft: "1rem" }} />
            <Skeleton width={90} height={12} sx={{ marginLeft: "1rem", marginBottom: "1rem" }} />
            <Skeleton width={200} sx={{ marginLeft: "1rem" }} />
            <Skeleton width={100} height={12} sx={{ marginLeft: "1rem" }} />
            <Skeleton width={90} height={12} sx={{ marginLeft: "1rem", marginBottom: "1rem" }} />
            <Skeleton width={150} sx={{ marginLeft: "1rem" }} />
            <Skeleton width={100} height={12} sx={{ marginLeft: "1rem" }} />
            <Skeleton width={90} height={12} sx={{ marginLeft: "1rem" }} />
        </>
    );
};

export default CategoryBarSkeleton;
