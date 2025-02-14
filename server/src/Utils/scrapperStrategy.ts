import { cleanString } from './helper';
import { Article } from './tscTypes';

export const newsArticleStrategy = {
    scrap: ($: cheerio.Root, html: string) => {
        const articles: Article[] = [];
        const listItems = $('.entry-title');

        listItems.each((_, el) => {
            const title = cleanString($(el).find('a').text());
            let url = $(el).find('a').attr('href');

            articles.push({ title, url });
        });

        return articles;
    },
};

export const idsaArticleStrategy = {
    scrap: ($: cheerio.Root, html: string) => {
        const articles: Article[] = [];
        const listItems = $('.mp__newsBox');

        listItems.each((idx, el) => {
            const title = cleanString($(el).find('h3').find('a').text());
            let url = $(el).find('h3').find('a').attr('href');

            articles.push({ title, url });
        });

        return articles;
    },
};

export const pressArticleStrategy = {
    scrap: ($: cheerio.Root, html: string) => {
        const articles: Article[] = [];

        $('.release_list li', html).each(function (this: cheerio.Element) {
            const title = $(this).find('a').attr('title');
            const url = $(this).find('a').attr('href');

            articles.push({ title, url: 'https://pib.gov.in/' + url });
        });

        return articles;
    },
};

export const presidentArticleStrategy = {
    scrap: ($: cheerio.Root, html: string) => {
        const articles: Article[] = [];
        const listItems = $('.views-field-title');

        listItems.each((idx, el) => {
            const title = $(el).find('a').text();
            const url = $(el).find('a').attr('href');

            if (!title || !url) return;

            articles.push({ title, url: 'https://presidentofindia.nic.in/' + url });
        });

        return articles;
    },
};

export const nitiArticleStrategy = {
    scrap: ($: cheerio.Root, html: string) => {
        const articles: Article[] = [];
        const listItems = $('.post-title');

        listItems.each((idx, el) => {
            const title = $(el).find('a').text();
            const url = $(el).find('a').attr('href');

            if (!title || !url) return;

            articles.push({ title, url: 'https://www.niti.gov.in/' + url });
        });

        return articles;
    },
};

export const prsArticleStrategy = {
    scrap: ($: cheerio.Root, html: string) => {
        const articles: Article[] = [];

        const listItems = $('.field-content h3');
        listItems.each((idx, el) => {
            const title = $(el).find('a').text();
            let url = $(el).find('a').attr('href');

            articles.push({ title, url: 'https://prsindia.org' + url });
        });

        return articles;
    },
};
