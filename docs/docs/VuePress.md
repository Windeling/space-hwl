---
title: Markdown 全能语法备忘录
date: 2025-11-08
updated: 2025-11-09
tabs: true
math: true
shiki: true
chart: true
---
# Markdown 语法 & 扩展展示备忘录

## 1. 标准 Markdown 基础（VuePress 原生支持）
这些是基础中的基础，啥插件都不用。

### 标题 & 强调
# 大标题 H1
## 中标题 H2
### 小标题 H3

**粗体**，*斜体*，~~删除线~~，`内联代码`。

### 列表
- 无序列表1
  - 子项
- 无序列表2

1. 有序列表1
2. 有序列表2

### 表格
| 列1 | 列2 | 列3 |
|-----|-----|-----|
| A   | B   | C   |
| X   | Y   | Z   |

### 链接 & 图片
[黄文林的GitHub](https://github.com/Windeling)

![随机图](https://picsum.photos/400/200) （点我放大，photo-swipe自动搞）

![别放大](https://picsum.photos/100/50){no-view} （加{no-view}禁放大）

### 图片扩展（markdown-image插件）
插件解锁更多图片玩法，懒加载/大小/标记/模式/figure自动生效。

- 大小指定：
  ```
  ![alt](https://picsum.photos/300/200=300x200)
  ```
  （指定宽高300x200）

- Obsidian大小：
  ```
  ![alt | 300x200](https://picsum.photos/300/200)
  ```
  （alt后加 | 宽x高）

- 标记：
  ```
  [!tip] ![alt](https://picsum.photos/200/100)
  ```
  （加tip标记，如彩框）

- 颜色模式：
  ```
  ![alt](https://picsum.photos/200/100#light)
  ![alt](https://picsum.photos/200/100#dark)
  ```
  （只在light/dark模式显示）

- Figure（带标题）：
  ```
  ![图片标题 | alt文字](https://picsum.photos/400/200)
  ```
  （自动<figcaption>图片标题</figcaption>）

- 懒加载：自动加 loading="lazy"（无需手动写，图片延迟加载）

（这些扩展让图片更灵活，结合photo-swipe放大超爽）

### 代码块（基础）
```
console.log('基础代码块')
```

```js
// 带语言高亮（shiki插件提升，但原生也行）
console.log('JS 代码')
```

## 2. 任务列表（markdown-ext 或 Hope 原生）
- [x] 已完成任务（勾勾方框）
- [ ] 未完成任务

## 3. 脚注（markdown-ext）
这句有脚注[^1]，超实用。

[^1]: 脚注描述，点我跳回来。

## 4. 上标 & 下标（markdown-ext）
化学式 H~2~O，水！数学 X^2^ + Y^2^ = Z^2^。

## 5. 自定义容器（markdown-ext 或 Hope 原生）
::: tip 提示
这是一条温馨提示，绿色框。
:::

::: warning 警告
别乱删代码，不然爆炸！
:::

::: danger 危险
天打雷劈区。
:::

::: details 折叠详情
点我展开隐藏内容。
:::

自定义 !!黄文林其实markdown-ext自定义!!

## 6. 数学公式（markdown-math）
行内：Euler $e^{i\pi} + 1 = 0$

块级：
$$
\int_0^1 x^2 dx = \frac{1}{3}
$$




## 7. 选项卡（tabs，Hope 自带）
::: tabs

@tab Vue 🍏
```vue
<script setup>
console.log('Vue 牛逼')
</script>
```

@tab React ⚛️
```tsx
function App() {
  return <div>React 也好</div>
}
```

@tab Svelte 🔥
```svelte
<script>
  let name = 'Svelte'
</script>
<h1>Hello {name}!</h1>
```

:::

（点切换，手机滑，记住上次选）




## 8. 代码选项卡（Hope 自带 code-tabs）
安装 VuePress:

::: code-tabs#shell

@tab pnpm

```bash
pnpm add -D vuepress
```

@tab yarn

```bash
yarn add -D vuepress
```

@tab:active npm

```bash
npm i -D vuepress
```

:::

安装 VuePress Theme Hope:

::: code-tabs#shell

@tab pnpm

```bash
pnpm add -D vuepress-theme-hope
```

@tab yarn

```bash
yarn add -D vuepress-theme-hope
```

@tab:active npm

```bash
npm i -D vuepress-theme-hope
```

:::




## 9. 样式化文字（markdown-stylize）
*推荐* 用这个，*必须* 带电池！doesn't work（n't红字）。VuePress ==超牛逼==（荧光高亮）。




## 10. 高级代码高亮（shiki）
```ts
// 悬浮看类型！
const user = { name: "黄文林", age: 18 }
console.log(user.name.toUpperCase())
//    ^?
```

```js
// 行号 + 高亮2/4行
console.log("1")
console.log("2 !!")  // 橙色高亮
console.log("3")
console.log("4 ==")  // 黄色高亮
```

```diff
- 旧代码：bug多
+ 新代码：丝滑
  不变行
```

（shiki带行号、diff红绿、单词高亮、TS悬浮）

### 功能描述
这里描述功能的具体作用，例如这是一个计算加法的函数。

::: details 案例
#### 输入
```javascript
function add(a, b) {
  return a + b;
}


这些就是你能直接在md里玩的全部花样了