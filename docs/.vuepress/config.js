module.exports = {
    title: 'WangJL17\'s blog',
    description: '不做咸鱼~',
    themeConfig:{
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'Leetcode', link: '/leetcode/'}
        ],
        sidebar: {
            '/guide/': require('../guide/sidebar'),
            '/leetcode': require('../leetcode/sidebar'),
        }
    },    
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }]
    ],
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
}