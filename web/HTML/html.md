## HTML基础

```HTML
<h1>这是一个标题</h1>
<p>这是一个段落</p>
<a href="http://www.runoob.com">这是一个链接</a>
<br/>
<img src="/images/logo.png" width="258" height="39" />
<br/> 换行
```

## HTML属性

### 全局属性

- 指定唯一标识符  
`<div id="header">header</div>`
- 提供一个或多个类名  
`<div class="text">text</div>`
- 直接在元素上应用css样式  
`<p style="color:blue;font-size:14px;">styled para</p>`
- 提示信息，鼠标悬停显示  
`<abbr title="HyperText Markup Language">HTML</abbr>`

### 特定元素属性

- 比如前文的href,src
- alt（用于 <img> 元素）：为图像提供替代文本，当图像无法显示时显示。  
`<img src="image.jpg" alt="An example image">`
- type 指定输入控件的类型  
`<input type="text" placeholder="Enter your name">`
- value 指定元素初始值
`<input type="text" value="Default Value">`
- 