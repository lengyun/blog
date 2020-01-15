# DOM对象

DOM（文档对象模型）是用来表示HRML和XML的API（应用程序编程接口）。即平常使用的HTML对于js来讲需要使用一种数据结构来表示出来，我们把这种用js表示文档对象的模型，称之为DOM对象模型。

DOM结构比喻成家谱，对于一个DOM结构来讲，他的上层只能有一个节点，我们把这种节点称之为**父节点**。父节点下面的所有节点都称之为**子节点**。和子节点相互平行在同一个层级的节点称之为**兄弟节点**。父节点、子节点、兄弟节点构成了DOM结构。js中有DOM构成的树形结构称之为DOM树。DOM树上的每一个节点都是一个node对象。

## Node类型

js中所有的节点都是继承Node类型下的，因此这些节点都有一些公共属性和方法。

**属性：**

- nodeType

  节点类型，所有节点都可以调用这个属性，最后得到的是一个数字。这个数字是1～12 代表不同节点类型。

-  nodeName

  节点名称，返回字符串，表示当前节点名字

- nodeValue

  节点值，大部分情况下返回字符串，没有值时返回null

- childNodes 属性 ⚠️结尾有S

  子节点，返回的是对象列表NodeList 对象，伪数组对象。

- parentNode

  父节点，获取到父节点。

- previousSibling

  兄弟节点，获取前面的兄弟节点。

- nextSibling

  兄弟节点，获取后面的兄弟节点。

- firstChild

  第一个子节点

- lastChild

  最后一个子节点

- ownerDocument

  当前文档的文档节点，不存在返回null。

nodeType 、nodeName、nodeValue 是节点的公共属性。

childNodes、parentNode、previousSibling、nextSibling、firstChild、lastChild、ownerDocument 是节点之间的访问。

**方法：**

- hasChildNodes()

  是否有子节点，返回布尔值

- appendChild()

  插入子节点，接收的参数是一个Node，可以把一个节点当作参数传进去，然后在当前节点下插入子节点。这个节点是插入到最后面的。返回值是插入的子节点（没啥用）。

- insertBefore()

  指定特殊位置来插入。接收两个参数，第一个参数是要插入的节点。第二个参数是一个参照节点。通过这个方法可以在子节点的任何位置插入子节点。

- removeChild()

  删除节点，接收要删除的节点作为参数。用来删除子节点。必须在父节点上调用这个方法，传入要删掉的子节点。

- replaceChild()

  替换子节点，接收两个参数，第一个是要新插入的节点，第二个是你要替换的节点。 

- cloneNode()

  节点是复杂数据类型。接收一个布尔类型的参数，表示是否深度克隆。当你对一个节点调用cloneNode()的时候会把当前这节点克隆一份出来。他的返回值就是新克隆出来的节点。如果参数为true 就进行**深克隆**，除了克隆这个节点外还会把节点上的事件，包括这个节点下面的子节点都克隆出来。默认是false

-  normalize() 标准化

实际开发中用到的3种节点：

## Document节点

表示整个文档。它是window对象的一个属性，也是一个全局的变量。

* document.documentElement属性

  访问到的是HTML整个的节点，HTML标签是整个HTML的根节点，这个属就代表的HTML节点

* document.body属性 

  对应的是HTML上的那个body节点。

* document.title属性

  对应的是整个页面的标题。对应是title标签种的文字。可以赋值修改网页标签。

* document.domain

  包含的是网页对应的域名的信息。只能从低级域名向高级域名修改。

* document.referrer

  获取前一个页面的地址。使用场景：如果是从百度来的页面返回的时候可以知道上一个是不是百度，是的话跳到首页去。

## Element节点（文档元素节点）

用来表示HTML或XML里面的每一个元素的，Element节点是Node类型的子类，继承了node节点的所有属性和方法。

* nodeType 的值为 1；
* nodeName 的值为元素的标签名，得到的是大写的标签名；
* nodeValue 的值为 null；

Elemwnt节点另外四个常用的属性：

* id 唯一标识
* title 描述节点的相关信息
* dir 当前节点的一个语言方向。值只有两个ltr rtl
* className  元素指定的 CSS 类 class是js中的关键字，不能使用class作为属性的名称，如果访问节点中的class时，使用className这个属性。返回的是一个字符串

### 节点的查找

从全局角度获取element节点：

* document.getElementById("myDiv")

  返回查找出来的第一个匹配的id

* document.getElementsByName('aas')

  通过name属性去获取节点。返回一个nodelist伪数组

* document.getElementsByTagName("div")

  通过标签名去获取节点。返回一个nodelist伪数组

* document.getElementsByClassName("aa")

  通过class属性去获取节点。返回一个nodelist伪数组

通过css选择器来选择对应的节点：

* document.querySelectorAll("#preview")

  获得到的是一个节点列表nodeList，传递的参数是一个css选择器。

* document.querySelector("#preview")

如果已经锁定一个节点想在这个节点下面继续查找可以在节点上直接使用以上方法。？？？？？

```js
document.body.getElementsByTagName("div")
```

### 节点的创建

* document.createElement()

  接收一个字符串作为参数。一般情况会传一个标签名，除此之外还可以传一个HTML片断进去。返回创建的Node对象。然后使用appendChild()方法把它插入到某个位置。

### 节点的特性

html是多元化的东西，有很多html标签它上面有一些特有的属性我们把他叫做节点特性。比如img标签的src属性是一个字符串。有的是事件处理程序如onclick。

节点的特性可以通过**node.attribute**获取和设置。

