// .vuepress/config.js
import { hopeTheme } from "vuepress-theme-hope";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Windeling 文档（beta）",
  description: "属于「黄文林」的知识库、清单和说明书",

  bundler: viteBundler(),

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "keywords", content: "文档,知识库,黄文林" }],
  ],

  theme: hopeTheme({
    author: "黄文林",
    logo: "https://vuejs.press/images/hero.png",

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

    sidebar: {
      "/chat/": "structure",
      "/doc/": "structure",
      "/study/": "structure",
      "/photo/": "structure",
      "/": "structure",
    },

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

    plugins: {
      copyCode: { showInMobile: true },
      mdEnhance: {
        tasklist: true,
        footnote: true,
        imageLazyload: true,
      },
      
      search: true,
    },
  }),
});
