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

const Feeds = () => {
    const queryClient = useQueryClient();
    const isFetching = useIsFetching(["feeds"]);
    const bookmarkFallback: BookmarkData[] = [];
    const { data: bookmarks = bookmarkFallback } = useQuery("bookmark", fetchBookmarks, {
        onError: (error) => {
            console.log(error);
        },
    });

    const [posts, headerText] = useFeeds();

    let oldPostDate = "";
    let showDate = true;
    let cardArray = null;

    const { mutate: handleBookmark } = useMutation((postId: string) => addBookmark(postId), {
        onSuccess: (data) => {
            console.log("bookmark added");
            queryClient.invalidateQueries("bookmark");
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const { mutate: handleUnmark } = useMutation((postId: string) => deleteBookmark(postId), {
        onSuccess: (data) => {
            console.log("bookmark deleted");
            queryClient.invalidateQueries("bookmark");
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const finalPosts = [...posts].reverse();

    cardArray = finalPosts.map((el) => {
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
