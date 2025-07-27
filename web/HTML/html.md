## HTML基础

```HTML
<h1>这是一个标题</h1>
<p>这是一个段落</p>
<a href="http://www.runoob.com">这是一个链接</a>
<br/>
<img src="/images/logo.png" width="258" height="39" />
<br/> 换行
```

#### 全局属性

- 指定唯一标识符 `<div id="header">header</div>`
- 提供一个或多个类名 `<div class="text">text</div>`
- 直接在元素上应用css样式 `<p style="color:blue;font-size:14px;">styled para</p>`
- 提示信息，鼠标悬停显示
  `<abbr title="HyperText Markup Language">HTML</abbr>`

#### 特定元素属性

- 比如前文的href,src
- alt（用于 `<img>` 元素）：为图像提供替代文本，当图像无法显示时显示。`<img src="image.jpg" alt="An example image">`
- type 指定输入控件的类型 `<input type="text" placeholder="Enter your name">`
- value 指定元素初始值
  `<input type="text" value="Default Value">`

#### HTML中的空白

无论你在 HTML 元素内容中使用了多少空白（可以包括一个或多个空格字符，也包括换行），HTML 解析器在渲染代码时都会将每个空白序列减少为单个空格。

```html
<p id="noWhitespace">狗狗很 呆 萌。</p>

<p id="whitespace">狗狗很
    呆
        萌。</p>
```

最后呈现效果相同。

#### 字符引用

在 HTML 中，字符 <、>、"、' 和 & 是特殊字符。它们是 HTML 语法本身的一部分。那么你如何在文本中包含这些特殊字符之一呢？例如，如果你想使用一个与号或小于号，而不是让它被解释为代码。

你需要使用字符引用。这些是代表字符的特殊代码，用于在这些确切的情况下使用。每个字符引用都以一个与号（&）开始，并以一个分号（;）结束。
具体引用查看references
eg:

```html
<p>HTML 中用 <p> 来定义段落元素。</p>

<p>HTML 中用 &lt;p&gt; 来定义段落元素</p>
```

#### 注释

`<!-- -->`

```html
<p>我不在注释里</p>

<!-- <p>但我在注释里</p> -->
```

## HTML元信息-头部

---

#### 元数据-`<meta>`元素

- 搜索引擎中description的使用

```html
<meta
  name="description"
  content="The MDN Web Docs site
  provides information about Open Web technologies
  including HTML, CSS, and APIs for both Web sites and
  progressive web apps." />
```

content中的内容将会展示在搜索界面。

- 网页自定义图标

```html
<link rel="icon" href="favicon.ico" type="image/x-icon" />
```

---

这些注释解释了每个图标的用途——这些元素涵盖的东西提供一个高分辨率图标，这些高分辨率图标当网站保存到 iPad 的主屏幕时使用。

```html
<!-- 含有高分辨率 Retina 显示屏的 iPad Pro：-->
<link
  rel="apple-touch-icon"
  sizes="167x167"
  href="/apple-touch-icon-167x167.png" />
<!-- 三倍分辨率的 iPhone：-->
<link
  rel="apple-touch-icon"
  sizes="180x180"
  href="/apple-touch-icon-180x180.png" />
<!-- 没有 Retina 的 iPad、iPad mini 等：-->
<link
  rel="apple-touch-icon"
  sizes="152x152"
  href="/apple-touch-icon-152x152.png" />
<!-- 二倍分辨率的 iPhone 和其他设备：-->
<link rel="apple-touch-icon" href="/apple-touch-icon-120x120.png" />
<!-- 基本图标 -->
<link rel="icon" href="/favicon.ico" />
```

#### CSS,JavaScripts应用

`<link>` 元素经常位于文档的头部，它有 2 个属性，rel="stylesheet" 表明这是文档的样式表，而 href 包含了样式表文件的路径：

```html
<link rel="stylesheet" href="my-css-file.css" />
```

---

`<script>` 元素也应当放在文档的头部，并包含 src 属性来指向需要加载的 JavaScript 文件路径，同时最好加上 defer 以告诉浏览器在解析完成 HTML 后再加载 JavaScript。这样可以确保在加载脚本之前浏览器已经解析了所有的 HTML 内容。这样你就不会因为 JavaScript 试图访问页面上不存在的 HTML 元素而产生错误。

```html
<script src="my-js-file.js" defer></script>
```

#### 为文档设定诸主语言

