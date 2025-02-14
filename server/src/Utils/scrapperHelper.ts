import axios, { AxiosResponse } from 'axios';
import cheerio from 'cheerio';
import { Article, ScrapperStrategyType } from './tscTypes';

export class Scrapper {
    private data: Article[];
    private scrapperStrategy: ScrapperStrategyType;

    constructor(scrapperStrategy: ScrapperStrategyType) {
        this.data = [];
        this.scrapperStrategy = scrapperStrategy;
    }

    get() {
        return this.data;
    }

    async loadData(url: string): Promise<any> {
        const response: AxiosResponse = await axios.get(url);

        const html: string = response.data;
        const $: cheerio.Root = cheerio.load(html);

        this.data = this.scrapperStrategy.scrap($, html);
    }
}
