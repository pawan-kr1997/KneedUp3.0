import React, { useRef, useEffect } from "react";
import { FeedsHeaderContainer, FeedsHeaderContent } from "../../Styles/feeds.styles";
import _ from "lodash";
import { FeedsHeaderProps } from "../../TscTypes/TscTypes";
import { useAnimate } from "../../Hooks/useAnimate";

const FeedsHeader: React.FC<FeedsHeaderProps> = ({ header }) => {
    let contentRef = useAnimate();

    return (
        <FeedsHeaderContainer>
            <FeedsHeaderContent ref={contentRef}>{header}</FeedsHeaderContent>
        </FeedsHeaderContainer>
    );
};

export default FeedsHeader;
