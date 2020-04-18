## CSSStyleSheet对象

当我们去编写HTML的时候，通过link标签引入一个css文件或者通过style标签来创建一个内部的样式文件的时候，浏览器都会对应的创建一个CSSStyleSheet对象。CSSStyleSheet对象允许开发者对它进行增删改查的操作，我们也可以通过js来操作这个对象从而达到修改页面样式的目的。

## 获取CSSStyleSheet对象

1.  在页面的document对象上有一个叫做styleSheet的属性，这个styleSheet属性就包含了你在页面上创建的所有style标签或者引入的所有的css文件。它是由这两个东西组成的合集StyleSheetList。这个合集StyleSheetList是一个伪数组，我们可以通过索引的方式访问它内部的对象，在这个合集当中每一个对象就对应了你引入的css文件或者你创建的style标签。

   ```js
   document.styleSheets[0] //CSSStyleSheet
   ```

2. 可以先通过DOM节点的方式。比如对link标签或者style标签增加一个id，就可以通过document.getElementById()的方式，先把这个节点获取到，在这个节点上有一个叫做sheet的属性，这个属性也对应了当前的样式它的一个CSSStyleSheet对象（IE的这个属性叫做styleSheet）

   ```js
   var cssElement = document.getElementById("csslink")
   var sheet =cssElement.sheet||cssElement.styleSheet
   //CSSStyleSheet
   ```

## CSSStyleSheet对象的属性

`document.styleSheets[0]`

* **cssRules**

  伪数组，cssRules包含了当前的css文件或者是style文件里面的一条条的规则，里面的每一条规则会以一个CSSStyleRule对象的形式存在这个伪数组里。(IE是rules)

* **disabled**

  控制当前的css文件是否生效的，通常情况下他的值都是false。如果想禁用页面上的某一个css文件，你可以把他的disabled的属性设置为true，当前的文件就被禁用掉了。

* href

  如果样式表是通过<link>引用的，则是样式表的 URL；否则，是 null。

* media

  响应式开发时可能会被用到。它对应了当前样式表所支持的媒体类型的合集MediaList

* ownerNode

  当前的styleSheet对象它所在的一个DOM节点，通常情况下就时link标签或者style标签。如果是通过import导入的这个属性返回的就是null

* ownerRule

  表示当前样式表是否通过import规则来引入的，如果是就会返回这个规则如果不是就返回null

* parentStyleSheet

  当前样式文件是包含在那个样式表当中，通常为null

* title，type：引入的DOM节点它上面title值和type值

## CSSStyleRule对象的属性

CSSStyleSheet对象上的cssRules属性，也是一个伪数组，伪数组里面的每一项都是css的一条规则，这个规则会以一个CSSStyleRule对象的形式存在。

`document.styleSheets[0].cssRules[0]`

* **cssText**

  对应当前的样式规则他的一个完整的文本。如：`"body { padding: 0px; }"`

* **selectorText**

  获取选择器名称。完整的规则有两部分组成，第一部分是前面的选择器，第二部分是css样式声明。

* **style**

  获取样式声明，它是一个 CSSStyleDeclaration对象。可以通过js对它进行设置或取得上面的值。通过DOM节点上的style对象的属性来操作页面上的样式时操作的也是**CSSStyleDeclaration**对象。

* parentRule

  表示当前的规则是否是导入的，如果是使用import导入的那么这个属性就会指向导入的规则，如果不是就返回null

* parentStyleSheet

  获取上层的样式表

* type

  对应一个整数值，每一个整数值都代表了一种样式规则：

  * 样式规则
  * 输入规则
  * media规则
  * 字体规则

## CSSStyleDeclaration对象

### css的操作

在我们通过js来控制页面显示过程的时候所有的操作都是通过操作CSSStyleDeclaration对象来实现的。

CSSStyleDeclaration对象是绑定在CSSStyleRule.style属性上的。这个style属性它也是一个伪数组，这个伪数组跟其他伪数组不一样，它包含了当前的样式规则所有的样式。

* 数组下标形式

  ```js
  document.styleSheets[1].cssRules[0].style[0]
  //"padding-top"
  ```

  我们可以通过数组下标的形式对它下面的属性进行访问。访问得到的是每一条样式规则的详细名称（简写变为全写）以字符串的形式存在每一个数组下标下并且是只读的。

* cssText

  ```js
  document.styleSheets[1].cssRules[0].style.cssText
  // "padding: 0px;"
  ```

  开发人员写入的全部规则的文本。

* length

  ```js
  document.styleSheets[1].cssRules[0].style.length
  // 4
  ```

  当前规则所对应的详细数量。详细数量是指非简写的所有规则。

* 设置

  * 直接修改/设置样式规则

    ```js
    document.styleSheets[0].cssRules[0].style.color="red"
    ```

    修改或者设置样式规则内部的样式，可以直接对style属性上对应的规则进行修改

  * 通过setProperty()方法设置

    ```js
    document.styleSheets[1].cssRules[0].style.setProperty('color',"blue","important")
    ```

    setProperty() 接收三个参数：1，样式的名称。2，要设置的值。3，代表优先级，通常情况下可以不写，要写的话只有一个合法值“importend”

