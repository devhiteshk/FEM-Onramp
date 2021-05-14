var SList = require("./SList");

module.exports = {
    title: '🚀Derive-Science',
    description: 'FEM-Onramp',
    base: "/FEM-Onramp/",
    head: [
        ['link', { rel: 'stylesheet', href: "<link href='https://fonts.googleapis.com/css2?family=Satisfy&display=swap' rel='stylesheet'>" }],
        ['link', { rel: "derive-science-icon", sizes: "180x180", href: "/mesh.png" }],
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Contribute', link: '/Contribute/' },
            { text: '🚀', link: 'https://Derive-science.com' }
        ],
        sidebar: ["/",
            {
                title: 'Contribute',
                collapsable: true,
                children: SList.ContList
            },
            {
                title: 'Introduction',
                collapsable: true,
                children: SList.IntroList
            },
            {
                title: 'Direct Equilibrium Method',
                collapsable: true,
                children: SList.DEMList
            }, {
                title: 'Bar Element',
                collapsable: true,
                children: SList.BEList
            }, {
                title: 'Beam Element',
                collapsable: true,
                children: SList.BeamEList
            }
        ]
    }
}