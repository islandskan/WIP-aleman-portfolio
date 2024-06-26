import { ThumbnailLink } from './ThumbnailLink';

export const LinkList = ({ links }) => {
    links;
    const list = links.map((link) => (
        <li key={link.sys.id}>
            <ThumbnailLink item={link} />{' '}
        </li>
    ));
    return <ul className='linkContainer'>{list}</ul>;
};
