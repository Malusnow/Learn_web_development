# CSS学习笔记

## 选择器

### id选择器
以“`#`”来定义
```
#para1
{
    text-align:center
    color:red
}
```
### class选择器
类选择器以一个`.`来显示
```
.center{
    text-align:center
}
```
## CSS background

### color
```
body{
    background-color:#b0c4de
}
```
十六进制 #ff0000  
RGB rgb(255,0,0)  
名称 red
### image

```
body{
    background-image:url('gradient.png')
}
```
平铺方向
background-repeat:  
repeat-x/repeat-y/no-repeat

## CSS Text

### 文本的对齐方式

当text-align设置为"justify"，每一行被展开为宽度相等，左，右外边距是对齐
```
h1{text-align:center;}
p.date{text-align:right;}
p.main{text-align:justify;}
```
### 文本修饰

```
a {text-decoration:none;}
h1 {text-decoration:overline;}
h2 {text-decoration:line-through;}
h3 {text-decoration:underline;}
```
### 文本转换
```
大写 text-transform:uppercase
小写 text-transform:lowercase
单词开头 text-transform:capitalize
```
### 文本缩进
text-indent：50px

## CSS Fonts
font-family:"Times New Roman",Times,serif  
如果系统不支持第一种，将尝试逗号后的

font-style:normal(italic/oblique)  

font-size:50px  

font-weight:normal/lighter/bold
## CSS列表

list-style-type:circle/square/upper-roman/lower-alpha

list-style-image:url()

list-style:circle url()

## CSS Table


