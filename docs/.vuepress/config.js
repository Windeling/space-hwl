// .vuepress/config.js
import { hopeTheme } from "vuepress-theme-hope";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Windeling 文档（beta）",
  description: "属于「黄文林」的知识库、清单和说明书",

  // 必须显式指定 bundler
  bundler: viteBundler(),

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "keywords", content: "文档,知识库,黄文林" }],
  ],

  // 插件：搜索
  plugins: [
    searchPlugin({
      // 搜索配置（可选）
      maxSuggestions: 10,
      hotKeys: ["s", "/"],
    }),
  ],

  theme: hopeTheme({
    // 作者、logo
    author: "黄文林",
    logo: "https://vuejs.press/images/hero.png",

    // 导航栏（保持你原来的）
    navbar: [
      { text: "首页", link: "/" },
      {
        text: "拾枝杂谈",
        children: [
          { text: "奇思妙想", link: "/chat/thought/" },
          { text: "朴实生活", link: "/chat/life/" },
        ],
      },
      { text: "文档说明", link: "/doc/" },
      { text: "学习笔记", link: "/study/" },
      {
        text: "摄影风光",
        children: [
          {
            text: "风光摄影",
            children: [
              { text: "山水风光", link: "/photo/landscape/mountain-water/" },
              { text: "海滨风光", link: "/photo/landscape/beach/" },
              { text: "星空摄影", link: "/photo/landscape/star/" },
            ],
          },
        ],
      },
    ],

    // ========= 侧边栏：关键修复 =========
    sidebar: {
      // 1. 首页：显示文件结构（可折叠）
      "/": [
        {
          text: "Windeling 文档",
          collapsible: true,
          collapsed: true,
          children: "structure",
        },
      ],

      // 2. 所有子目录：显示当前页面的标题目录（H2/H3）
      "/chat/": "headers",
      "/doc/": "headers",
      "/study/": "headers",
      "/photo/": "headers",
    },

    // 标题层级
    headerDepth: 3,

    // 图标
    sidebarIcon: true,

    // ========= Markdown 增强（新写法）=========
    markdown: {
      footnote: true,     // 脚注
      tasklist: true,     // 任务列表
      sup: true,          // 上标
      sub: true,          // 下标
      imageLazyload: true,
    },

    // ========= 其他功能 =========
    darkmode: "switch",
    lastUpdated: true,
    lastUpdatedText: "最后更新",
    editLink: true,
    editLinkPattern: ":repo/edit/:branch/:path",
    editLinkText: "在 GitHub 上完善此页面",
    repo: "Windeling/space-hwl",
    repoLabel: "GitHub",
    docsDir: "docs",
    docsBranch: "main",
    contributors: true,
    contributorsText: "贡献者",

    // 代码复制
    plugins: {
      copyCode: { showInMobile: true },
    },
  }),
});
