const size = {
    mobile: '414px',
    tablet: '600px',
    laptop: '1024px',
    desktop: '1440px'
}

export const device = {
    mobile: `(min-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`
}