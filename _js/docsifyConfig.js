window.$docsify = {
    catchPluginErrors: true,
    name: 'Karloline-Hosting Documentation',
    repo: 'https://github.com/Karlo-Hosting/Docs/',
    routerMode: 'histroy',
    auto2top: true,
    loadSidebar: true,
    loadNavbar: true,
    mergeNavbar: true,
    logo: './_media/logo.png', // gets converted with css for dark mode
    formatUpdated: '{YYYY}-{MM}-{DD} {HH}:{mm}',
    // subMaxLevel: 1,
    toc: {
        tocMaxLevel: 3,
        target: 'h2, h3, h4, h5, h6',
        ignoreHeaders:  ['<!-- {docsify-ignore} -->', '<!-- {docsify-ignore-all} -->']
    },
    tabs: {
        persist: true,
        sync: true,
        theme: 'material',
        tabComments: true,
        tabHeadings: true,
    },
    // Search config https://github.com/docsifyjs/docsify/blob/141ac96add9892fcb345551906770c4e9b2265b0/docs/index.html#L105
    search: 'auto',
    progress: {
        position: 'top',
        color: 'var(--accent)',
        height: '2px',
    },
    darklightTheme: {
        // Theme colors chose according to Resonite color palette
        dark: {
            'custom_tw-primary': 'oklch(65.69% 0.196 275.75)',
            'custom_tw-secondary': 'oklch(74.8% 0.26 342.55)',
            'custom_tw-accent': 'oklch(74.51% 0.167 183.61)',
            'custom_tw-neutral': '#2a323c',
            'custom_tw-neutral-content': '#A6ADBB',
            'custom_tw-base-100': '#1d232a',
            'custom_tw-base-200': '#191e24',
            'custom_tw-base-300': '#15191e',
            'custom_tw-base-content': '#A6ADBB',

            custom_dropshadow: 'var(--custom_tw-base-200)',
            custom_sidebar: 'var(--custom_tw-base-300)',
            // custom_logo_invert: '',

            'theme-color': 'var(--accent)', // docsify search outline
            accent: 'var(--custom_tw-primary)',
            background: 'var(--custom_tw-base-100)',
            textColor: 'var(--custom_tw-base-content)',
            codeTextColor: 'var(--custom_tw-neutral-content)',
            codeBackgroundColor: 'var(--custom_tw-neutral)', // + sidebar
            borderColor: 'var(--custom_tw-primary)',
            blockQuoteColor: 'var(--custom_tw-base-content)',
            highlightColor: 'var(--custom_tw-accent)',
            sidebarSublink: 'var(--custom_tw-base-content)',
            codeTypeColor: 'var(--custom_tw-accent)',
            // coverBackground : 'linear-gradient(to left bottom, var(--custom_tw-primary), var(--custom_tw-secondary))',
            // toogleBackground : '#ffffff', // no one knows that this is used for
        },
        light: {
            'custom_tw-primary': '#65c3c8',
            'custom_tw-secondary': '#ef9fbc',
            'custom_tw-accent': '#eeaf3a',
            'custom_tw-neutral': '#291334',
            'custom_tw-neutral-content': '#D7DDE4',
            'custom_tw-base-100': '#faf7f5',
            'custom_tw-base-200': '#efeae6',
            'custom_tw-base-300': '#e7e2df',
            'custom_tw-base-content': '#291334',

            custom_dropshadow: 'var(--custom_tw-base-200)',
            custom_sidebar: 'var(--custom_tw-base-300)',
            // custom_logo_invert: '',

            'theme-color': 'var(--accent)', // docsify search outline
            accent: 'var(--custom_tw-accent)',
            background: 'var(--custom_tw-base-100)',
            textColor: 'var(--custom_tw-base-content)',
            codeTextColor: 'var(--custom_tw-neutral-content)',
            codeBackgroundColor: 'var(--custom_tw-neutral)', // + sidebar
            borderColor: 'var(--custom_tw-accent)',
            blockQuoteColor: 'var(--custom_tw-base-content)',
            highlightColor: 'var(--custom_tw-accent)',
            sidebarSublink: 'var(--custom_tw-base-content)',
            codeTypeColor: 'var(--custom_tw-accent)',
            // coverBackground : 'linear-gradient(to left bottom, var(--custom_tw-primary), var(--custom_tw-secondary))',
            // toogleBackground : '#ffffff', // no one knows that this is used for
        },
    },
};
