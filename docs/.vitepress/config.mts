import { defineConfig } from 'vitepress'
import { sidebarCn, sidebarEn } from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Manager",
  description: "Manager 产品文档",
  ignoreDeadLinks: true,
  base: '/ems/',
  //outDir: '../public/manager',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
        { text: 'Back to Home', link: 'https://www.fluxionwatt.com/en/' },
    ],
    logo: '/static/img/logo.png',
    sidebar: sidebarEn,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/fluxionwatt/ems' }
    ],
     footer: {
      message: '',
      copyright: 'Copyright © 2026 FluxionWatt Team'
    }
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/en_US',
    },
    zh_CN: {
      label: '中文',
      lang: 'zh_CN', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      link: '/zh_CN', // 默认 /zh_CN/ -- 显示在导航栏翻译菜单上，可以是外部的
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: '回到主站', link: 'https://www.fluxionwatt.com/zh-cn/' },
      ],
      sidebar: sidebarCn,
      socialLinks: [
          { icon: 'github', link: 'https://github.com/fluxionwatt/manager' }
        ]
      },
    }
  }
})
