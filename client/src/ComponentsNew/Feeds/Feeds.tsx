import { getPostDateWithShortMonth } from "../../Functions/componentFunctions";
import { useFeeds } from "../../Hooks/useFeeds";
import { FeedsContainer } from "../../Styles/home.styles";
import { BookmarkData, Post } from "../../TscTypes/TscTypes";
import Date from "./Date";
import FeedsCard from "./FeedsCard";
import FeedsCardSkeleton from "./FeedsCardSkeleton";
import FeedsHeader from "./FeedsHeader";
import { useQuery, useMutation, useIsFetching } from "react-query";
import { addBookmark, deleteBookmark, fetchBookmarks } from "../../Functions/axiosFunctions";
import { useQueryClient } from "react-query";
import { useBookmark } from "../../Hooks/useBookmark";

const Feeds = () => {
    const queryClient = useQueryClient();
    const isFetching = useIsFetching(["feeds"]);
    const { bookmarks, handleBookmark, handleUnmark } = useBookmark();
    const [posts, headerText] = useFeeds();

    let oldPostDate = "";
    let showDate = true;
    let cardArray = null;

    cardArray = [...posts].reverse().map((el) => {
        const currentPostDate = getPostDateWithShortMonth(el.createdAt);
        if (oldPostDate !== currentPostDate) {
            showDate = true;
            oldPostDate = currentPostDate;
        } else {
            showDate = false;
        }

        let isBookmark = false;
        if (bookmarks.length) {
            for (let i = 0; i < bookmarks.length; i++) {
                if (bookmarks[i].id === el.id) {
                    isBookmark = true;
                }
            }
        }

        return (
            <>
                {showDate && <Date>{currentPostDate}</Date>}
                <FeedsCard key={el.id} post={el} onBookmark={handleBookmark} onUnmark={handleUnmark} isBookmark={isBookmark} />
            </>
        );
    });

    return (
        <FeedsContainer>
            <FeedsHeader header={headerText} />
            {isFetching ? (
                <>
                    <FeedsCardSkeleton />
                </>
            ) : (
                <>{cardArray}</>
            )}
        </FeedsContainer>
    );
};

export default Feeds;
