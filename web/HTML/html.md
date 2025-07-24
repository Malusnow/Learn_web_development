## HTML基础

```HTML
<h1>这是一个标题</h1>
<p>这是一个段落</p>
<a href="http://www.runoob.com">这是一个链接</a>
<br/>
<img src="/images/logo.png" width="258" height="39" />
<br/> 换行
```

### 全局属性

- 指定唯一标识符`<div id="header">header</div>`
- 提供一个或多个类名`<div class="text">text</div>`
- 直接在元素上应用css样式`<p style="color:blue;font-size:14px;">styled para</p>`
- 提示信息，鼠标悬停显示
  `<abbr title="HyperText Markup Language">HTML</abbr>`

### 特定元素属性

- 比如前文的href,src
- alt（用于 `<img>` 元素）：为图像提供替代文本，当图像无法显示时显示。`<img src="image.jpg" alt="An example image">`
- type 指定输入控件的类型`<input type="text" placeholder="Enter your name">`
- value 指定元素初始值
  `<input type="text" value="Default Value">`

### HTML中的空白

无论你在 HTML 元素内容中使用了多少空白（可以包括一个或多个空格字符，也包括换行），HTML 解析器在渲染代码时都会将每个空白序列减少为单个空格。
```
<p id="noWhitespace">狗狗很 呆 萌。</p>

<p id="whitespace">狗狗很
    呆
        萌。</p>
```
最后呈现效果相同。

### 字符引用

在 HTML 中，字符 <、>、"、' 和 & 是特殊字符。它们是 HTML 语法本身的一部分。那么你如何在文本中包含这些特殊字符之一呢？例如，如果你想使用一个与号或小于号，而不是让它被解释为代码。

你需要使用字符引用。这些是代表字符的特殊代码，用于在这些确切的情况下使用。每个字符引用都以一个与号（&）开始，并以一个分号（;）结束。
具体引用查看references
eg:
```
<p>HTML 中用 <p> 来定义段落元素。</p>

<p>HTML 中用 &lt;p&gt; 来定义段落元素</p>
```

### 注释
`<!-- -->`
```
<p>我不在注释里</p>

<!-- <p>但我在注释里</p> -->
```

## HTML元信息-头部
---
### 元数据-<meta>元素

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
### CSS,JavaScripts应用
`<link>` 元素经常位于文档的头部，它有 2 个属性，rel="stylesheet" 表明这是文档的样式表，而 href 包含了样式表文件的路径：
```
<link rel="stylesheet" href="my-css-file.css" />
```
---
`<script>` 元素也应当放在文档的头部，并包含 src 属性来指向需要加载的 JavaScript 文件路径，同时最好加上 defer 以告诉浏览器在解析完成 HTML 后再加载 JavaScript。这样可以确保在加载脚本之前浏览器已经解析了所有的 HTML 内容。这样你就不会因为 JavaScript 试图访问页面上不存在的 HTML 元素而产生错误。
```
<script src="my-js-file.js" defer></script>
```
### 为文档设定诸主语言
```
<html lang="zh-CN">
  …
</html>
```
你还可以将文档的分段设置为不同的语言。例如，我们可以把日语部分设置为日语，如下所示：
```
<p>Japanese example: <span lang="ja">ご飯が熱い。</span>.</p>
```
