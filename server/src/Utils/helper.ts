import {
    idsaArticleStrategy,
    newsArticleStrategy,
    nitiArticleStrategy,
    presidentArticleStrategy,
    pressArticleStrategy,
    prsArticleStrategy,
} from './scrapperStrategy';
import { ScrapperStrategyType } from './tscTypes';

export function cleanString(input: string): string {
    return input.replace(/[\n\t]/g, '').trim();
}

export const determineUrl = (category: string, subCategory: string) => {
    let url = '';

    switch (category) {
        case 'newOnAir':
            url = `https://www.newsonair.gov.in/category/${subCategory}/`;
            break;

        case 'idsa':
            url = `https://www.idsa.in/${subCategory}/`;
            break;

        case 'pressReleases':
            url = `https://www.pib.gov.in/indexd.aspx`;
            break;

        case 'president':
            url = `https://presidentofindia.nic.in/${subCategory}`;
            break;

        case 'niti':
            url = `https://www.niti.gov.in/${subCategory}`;
            break;

        case 'prs':
            url = `https://prsindia.org/${subCategory}`;
            break;
    }

    return url;
};

export const determineStrategy = (category: string) => {
    switch (category) {
        case 'newOnAir':
            return newsArticleStrategy;

        case 'idsa':
            return idsaArticleStrategy;

        case 'pressReleases':
            return pressArticleStrategy;

        case 'president':
            return presidentArticleStrategy;

        case 'niti':
            return nitiArticleStrategy;

        case 'prs':
            return prsArticleStrategy;
    }
};
