# BOM

浏览器对象模型

## window对象

* 全局作用域

  每一个win对象都表示浏览器的实例。除了实现Global对象的所有属性和方法外还实现了浏览器的功能。在js中所有可以直接使用方法都是Global对象的属性，在网页端所有可以直接使用的方法都是window的属性。

  js解释器在运行的时候就存在一个Global对象它代表了全局作用域，在这个全局作用域下你声明的变量都将作为Global对象的属性。网页端相当于window对象。

  ```js
  var a=1
  window.a=1
  // 基本一样，当声明语句创建的变量不能用delet删除。window对象属性可以用delet删除
  ```

* 窗口关系及框架

  当使用frames或iframe时就相当于在当前的浏览器窗口中新加了窗口。 每一个窗口都将拥有自己的window对象。

  访问方式：

  1. 使用frame标签创建出来的框架都会保存到一个叫做frames的对象当中，这个**frames**是一个伪数组。访问窗口框架时可以通过`window.frames[0]`加上索引的方式来访问。

  2. 创建框架的时候frame标签上有个name属性，也可以使用 `window.frames["topFrame"] `的方式来访问框架。

  使用场景：

  ​	后管系统 ，邮件系统，在线编辑器

  管理方式：

  * top

    最外层的win对象

  * parent

    当前win对象的上一层

  * window.self

    当前对

  注意：如果一个页面存在多个win对象那么每一个win对象都会包含原生类型的构造函数，而且这些构造函数都是独立的。在跨越框架相互传递数据的时候要注意。

  可使用字符串判断数据类型

* 窗口位置*

  screenLeft 和 screenTop 属性 screenX 和 screenY 属性

* 窗口大小*

  innerWidth、 innerHeight、 outerWidth 和 outerHeight。

* 导航和打开窗口*

   window.open()方法接收 4 个参数：

  * URL

  * 窗口目标（字符串）

    * 一个页面多个frame的时候，frame的name属性。

    * 不写会新建页面，新开页面或新开标签页。

    * _self  _parent  _top _blank

  * 一个逗号分隔的设置字符串，表示在新窗口中都显示哪些特性

    "height=400,width=400,top=10,left=10,resizable=yes"

  * 在不打开新窗口的情况是否取代历史记录

    布尔值

  >  window.open()的返回值还是一个win对象，这个对象可以调用close()方法把这个窗口关掉。

* **间歇调用和超时调用**

  js是单线程，只有一个进程快速的在两个事件内切换。

  - setTimeout() 延时执行，隔多少时间运行一次

  - setInterval() 每隔多少时间运行一次

    接收两个参数要执行的代码和以毫秒表示的时间。

  1. 第一个参数也可以是字符串，这时相当于调用eval()方法把字符串转换为可执行的代码。

  2. 结束延时执行和间歇执行：

      clearInterval() clearTimeout() 

     每当你使用setTimeout() 和setInterval()的时候都会有一个返回值，这个返回值是一个ID而且是一个数字类型。把这个ID传给clearInterval() clearTimeout() 方法就会结束间歇调用和延时调用。

  3. 使用setTimeout(function(){},0) 把函数放到最后执行。

     延时执行实际的原理是创建一个事件队列，然后把要执行的函数从当前代码当中拿出来放到时间队列中。等到整个代码执行完成之后它会去看这个时间队列，重新扫描一下。在扫描的时候判断是否到了执行的时间，如果到了就执行对应的代码，如果说没到再执行一遍这个事件队列重新的进行判断，如此往复。这就导致如果使用了setTimeout()它所对应的函数就会被移到整个代码的最底部，也就是当你所有的代码都跑完之后它才会去跑setTimeout中对应的函数。

  4. setInterval()最短的时间间隔。

     H5规定它的最短时间间隔为10毫米，小于10跟10没有区别。对于大部分来讲这个时间间隔可能是在16.7毫米左右。 因为大部分显示器为60Hz（一秒刷新20次）

  5. setInterval()具有累积效应

     举例：半个小时擦一下屋子，但没考虑擦屋子需要多少时间。如果擦屋子需要一个小时就会发生累积效应。 如果在时间间隔内不能完成排在后面的操作就会不断的累积，而且执行到后面的时候会在很短的时间内连续触发。造成性能问题。

     所以一般使用setTimeout代替setInterval使用。

     ```js
     setTimeout (function() {
     	console.log("定时调用")
         setTimeout(arguments.callee(10000))
     }, 10000);
     ```

  6. 动画的时候卡顿

     * 使用css3实现动画会在显示器刷新时运行，比较流畅

     *  requestAnimationFrame()

       只接收一个参数及要执行的函数，它在显示器刷新的时候执行。

       解决css3实现不了的动画，比如滚动，复杂的动画。

* 系统对话框

  alert() 没有返回值

  confirm() 返回布尔值true和false

  prompt() 两个参数：要显示给用户的文本提示和文本输入域的默认值

  返回用户输入的内容

  他们都是阻断式的，js无法模拟，对话框样式不能自定义。

## location对象

提供了与当前窗口中加载的文档有关的信息，还提供了一些导航功能。window.location 和 document.location 引用的是同一个对象

* 8个属性

  读取和设置url相关的东西

  | 属性名 | 例子 | 说明 |
  | ------ | ---- | ---- |
  | hash |"#contents" | 返回URL中的hash（#号后跟零或多个字符），如果URL中不包含散列，则返回空字符串 |
  | host | "www.wrox.com:80" | 返回服务器名称和端口号（如果有）|
  | hostname | "www.wrox.com" |返回不带端口号的服务器名称 |
  | href | "http:/www.wrox.com" | 返回当前加载页面的完整URL。而location对象的toString()方法也返回这个值 |
  | pathname | "/WileyCDA/" | 返回URL中的目录和（或）文件名 |
  | port | "8080" |返回URL中指定的端口号。如果URL中不包含端口号，则这个属性返回空字符串 |
  | protocol | "http:" | 返回页面使用的协议。通常是http:或https: |
  | search | "？q=javascript" | 返回URL的查询字符串。这个字符串以问号开头 |

* 三个方法

  * location.assign() 跳转

    跟location.href='' 一样

    location.assign("http://www.wrox.com");

  * location.replace()

    只接受一个参数，即要导航到的 URL；结果虽然会导致浏览器位置改变，但不会在历史记录中生成新记录。

  * location.reload()

    作用是重新加载当前显示的页面。如果要强制从服务器重新加载，传递参数 true

  > 当你使用这些方法的时候它后面的方法照样执行，执行状况取决于电脑性能

## history对象

* history.go(-1)

  > 也可以传递一个url地址的字符串。会后退或者前进到url的页面。但用户浏览过哪些页面是不可知的

* history.back();
  后退

* history.forward();

  前进

* length 属性

  用户当前页面上历史记录的数量。为0表示用户第一次进到这个页面

##navigator对象

navigator.userAgent 浏览器的用户代理字符串