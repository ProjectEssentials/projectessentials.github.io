module.exports = {
    base: '/',
    locales: {
        '/': {
            lang: 'en-US',
            logo: '/logo.svg',
            title: 'Project Essentials',
            description: 'Make forge servers great again. 🎉'
        },
        '/ru/': {
            lang: 'ru-RU',
            logo: '/logo.svg',
            title: 'Project Essentials',
            description: 'Make forge servers great again. 🎉'
        }
    },
    themeConfig: {
        smoothScroll: true,
        logo: '/logo.svg',
        locales: {
            '/': {
                lastUpdated: 'Last Updated',
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                algolia: {},
                nav: [
                    { text: 'Home', link: '/' },
                    { text: 'Download', link: '/download/' },
                    { text: 'User Guide', link: '/guide/' },
                    { text: 'API', link: '/api/' },
                    { text: 'About', link: '/about/' },
                    { text: 'Support', link: 'https://gist.github.com/MairwunNx/fda95062618db6880ef8ee06e1bba54f' },
                    { text: 'GitHub', link: 'https://github.com/ProjectEssentials' }
                ],
                sidebar: 'auto'
            },
            '/ru/': {
                lastUpdated: 'Последнее обновление',
                selectText: 'Языки',
                label: 'Русский',
                editLinkText: 'Отредактируйте эту страницу на GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "Контент на этой странице был изменен.",
                        buttonText: "Обновить"
                    }
                },
                nav: [
                    { text: 'Главная', link: '/ru/' },
                    { text: 'Скачать', link: '/ru/download/' },
                    { text: 'Руководство пользователя', link: '/ru/guide/' },
                    { text: 'API', link: '/ru/api/' },
                    { text: 'О проекте', link: '/ru/about/' },
                    { text: 'Поддержать', link: 'https://gist.github.com/MairwunNx/fda95062618db6880ef8ee06e1bba54f' },
                    { text: 'GitHub', link: 'https://github.com/ProjectEssentials' }
                ],
                algolia: {},
                sidebar: 'auto'
            }
        }
    }
}