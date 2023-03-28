const baseURL = new URL(`${window.location.protocol}//${window.location.host}`);

// const testBase = new URL('https://aleman.se');

const isInternal = (url) => {
    return new URL(url, baseURL).hostname === baseURL.hostname;
};

export default isInternal;
// change testBase to baseURL
