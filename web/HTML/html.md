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

- 指定唯一标识符`<div id="header">header</div>`
- 提供一个或多个类名`<div class="text">text</div>`
- 直接在元素上应用css样式`<p style="color:blue;font-size:14px;">styled para</p>`
- 提示信息，鼠标悬停显示
  `<abbr title="HyperText Markup Language">HTML</abbr>`

#### 特定元素属性

- 比如前文的href,src
- alt（用于 `<img>` 元素）：为图像提供替代文本，当图像无法显示时显示。`<img src="image.jpg" alt="An example image">`
- type 指定输入控件的类型`<input type="text" placeholder="Enter your name">`
- value 指定元素初始值
  `<input type="text" value="Default Value">`

#### HTML中的空白

无论你在 HTML 元素内容中使用了多少空白（可以包括一个或多个空格字符，也包括换行），HTML 解析器在渲染代码时都会将每个空白序列减少为单个空格。
```
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
```
<p>HTML 中用 <p> 来定义段落元素。</p>

<p>HTML 中用 &lt;p&gt; 来定义段落元素</p>
```

#### 注释
`<!-- -->`
```
<p>我不在注释里</p>

<!-- <p>但我在注释里</p> -->
```

## HTML元信息-头部
---
#### 元数据-<meta>元素

- 搜索引擎中description的使用
```
<meta
  name="description"
  content="The MDN Web Docs site
  provides information about Open Web technologies
  including HTML, CSS, and APIs for both Web sites and
  progressive web apps." />
```
content中的内容将会展示在搜索界面。
- 网页自定义图标
```
<link rel="icon" href="favicon.ico" type="image/x-icon" />
```
---
这些注释解释了每个图标的用途——这些元素涵盖的东西提供一个高分辨率图标，这些高分辨率图标当网站保存到 iPad 的主屏幕时使用。
```
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
```
<link rel="stylesheet" href="my-css-file.css" />
```
---
`<script>` 元素也应当放在文档的头部，并包含 src 属性来指向需要加载的 JavaScript 文件路径，同时最好加上 defer 以告诉浏览器在解析完成 HTML 后再加载 JavaScript。这样可以确保在加载脚本之前浏览器已经解析了所有的 HTML 内容。这样你就不会因为 JavaScript 试图访问页面上不存在的 HTML 元素而产生错误。
```
<script src="my-js-file.js" defer></script>
```
#### 为文档设定诸主语言
```
<html lang="zh-CN">
  …
</html>
```
你还可以将文档的分段设置为不同的语言。例如，我们可以把日语部分设置为日语，如下所示：
```
<p>Japanese example: <span lang="ja">ご飯が熱い。</span>.</p>
```

## HTML的标题和段落

`<h1></h1>`,`<p></p>`
#### 语义的作用
在这里，h1 元素也是一个语义元素，它所包裹的文本具有“页面上的顶级标题”的作用（或意义）。
`<h1>这是一个顶级标题</h1>`
一般来说，浏览器会给它一个更大的字形来让它看上去像个标题（虽然也可以使用 CSS 让它变成任何你想要的样式）。更重要的是，它的语义值将以多种方式被使用，比如搜索引擎和屏幕阅读器。
在另一方面，你可以让任一元素看起来像一个顶级标题，考虑如下：
```
<span style="font-size: 32px; margin: 21px 0; display: block;"
  >这是顶级标题吗？</span
>
```
这是一个 <span> 元素，它没有语义。当想要对它用 CSS（或者 JavaScript）时，可以用它包裹内容，且不附加任何额外的意义（在未来的课程中你会发现更多这类元素）。我们已经对它使用了 CSS 来让它看起来像一个顶级标题。然而，**由于它没有语义值，所以它不会有任何上文提到的帮助**。最好的方法是使用相关的 HTML 元素来标记这个项目。

## 强调与重要性
- 强调 `<em></em>` 斜体强调（具有语义的强调）
- 着重强调 `<strong></strong>`(具有语义的强调)
#### 斜体，粗体，下划线
`<b>、<i> 和 <u> `的情况却有点复杂。它们出现于人们要在文本中使用粗体、斜体、下划线但 CSS 仍然不被完全支持的时期。像这样仅仅影响表象而且没有语义的元素，被称为**表现元素**（presentational element）并且不应该再被使用。因为正如我们在之前看到的，语义对无障碍、搜索引擎优化（SEO）等非常重要。
HTML5 重新定义了` <b>、<i> 和 <u>`，赋予了它们新的但有点令人困惑的语义角色。

最好的经验法则是：**只有在没有更合适的元素时，才适合使用` <b>、<i> 或 <u>` 来表达传统上用粗体、斜体或下划线表达的意思**；而通常情况下是有更合适的元素可供使用的。`<strong>、<em>、<mark> 或 <span>` 可能是更加合适的选择。

始终保持无障碍的开发理念。斜体的概念对使用屏幕阅读器的人或使用拉丁字母以外的书写系统的人没有什么帮助。

- `<i>` 被用来传达传统上用斜体表达的意义：外国文字、分类名称、技术术语、思想……
- `<b> `被用来传达传统上用粗体表达的意义：关键字、产品名称、引导句……
- `<u> `被用来传达传统上用下划线表达的意义：专有名词、拼写错误……

## 列表
#### 有序列表
```
<ul>
    <li></li>
</ul>
```
#### 无序列表
```
<ol>
    <li></li>
</ol>
```