import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'en-US',
  title: 'MetaPro',
  description: 'MetaPro User Manual',
  base: '/MetaPro/',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/images/logo.png',
    // home: '/user-manual',
    repo: 'https://github.com/CSi-Studio/MetaPro',
    navbar: [
      {
        text: 'UserManual',
        link: '/guide/user-manual.md',
      },
    ],
  },
})