```html
<html lang="zh-CN">
  …
</html>
```

你还可以将文档的分段设置为不同的语言。例如，我们可以把日语部分设置为日语，如下所示：

```html
<p>Japanese example: <span lang="ja">ご飯が熱い。</span>.</p>
```

## HTML的标题和段落

`<h1></h1>`,`<p></p>`

#### 语义的作用

在这里，h1 元素也是一个语义元素，它所包裹的文本具有“页面上的顶级标题”的作用（或意义）。
`<h1>这是一个顶级标题</h1>`
一般来说，浏览器会给它一个更大的字形来让它看上去像个标题（虽然也可以使用 CSS 让它变成任何你想要的样式）。更重要的是，它的语义值将以多种方式被使用，比如搜索引擎和屏幕阅读器。
在另一方面，你可以让任一元素看起来像一个顶级标题，考虑如下：

```html
<span style="font-size: 32px; margin: 21px 0; display: block;"
  >这是顶级标题吗？</span
>
```

这是一个 `<span>` 元素，它没有语义。当想要对它用 CSS（或者 JavaScript）时，可以用它包裹内容，且不附加任何额外的意义（在未来的课程中你会发现更多这类元素）。我们已经对它使用了 CSS 来让它看起来像一个顶级标题。然而，**由于它没有语义值，所以它不会有任何上文提到的帮助**。最好的方法是使用相关的 HTML 元素来标记这个项目。

## 强调与重要性

- 强调 `<em></em>` 斜体强调（具有语义的强调）
- 着重强调 `<strong></strong>`(具有语义的强调)

#### 斜体，粗体，下划线

`<b>、<i> 和 <u> `的情况却有点复杂。它们出现于人们要在文本中使用粗体、斜体、下划线但 CSS 仍然不被完全支持的时期。像这样仅仅影响表象而且没有语义的元素，被称为**表现元素**（presentational element）并且不应该再被使用。因为正如我们在之前看到的，语义对无障碍、搜索引擎优化（SEO）等非常重要。
HTML5 重新定义了 ` <b>、<i> 和 <u>`，赋予了它们新的但有点令人困惑的语义角色。

最好的经验法则是：**只有在没有更合适的元素时，才适合使用 ` <b>、<i> 或 <u>` 来表达传统上用粗体、斜体或下划线表达的意思**；而通常情况下是有更合适的元素可供使用的。`<strong>、<em>、<mark> 或 <span>` 可能是更加合适的选择。

始终保持无障碍的开发理念。斜体的概念对使用屏幕阅读器的人或使用拉丁字母以外的书写系统的人没有什么帮助。

- `<i>` 被用来传达传统上用斜体表达的意义：外国文字、分类名称、技术术语、思想……
- `<b> `被用来传达传统上用粗体表达的意义：关键字、产品名称、引导句……
- `<u> `被用来传达传统上用下划线表达的意义：专有名词、拼写错误……

## 列表

#### 有序列表

```html
<ul>
    <li></li>
</ul>
```

#### 无序列表

```html
<ol>
    <li></li>
</ol>
```

practice见play/list.html

#### 描述列表

描述列表使用与其他列表类型不同的包裹标签——`<dl>`；此外，每一项都用 `<dt>`（description term，描述术语）元素包裹。每个描述都用 `<dd>`（description definition，描述定义）元素包裹。

单个术语的多个描述

```html
<dl>
  <dt>旁白</dt>
  <dd>
    戏剧中，为渲染幽默或戏剧性效果而进行的场景之外的补充注释念白，只面向观众，内容一般都是角色的感受、想法、以及一些背景信息等。
  </dd>
  <dd>
    写作中，指与当前主题相关的一段内容，通常不适于直接置于内容主线中，因此置于附近的其他位置（通常位于主线内容旁边一个文本框内）。
  </dd>
</dl>
```

## 文档与网站架构

#### 文档的基本组成部分

视觉效果并不是一切。我们可以修改最重要内容（例如导航菜单和相关链接）的颜色、字体大小来吸引用户的注意，但是这对视障人士是无效的，“粉红色”和“大字体”对他们并不奏效。
可使用元素来无歧义地表示上文所讲的内容区段，屏幕阅读器等辅助技术可以识别这些元素，并帮助执行“找到主导航“或”找到主内容“等任务。

