import { client } from './contentful-client.js';

export async function fetchEntries(contentType) {
    const entries = await client.getEntries({
        content_type: contentType,
        include: 10,
    });
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}`);
}
