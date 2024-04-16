window.$docsify = {
    catchPluginErrors: true,
    name: "Karloline-Hosting Infrastructure Docs",
    repo: "https://github.com/Karlo-Hosting/internal-docs/",
    // routerMode: "histroy",
    auto2top: true,
    loadSidebar: true,
    loadNavbar: false,
    mergeNavbar: true,
    logo: "/_media/logo_dark.png", // gets converted with css for dark mode
    formatUpdated: "{YYYY}-{MM}-{DD} {HH}:{mm}",
    // TODO: Enable when ToC is working
    // subMaxLevel: 1,
    // toc: {
    //     tocMaxLevel: 5,
    //     target: 'h2, h3, h4, h5, h6',
    //     ignoreHeaders:  ['<!-- {docsify-ignore} -->', '<!-- {docsify-ignore-all} -->']
    // },
    tabs: {
        persist: true,
        sync: true,
        theme: "material",
        tabComments: true,
        tabHeadings: true,
    },
    // Search config https://github.com/docsifyjs/docsify/blob/141ac96add9892fcb345551906770c4e9b2265b0/docs/index.html#L105
    search: 'auto',
    progress: {
        position: "top",
        color: "var(--accent)",
        height: "2px",
    },
    darklightTheme: {
        // Theme colors chose according to Resonite color palette
        dark: {
            custom_dropshadow_color: 'var(--codeBackgroundColor)',
            custom_logo_invert: 'invert()',
            'theme-color': 'var(--accent)',
            accent: '#ba64f2',
            toogleBackground: '#ffffff',
            background: '#2b2f35',
            textColor: '#e1e1e0',
            codeTextColor: '#e1e1e0',
            codeBackgroundColor: '#11151d',
            borderColor: '#474c50',
            highlightColor: '#ae5458',
        },
        light: {
            custom_dropshadow_color: 'var(--borderColor)',
            custom_logo_invert: '',
            'theme-color': 'var(--accent)',
            accent: '#e69e50',
            toogleBackground: '#091a28',
            background: '#fff',
            textColor: '#2b2f35',
            codeTextColor: '#11151d',
            codeBackgroundColor: '#e1e1e0',
            borderColor: '#86888b',
            highlightColor: '#ba64f2',
        },
    },
};