- `<header>`：页眉。
- `<nav>`：导航栏。
- `<main>`：主内容。主内容中还可以有各种子内容区段，可用`<article>`、`<section>` 和 `<div>` 等元素表示。
- `<aside>`：侧边栏，经常嵌套在 `<main>` 中。
- `<footer>`：页脚。

#### HTML布局元素细节

- `<main>` 存放每个页面独有的内容。每个页面上只能用一次 ` <main>`，且直接位于 `<body>` 中。最好不要把它嵌套进其他元素。
- `<article>` 包围的内容即一篇文章，与页面其他部分无关（比如一篇博文）。
- `<section>` 与 `<article>` 类似，但 `<section>`更适用于组织页面使其按功能（比如迷你地图、一组文章标题和摘要）分块。一般的最佳用法是：以 标题 作为开头；也可以把一篇 `<article> `分成若干部分并分别置于不同的 `<section>`中，也可以把一个区段 `<section>` 分成若干部分并分别置于不同的 `<article>` 中，取决于上下文。
- `<aside> `包含一些间接信息（术语条目、作者简介、相关链接，等等）。
- `<header> `是简介形式的内容。如果它是 `<body> `的子元素，那么就是网站的全局页眉。如果它是 `<article>`或 `<section>` 的子元素，那么它是这些部分特有的页眉（此 `<header>`非彼标题）。
- `<nav> `包含页面主导航功能。其中不应包含二级链接等内容。
- `<footer>` 包含了页面的页脚部分。

`<span>`内联的无语义元素
`<div>`块级无语义元素
（不可滥用无语义元素）
`<br>`换行 `<hr>`渲染后是一条直线分割线
## 文本格式进阶
#### 引用
- 块引用 `<blockquote>`
```html
<p>这是块引用：</p>
<blockquote
  cite="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/blockquote">
  <p>
    <strong>HTML <code>&lt;blockquote&gt;</code> 元素</strong>（或<em
      >HTML 块级引用元素</em
    >）表示所附文本为扩展引用。
  </p>
</blockquote>
```
- 行内引用
```html
<p>
  引用元素 <code>&lt;q&gt;</code> 是<q
    cite="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/q"
    >用于不需要段落分隔的短引用。</q
  >
</p>
```
- 引文
```html
<p>
  根据<a href="/zh-CN/docs/Web/HTML/Element/blockquote"><cite>MDN 块引用页</cite></a>：
</p>

<blockquote
  cite="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/blockquote">
  <p>
    <strong>HTML <code>&lt;blockquote&gt;</code> 元素</strong>（或<em>HTML 块级引用元素</em>）表示所附文本为扩展引用。
  </p>
</blockquote>

<p>
  引用元素 <code>&lt;q&gt;</code> 是<q cite="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/q">用于不需要段落分隔的短引用。</q>——<a href="/zh-CN/docs/Web/HTML/Element/q"> <cite>MDN q 页面</cite></a>
</p>
```
**另外**,需要强调的是
块引用（blockquote）元素的 `cite` 属性用于指定被引用内容的来源 URL。

作用和特点：

**指定引用来源**：`cite` 属性的值应该是一个有效的 URL，指向被引用内容的原始来源，比如文章、书籍、演讲等的网址。

**语义化标记**：它为引用提供了语义化的来源信息，有助于搜索引擎和辅助技术理解内容的出处。

**不直接显示**：`cite` 属性的内容通常不会在页面上直接显示给用户，它主要用于提供元数据。

使用示例：

```html
<blockquote cite="https://example.com/article">
  <p>这是一段引用的文字内容。</p>
</blockquote>
```

注意事项：

- 如果需要在页面上显示引用来源，通常会结合使用 `<cite>` 元素
- `cite` 属性应该包含完整的 URL，而不是相对路径
- 这个属性主要用于机器可读的语义信息，对 SEO 和可访问性有帮助

虽然 `cite` 属性不会直接影响页面的视觉呈现，但它是 HTML 语义化的重要组成部分，有助于创建更有意义和结构化的网页内容。
#### 缩略语
```html
<p>我们使用 <abbr>HTML</abbr> 超文本标记语言来组织网页文档。</p>

<p>
  第 33 届<abbr title="夏季奥林匹克运动会">奥运会</abbr>已于 2024 年 7
  月在法国巴黎举行。
</p>
```

**此外**,还有其他标记元素
`<address></address>`
`<sub></sub>`,`<sup></sup>`
`<code></code>`等等
