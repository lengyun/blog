# 动态和静态合集

NodeList是节点合集，这个节点包括元素节点也包括其他节点，节点可以分成12类。

HTMLCollection也是节点合集，但这合集里面只包括元素节点，元素节点的nodeType值为1

## 如何获取NodeList或者HTMLCollection

1. 各个浏览器对返回的合集到底是NodeList或者HTMLCollection不一样。

   用方法去获取节点合集的话大部分浏览返回的是NodeList

   用属性去获取节点合集的话在任何浏览器下返回的都是HTMLCollection。

2. 如果想获取元素子节点的时候有两种属性，第一种方式是使用div.childNodes，获取的是NodeList,所有的子节点各种类型。第二种方式是div.children，获取的是HTMLCollection,只会返回里面的元素节点。

   ```html
   <div id="app">
       <!-- 注释 -->
       <p>文本</p>
   </div>
   ```

   ```js
   var app = document.getElementById("app")
   app.children
   // HTMLCollection [p]
   app.childNodes
   // NodeList(5) [text, comment, text, p, text]
   ```

## NodeList和HTMLCollection相同点

1. 都是伪数组

   可以通过索引过去对应的值，不能使用数组的方法进行操作。

   转换伪数组为数组：Array.prototype.slice.call(伪数组)

   IE的元素节点是基于commet对象实现的，IE下想把获得的伪数组转化为数组的话不能使用slice方法，需要手动做一次循环，把各项添加到空数组里 

2. 都有item 方法

3. 都是动态合集

## 动态合集

动态合集是指DOM结构的变化能够自动的反应到保存的对象当中。

元素的属性节点合集(NamedNodeMap)也是动态合集。

```html
<div id="test"></div>
```

```js
var test = document.getElementById("test")
var children = test.children
var Tag = test.getElementsByTagName("div")
//此时 children 和 Tag 的合集都是空
console.log(children) // HTMLCollection []
console.log(Tag) // HTMLCollection []
var newdiv = document.createElement("div")
document.getElementById("test")
test.appendChild(newdiv)
// 此时 children 和 Tag 的合集中多了个div
console.log(children) // HTMLCollection [div]
console.log(Tag) // HTMLCollection [div]
var attr = test.attributes
console.log(attr)
//NamedNodeMap {0: id, id: id, length: 1}
test.setAttribute('title',"123")
console.log(attr)
// NamedNodeMap {0: id, 1: title, id: id, title: title, length: 2}
```

HTML中涉及动态性合集的常见的有三种，NodeList、HTMLCollection、NamedNodeMap(元素的属性节点合集)。

 在HTML中动态合集的使用性是非常高的，当你把一个动态合集保存到变量中后，接下来你对HTLM进行的任何操作都会反应到变量当中，这样就不用每次去修改变量的值。

### 动态合集要注意场景

1. 当你使用循环语句进行DOM操作的时候容易出现死循环。for循环的时候循环体内进行DOM增加的时候DOM的length是动态变化的。解决办法是把判断条件的DOM的length赋值给一个变量，把这个变量放到for循环中做条件判断。
2. 动态合集之所以有动态性是因为获取的动态合集是NodeList、HTMLCollection、NamedNodeMap的一个实例。如果是使用jquery方式获取的元素的节点合集，它是使用自己创建的合集的方式来返回这种对象的。这种对象它就不是动态合集。

## 静态合集

并不是所有的NodeList都是动态合集。

* document.querySelectorAll("div")

* document.querySelector("div")

  这两个获取的NodeList是静态合集。

## 动态合集和静态合集存在的原因

性能和速度上的不同。querySelectorAll()跟getElementById()在速度上相差快100倍。速度区别这么大的原因是，动态合集是浏览器预先通过DOM树缓存起来的。如果你想获取一个DOM节点的话，这时浏览器会通过缓存直接在缓存里面注册然后创建这么一个变量给你返回回来。如果是通过querySelectorAll()它里面传进去的不是一个id或者一个tagName或者其他东西，准确的说是一个css选择器。当你使用这种方式来选择一个节点的时候，浏览器首先要解析这个字符串然后判断出来它是一个css选择器，接下来它要分析这个选择器并且创建一个选择器结构，创建完选择器结构后，浏览器要通过整个DOM树创建一个静态文件。这个静态文件就是一个DOM树的快照。然后在这个静态文件（DOM树快照）上和你的css选择器一个一个的进行比对。比对成功后就放到合集里，直到把创建出来的静态快照的文件树全都比对完成，然后把创建出来的合集以一个快照的形式给你返回回来。

## 动态合集和静态合集的区别

1. 一个是动态变化的，一个是静态的快照

2. 使用上：querySelectorAll是支持css选择器的，使用起来特别方便。特别复杂的css选择或者指明了需要一个静态的快照可以使用querySelectorAll。一般最好使用getElementById等方法来获取你要选择的节点。

## 回顾

NodeList是所有节点的合集可以包含12中类型

HTMLCollection只能包含一种即元素节点。

1. 获取子节点的时候，使用childNodes属性获得是所有子节点。使用children属性获得只有元素节点。
2. 都是伪数组，但在IE下HTMLCollection是基于commer对象实现的不能使用slice.call的方式把它转化为数组，只能手动转化。
3. 都是动态合集，如果直接操作DOM结构的话，变量也会发生变化。
4. 大部分的NodeList、HTMLCollection、NamedNodeMap他们都是动态合集。但通过document.querySelectorAll("div")和document.querySelector("div")获取的结果是静态合集，这两个方法能让你的操作简化但是性能相差100倍。尽量使用getElementById等方式获取节点

