import { NavigateFunction } from "react-router-dom";
import { GetFeedUrlAndHeaderReturnType } from "../TscTypes/Functions";

export const getFeedUrlAndHeader = (paramsCategory: string | undefined, navigate: NavigateFunction): GetFeedUrlAndHeaderReturnType => {
    let pre = "https://kneedup3-0bpro.onrender.com";
    let url = "";
    let headerText = "";

    switch (paramsCategory) {
        case "newsOnAir_National":
            url = pre + "/newsOnAir/national";
            headerText = "News On Air / National news";
            break;

        case "newsOnAir_International":
            url = pre + "/newsOnAir/international";
            headerText = "News On Air / International news";
            break;

        case "newsOnAir_Business":
            url = pre + "/newsOnAir/business";
            headerText = "News On Air / Business news";
            break;

        case "newsOnAir_Sports":
            url = pre + "/newsOnAir/sports";
            headerText = "News On Air / Sports news";
            break;

        case "poi_Speeches":
            url = pre + "/presidentOfIndia/speeches";
            headerText = "President of India / Speeches";
            break;

        case "poi_pressReleases":
            url = pre + "/presidentOfIndia/pressReleases";
            headerText = "President of India / Press releases";
            break;

        case "pib_pressReleases":
            url = pre + "/pressInformationBureau/pressReleases";
            headerText = "Press Information Bureau / Press releases";
            break;

        case "prs_Blogs":
            url = pre + "/prsIndia/blogs";
            headerText = "PRS India / Blogs";
            break;

        case "prs_Articles":
            url = pre + "/prsIndia/articles";
            headerText = "PRS India / Articles";
            break;

        default:
            navigate("/pagenotfound");
    }

    return { url: url, headerText: headerText };
};

export const getPostDateWithShortMonth = (postDate: number): string => {
    let date = new Date(postDate);
    let fullDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    let shortMonth = fullDate.toLocaleString("en-us", { month: "short" });

    return date.getDate() + " " + shortMonth + " " + date.getFullYear();
};

export const configurePostUrl = (paramsCategory: string, url: string): string => {
    if (
        paramsCategory === "newsOnAir_National" ||
        paramsCategory === "newsOnAir_International" ||
        paramsCategory === "newsOnAir_Business" ||
        paramsCategory === "newsOnAir_Sports" ||
        paramsCategory === "idsa_commentsAndBriefs" ||
        paramsCategory === "prs_Blogs" ||
        paramsCategory === "prs_Articles"
    ) {
        return "https://" + url;
    } else {
        return url;
    }
};
