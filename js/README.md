# 简介和使用

## JavaScript实现

JavaScript实现包括如下三个部分

|     核心     |      文档对象模型       |    浏览器对象模型     |
| :--------: | :---------------: | :------------: |
| ECMAScript |        DOM        |      BOM       |
|  提供核心语言功能  | 提供访问和操作网页内容的方法和接口 | 提供与浏览器交互的方法和接口 |

## script标签元素属性

> 在计算机中同步代表事情是按顺序执行，异步代表事情是同时进行的。
>
> 同步（同一个人） 异步（不同的人）

* async ：可选，表示应该立即下载脚本，但不应妨碍页面中的其他操作。

  （异步下载）只对外部脚本有效。

* defer：可选。表示脚本可以延迟到文档完全被解析和显示之后再执行。

  （延迟执行）只对外部脚本有效。

* ~~charset：设置js字符编码的方式。（很少使用）~~

* ~~language：废弃~~

* src：可选。表示包含要执行代码的外部文件。

* type：可选。可以看成是 language 的替代属性。表示编写代码使用的脚本语言的内容类型（也
  称为 MIME 类型）（很少使用）服务器在传送 JavaScript 文件时使用的MIME 类型通常是 **application/x–javascript**

  延迟脚本：

  ```html
  <script type="text/javascript" defer="defer" src="example1.js"></script>
  ```

  异步脚本：

  ```html
  <script type="text/javascript" async src="example1.js"></script>
  ```

## js运行的原理

> 包含在`<script>`元素内部的 JavaScript 代码将被从上至下依次**解释**。

* js的解释分两个过程：
  1. 预处理
  2. 执行
* js是一种阻断式的语言

> 在解释器对`<script>`元素内部的所有代码求值完毕以前（预处理和执行），页面中的其余内容都不会被浏览器加载或显示。

**js有一个预处理过程，预处理完了再执行。整个预处理加执行是一个阻断式的操作。预处理加执行放在一起才是js从上至下的解释。**

## 外部文件使用

1. src对应的外部文件不一定是js。如果不是js文件，需要对type类型做下定义

2. 同时引用了外部的js和内部的js时。js 只会执行外部的js内部的js执行内容会被忽略

3. 外部的js文件。**跨域** 

   优点：CDN加速器，便于维护，可以访问外部资源

   缺点：文件不能访问，恶意代码

4. script标签放置位置

   因js是阻断式的语言所以一般放在下面。页面渲染有关的js放在head里面（与css相关的如：rem）

5. async 和 defer能不用就不用。

## 内部文件使用 *

可扩展超文本标记语言，即 XHTML（Extensible HyperText Markup Language），是将 HTML 作为
XML 的应用而重新定义的一个标准。编写 XHTML 代码的规则要比编写 HTML 严格得多，而且直接影
响能否在嵌入 JavaScript 代码时使用`<script/>`标签。小于号（<）在 XHTML 中将被当作开始一个新标签来解析.

保证让相同代码在 XHTML 中正常运行:

第一个方式是将`<`转义为`&lt`

第二个方法，就是用一个 CData 片段来包含 JavaScript 代码。

```xhtml
<script type="text/javascript">
//<![CDATA[
function compare(a, b) {
    if (a < b) {
    	alert("A is less than B");
    } else if (a > b) {
    	alert("A is greater than B");
    } else {
    	alert("A is equal to B");
    }
}
//]]>
</script>
```

>  如果服务器返回的 MIME 类型是application/xhtml–html 会触发xhtml模式。

外部文件优点：

* 可缓存，可维护性强。

  开发时如何禁用缓存：1.浏览器设置 2.js后加随机数

内部文件优点：

* 性能提升，减少链接数。

