import { ThumbnailLink } from './ThumbnailLink';

export const LinkList = ({ links, className }) => {
    const list = links.map((link) => (
        <li key={link.sys.id}>
            <ThumbnailLink item={link} />
        </li>
    ));
    return (
        <div className={`${className.linkContainer} linkContainer`}>{list}</div>
    );
};