```js
document.getElementsByTagName('a')[0].href=''
document.getElementsByTagName('img')[0].src=""
```

注意：

1. html不区分大小写，js区分大小写。所以在js中读取或设置特性需要使用小写，多个单词的使用小驼峰命名的方式。
2. 如果属性在html中可以使用在js中是关键字和保留字通常情况下会在前面加一个html。比如label标签的 for属性在js中是关键字，在js中使用htmlFor获取属性。特殊的class在js中是关键字使用className。
3. 在js中如果你去获取一个节点属性的时候，大部分情况下得到的是字符串类型，有些特殊的情况可以得到布尔类型（defaultCheck）和数字类型（maxlengs）。如果是事件处理程序得到的是函数类型。style属性得到的是一个样式对象。
4. 这些特有的属性只能用于获取和修改不能用于删除，也不能使用delet操作符删除

### 非标准特性

用于操作用户自定义特性

* getAttribute()
* setAttribute()
* hasAttribute()
* removeAttribute()

注意：

1. 使用这些方法设置和读取的这些属性都是字符串形式。可以设置和读取非标准特性也可以设置和读取标准特性。
2. 对于这些标准特性在js中是关键字的属性，都正常使用不需要额外html的转换。

### 数据集属性

非标准特殊设置自定义属性会造成html不合法。H5 增加了一个新的属性可以让用户自定义的去设置一些属性或读取一些属性。H5新增加的属性叫数据集属性。

1. **dataset 属性**对应的是一个对象，每一个你在dataset中设置的属性在html中都会被转换成 `data-属性名` 的形式。

   ```js
   //本例中使用的方法仅用于演示
   var div = document.getElementById("myDiv");
   //设置值
   div.dataset.appId = 23456;
   div.dataset.myname = "Michael";
   //取得自定义属性的值
   var appId = div.dataset.appId;
   var myName = div.dataset.myname;
   div.dataset // 返回数据集属性对象 {appId: "23456", myname: "Michael"}
   ```

   ```html
   <div id="myDiv" data-app-id="23456" data-myname="Michael">
   ```

2. 长名称属性

   html上使用 `data-app-id="23456"`  形式。

   js中获取使用 `div.dataset.appId ` 形式。

3. dataset属性是一个实时的双向接口

   当你在js当中去设置或删除dataset上面的属性的时候，就直接等于修改或删除元素上的属性。

作用：

1. html中自定义的属性合法化
2. 多个自定义属性方便维护
3. 浏览器支持dataset就说明是支持H5的浏览器，H5浏览器同时也支持css3。css3中增加了一个属性选择器的东西，通过属性选择器和dataset这两个东西结合就可以实现各种不同效果。

### 枚举element节点上的所有属性

node.attributes属性，返回的是一个伪数组，里面包含了元素节点的所有属性。这个伪数组也可以使用索引来调用对应的每一个属性的对象。除此之外你也可以使用属性的名字直接获取该名称对应的属性的值。

```js
var div = document.getElementById("myDiv");
var attr = div.attributes
//{0: id, 1: data-app-id, 2: data-myname, length: 3}
attr[0] //id= "app"
attr.id //id= "app"
```

## text节点 （文本节点）

文本节点包含的是纯文本或者转义后的HTML字符，不能包含HTML代码。

继承了node节点的属性。

- nodeType 的值为3；
- nodeName 的值为"#text"
- nodeValue 的值为节点所包含的文本；

方法：

* appendData(text)：将 text 添加到节点的末尾。
* deleteData(offset, count)：从 offset 指定的位置开始删除 count 个字
* insertData(offset, text)：在 offset 指定的位置插入 text。
* replaceData(offset, count, text)：用 text 替换从 offset 指定的位置开始到offset+count 为止处的文本。
* splitText(offset)：从 offset 指定的位置将当前文本节点分成两个文本节点。
* substringData(offset, count)：提取从 offset 指定的位置开始到 offset+count 为止处的字符串

### 创建文本节点

 document.createTextNode() 

接收一个参数就是一个字符串把字符串转换为文本节点创造出来。这个创建出来的文本节点可以插入到文档的任意位置。

引出问题，两个相邻的文本节点。

### 规范化文本节点

normalize()

在一个包含两个或多个文本节点的父元素上调用 normalize()方法，则会将所有文本节点合并成一个节点，

## 伪数组总结：

1. 函数中的参数对象argement
2. 获得的节点列表
3.  node.attributes 节点属性

## 浏览器重绘

没当我们把创建的节点放到文档中去使用appendChild()或者insertBefore()的时候，会引起浏览器重绘。

浏览器重绘：把一个节点插入到DOM树当中，浏览器要把这个东西显示出来的时候，它需要把整个浏览器画一下，这个过程我们称之为重绘。如果使用循环去插入很多个节点的时候就会引发很多次重绘，会影响浏览器性能。

此时引出了文档片段类型

### DocumentFragment类型

**document.createDocumentFragment()** 方法创建文档片段。

可以使用这个方法创建一个文档片段，这个文档片段得到的根普通node节点几乎没有区别，得到这个文档节点之后你后面可以接着去创建其他的element节点或文本节点，然后把它插入到文档片段中。当你把这些工作都做完之后再使用appendChild()或者insertBefore()把这个文档片段插入到页面当中。这样就会减少页面重绘的次数。

>  这种方式理论上能提升浏览器性能。在现代浏览器上因为重绘做了优化，性能上有微小提升。在IE浏览器下使用了文档片段性能不如没使用。



 