// import { MetaData } from '../../components/MetaData.js';
// import { createClient } from 'contentful';

// const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
// });

// export const getStaticPaths = async () => {
//     const res = await client.getEntries({
//         content_type: 'projects',
//     });
//     const paths = res.items.map((item) => {
//         return {
//             params: {
//                 slug: item.fields.slug,
//             },
//         };
//     });
//     return {
//         paths,
//         fallback: false,
//     };
// };

// export async function getStaticProps({ params }) {
//     const { items } = await client.getEntries({
//         cotnent_type: 'projects',
//         'fields.slug': params.slug,
//     });

//     return {
//         props: {
//             projects: items[0],
//         },
//     };
// }
function Project({ projects }) {
    console.log({ projects });
    return (
        <>
            <div className='container'>
                <h2 className='projektTitle'>Hallo</h2>
            </div>
        </>
    );
}

export default Project;
