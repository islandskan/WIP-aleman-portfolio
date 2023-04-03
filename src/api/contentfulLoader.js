export default function contentfulLoader({ src, quality, width }) {
    return `https:${src}?w=${width}&q=${quality || 75}`;
}
