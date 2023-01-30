import { client } from './client.js';

export const getNews = async () => {
    console.log(client);
    const news = await client.getEntries({ content_type: 'newsCards' });
    console.log(news);
    return news.items;
};
