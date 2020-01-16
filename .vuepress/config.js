const sidebar = require('./config/sidebar.js');
const nav = require('./config/nav.js');

module.exports = {
    title: "冷云",
    description: "冷云的博客",
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    base: '/',
    port: '8089',
    extraWatchFiles: [
    '.vuepress/*.js', // 使用相对路径
    '/js/*.md'   // 使用绝对路径
    ],
    dest: './dist',
    themeConfig: {
        logo: '/img/logo.png',
        // navbar: false, //禁用头部导航
        nav: nav,
        sidebar: sidebar,
        sidebarDepth: 2, //标题深度，最大2到H3
        displayAllHeaders: true
    }

}