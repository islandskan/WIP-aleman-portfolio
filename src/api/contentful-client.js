/*Set up the content client and make a function out of it! Import into the pages */
import { createClient } from 'contentful';
export const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});