* 读取

  * 直接读取

    ```js
    document.styleSheets[1].cssRules[0].style.color
    // blue
    ```

  * 通过getPropertyValue()方法读取

    ```js
    document.styleSheets[1].cssRules[0].style.getPropertyValue("color")
    // blur
    ```

  * 是否包含important

    ```js
    document.styleSheets[1].cssRules[0].style.getPropertyPriority("color")
    //"important" 没有时返回 ""
    ```

  注意⚠️

  1. 当我们使用style属性去读取值的时候，这个style属性是一个对象，获取对象上的属性有两种方式：第一种是使用 ‘.’ 直接跟上属性名称。第二种方式是使用[]然后里面用字符串的形式跟上属性名。通过“.”的方式要把带有连字符的名称改成驼峰命名。通过[]的形式对驼峰式命名和连字符式的命名都可以识别。建议使用[]使用连字符的形式保持统一
  2. 在读取值的过程当中，最后返回的结果不一定是准确的，而且这种情况通常发生在你去读取一个复合样式的时候。对于复合样式读取的时候最好去读取最小单位的样式规则。

* 删除

  * 通过style把样式直接设置为""

    ```js
    document.styleSheets[1].cssRules[0].style.color=''
    ```

  * removeProperty()方法

    ```js
    document.styleSheets[1].cssRules[0].style.removeProperty("color")
    ```

    只接收一个参数，要删除的样式规则的字符串。返回当前样式对应的值。

### css的检测

css发展比较快，有很多新的属性会随着浏览器的版本的更新一步步推出。为了保持浏览的兼容在设置样式的时候，尤其是一些新的样式的时候，我们先要查看下当前的浏览器是否支持这种样式，这种操作就叫css模块检测。

如果浏览器支持某个css样式，在style上就会有对应的属性，读取对应属性你就会得到一个字符串，即使没有对这个属性设置值也会得到一个空的字符串。如果浏览器不支持，这时读取对应的值会得到一个undefined。

三种检测方式：

* 使用in操作符

  ```js
  var style = document.styleSheets[0].cssRules[0].style
  "flex" in style // true
  ```

* typeof 操作符

  ```js
  typeof style.flex // "string"
  ```

* 判断是否是undefined

  ```js
  style.flex === undefined
  ```

注意：带有前缀的样式检查判断。把前缀放到数组里拿数组做一个循环，判断当前的属性是否在style上是就返回true，都不是就返回false。

## 插入一条新的样式规则

CSSStyleSheet对象上调用一个insertRule()方法。

```js
document.styleSheets[1].insertRule("#app{color:red}",document.styleSheets[1].rules.length)
// 选中文档中的一个样式表对象CSSStyleSheet，在它上面调用insertRule()方法
```

接收两个参数：

 	1. 表示css规则的一个字符串。比如：“.div3{color:red;}”
 	2. 可选，表示把这个规则插入到样式表的那个位置。默认为0，插入到当前样式表的最前面，也可以通过length属性插入到当前样式表的最后面。

注意：

1. 插入新规则的时候，有很多情况会发生错误，而且错误的规则是比较复杂的。如果希望程序稳定运行可以将这个插入规则写到一个try catch语句中

   * 插入的是多条规则报错

   * 插入的位置大于现在的规则总数

   * 插入的规则存在语法错误。虽然写css的时候很多语法错误会被浏览器自动纠正但是通过js插入规则的时候，如果出现字符串形式的语法错误这个时候也会报错。针对这种情况我们很多时候在插入的时候插入一个空的规则。

     `document.styleSheets[1].insertRule("#app{}")`然后通过style详细的去修改里面的值。

   * 新规则插入的索引位置不正确。只有插入的是import规则时会发生这种错误。因为import是要插入最前面的。

   * 插入的新规则是一个命名空间规则nameSpace规则。而且在你当前样式列表中已经存在了一个和它相冲突的import规则或者nameSpace规则。

2. IE浏览器没有提供insertRule()方法。提供了addRule()方法，它接收三个参数：规则的名称，规则的值，要插入的索引。使用addRule()不需要使用{}

## 删除规则

CSSStyleSheet对象上调用一个deleteRule()方法。

```js
document.styleSheets[1].deleteRule
```

只接收一个参数：索引 没有返回值

注意：

1. 和添加的5种情况一样会报错。放在try catch语句中
2. IE是remoutRule() 参数也是一个索引

## 总结

```js
//第一层：styleSheets代表页面引入的所有css文件。
document.styleSheets //得到伪数组对象StyleSheetList
//第二层：CSSStyleSheet对象，代表当前具体的一个样式表
document.styleSheets[0]
//第三层：cssRules 样式表中的所有规则合集
document.styleSheets[0].cssRules// 得到伪数组对象CSSRuleList
//第四层：CSSStyleRule 当前具体的一条css规则
document.styleSheets[0].cssRules[0]
//第五层：style 用于操作具体的样式
document.styleSheets[0].cssRules[0].style //得到 CSSStyleDeclaration 伪数组对象，当前样式规则的所有样式
```

所有的js都是通过操作CSSStyleDeclaration对象实现的。脚本化css最终操作的都是CSSStyleDeclaration对象。

## css对象

 css对象是浏览器原生提供的。它提供了两个操作方法：

* CSS.escape() 用于css转义

  ```html
  <div id="app"></div>
  <div id="progroum#top">
      id可以设置特殊字符,但在css选择器中就选不到了
  </div>
  ```

  ```js
  document.querySelector("#app")//正常选择id
  document.querySelector("#progroum\\#top") // 两个反斜杠
  document.querySelector("#"+ CSS.escape("progroum#top"))
  // 使用CSS.escape转义
  ```

*   CSS.supports()

  返回一个布尔值，表示当前浏览器环境是否支持某种css规则语句。

  参数有两种写法：

  1. 传两个参数：属性名和属性值 (建议使用这种)

     ```js
     CSS.supports("color","red")
     ```

  2. 传一个参数：一个完整的css规则

     ```js
     CSS.supports("display: block")
     ```

