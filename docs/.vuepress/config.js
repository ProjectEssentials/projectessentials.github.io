module.exports = {
    base: '/',
    locales: {
        '/': {
            lang: 'en-US',
            logo: '/logo.svg',
            title: 'Project Essentials',
            description: 'Take Essentials to the Minecraft'
        }
    },
    head: [
        ['link', {rel: 'icon', href: `/logo.svg`}]
    ],
    themeConfig: {
        smoothScroll: true,
        logo: '/logo.svg',
        locales: {
            '/': {
                lastUpdated: 'Last Updated',
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages',
                algolia: {},
                nav: [
                    {text: 'Download', link: '/download/'},
                    {text: 'Manual', link: '/manual/'},
                    {
                        text: 'Support',
                        link: 'https://gist.github.com/MairwunNx/fda95062618db6880ef8ee06e1bba54f'
                    },
                    {text: 'GitHub', link: 'https://github.com/ProjectEssentials'}
                ],
                sidebar: 'auto'
            }
        }
    }
}
