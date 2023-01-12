import { books } from './dataset.js';
const resolvers = {
    Query: {
        books: () => books,
    },
};

export { resolvers };
