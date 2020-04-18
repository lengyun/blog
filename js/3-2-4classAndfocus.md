# H5class和焦点管理

## class管理

### H5获取class类节点

**document.getElementsByClassName()**

可以通过一个class名称来获取一个HTMLCollection的class列表。不兼容IE9以下

### 兼容性方式：

```js
function findClass(name){
    var classArray = []
    var alltag = document.getElementsByTagName("*");
    for(var i = 0; i<alltag.length; i++){
        if(alltag[i].className == name){
        	classArray.push(alltag[i])
        }
    }
    return classArray;
}
```

### 存在问题：

1. js本身的执行速度是比较快的，但js对DOM节点的操作是相对要慢一些的比较耗时。这种兼容方式会造成性能下降
2. getElementsByClassName()获取到的是HTMLCollection动态合集，兼容性方式是自己建立的一个数组，不是动态合集。

> 通过ID获取节点性能比通过class获取节点快很多，原因就是通过class获取节点需要把所有的节点遍历一遍。

### H5DOM节点的classList属性

可以获取当前节点下的所有class名称组成的数组，这个数组是个DOMTokenList对象，它也是一个伪数组。js为这个对象提供了四个方法：

* add(value)：给当前节点增加一个class。如果已经存在，就不添加了。
* remove(value)：删除当前节点上的对应的class。
* contains(value)：当前节点是否存在给定的class，返回 true， false。
* toggle(value)：切换，有就加上没有就去掉。

四个方法接收的参数都是一个，都是字符串。

### 注意：

1. H5 方法兼容性问题
2. 都只能接受一个字符串，而且字符串是不能有空格的。

### 扩展：

* 如果相对DOM节点增加多个class应该如何操作？

  对需要添加的多个class通过空格分隔后循环调用add或者remove实现多个class在DOM节点上的添加和删除。

* 对一个DOM节点添加多个样式class，每一个class都有对应的样式，当你循环的当多个class添加到DOM节点上的时候，浏览器会渲染多次还是一次？

  答案：浏览器只会渲染一次！因为对于浏览器来讲他的渲染引擎和js的解释器引擎是同步工作的，也就是说在同一时间内只有一个东西在工作，要么是渲染引擎要么是js解释器引擎。

##  焦点管理

### 如何知道那个元素获取了焦点？

H5的document.activeElement 属性保存了文档当中被激活的那个节点。这个激活的节点在不同的时间保存的值是不一样的。

打开文档的时候，在这个文档的加载期间，activeElement它所保存的值时null，浏览器加载完成之后，这个activeElement会指向浏览器的document.body。如果对网页进行了某些操作，比如点击，tab切换这时浏览器的焦点会发生变化activeElement会指向被点击的或者被聚焦的焦点

可以用document.activeElement来判浏览器是否加载完成，不等于null就表示加载完成。onload事件

###  如何让文档中的元素获取焦点？

1. 文档的默认加载。

   文档加载完成后焦点会默认指向body。

2. 用户的操作

   键盘鼠标的操作，移动设备的触摸

3. 使用js进行操作

   js中使用focus()方法让DOM元素获取焦点。

### 如何判断整个文档获得了焦点？

 document.hasFocus()方法 用于判断整个文档是否获取焦点。 实际用途是判断一个用户是否正在跟网页进行交互。

#### 注意事项：

1. hasFocus()是document的方法，切只能通过document.hasFocus()来进行调用。

2. 在js中所有的事件都是基于浏览器的，只要浏览器处于激活状态，对应的事件就可以触发。比如鼠标移入事件。如果浏览器没有被激活事件是不会被触发的。

   如果用户点击的是一个地址栏或控制台，他的目的不是想个网页交互。js中的基于浏览器的事件就无法判断用户到底是不是要和网页进行交互。 方法是基于网页的而不是浏览器的，如果用户点击了网页这个方法返回的就是true，如果用户点击了地址栏或者控制台这个方法返回的就是false。

   > 判断用户是否在网页中交互

   ```js
   setInterval(function(){
   	console.log(document.hasFocus())
   },1000)
   ```

   可以增加用户体检，用户不在网页中增加一些提示。

### 焦点管理的意义

1. 让你的html代码开发更加标准化

2. 对残障人士用户的使用意义

   无障碍web应用

3. 增加用户体验