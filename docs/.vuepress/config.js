// .vuepress/config.js
import { hopeTheme } from "vuepress-theme-hope";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { slimsearchPlugin } from '@vuepress/plugin-slimsearch'; // 这个import其实用不着了，因为theme有内置slimsearch，但留着无妨
import { appendDatePlugin } from '@vuepress/plugin-append-date'

export default defineUserConfig({
  lang: "zh-CN",
  title: "Windelingの間 文档",
  description: "属于「黄文林」的知识库、清单和说明书",

  bundler: viteBundler(),

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "keywords", content: "文档,知识库,黄文林" }],
  ],
  plugins: [
    // 只留appendDatePlugin，其他的移到theme里
    appendDatePlugin({
      // 你原来的配置，保持不变
      enable: true,
      format: "YYYY-MM-DD HH:mm",
      frontmatter: {
        createTime: "date",
        updateTime: "updated",
      },
      type: [
        "frontmatter",
        "git",
        "file",
      ],
      force: true,
      inject: true,
      template: `
        <div class="append-date-info">
          <i class="iconfont icon-calendar"></i>
          <span>撰写于：{{ createTime }}</span>
          <span v-if="updateTime && updateTime !== createTime">
            ｜ <i class="iconfont icon-update"></i> 更新于：{{ updateTime }}
          </span>
        </div>
      `,
      include: ["**/*.md"],
      exclude: ["node_modules/**", ".vuepress/**", "README.md"],
      git: {
        enabled: process.env.NODE_ENV === "production",
        cache: true,
      },
    }),
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
      { text: "文档说明", link: "/doc.md" },
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
      "/docs/": "structure",
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
      slimsearch: true,
      copyCode: { showInMobile: true },
      // 改成markdown，原来的mdEnhance选项移过来
      markdown: {
        tasklist: true,
        footnote: true,
        imageLazyload: true,  // 这个imageLazyload应该也支持，theme文档里有
      },
      search: true,  // 如果你想用slimsearch代替默认search，可以把这个关成false试试

      // 加comment配置，从你原来的commentPlugin移过来
      comment: {
        provider: 'Waline',
        serverURL: 'https://waline.windeling.com/',
        dark: "auto",
        reaction: true,
        comment: true,
      },

      // 加photoSwipe配置，从你原来的photoSwipePlugin移过来
      photoSwipe: {
        selector: ".theme-default-content img:not(.no-zoom)",
        delay: 300,
        options: {
          shareEl: false,
        },
      },
    },
  }),
});