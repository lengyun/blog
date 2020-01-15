# 动态加载js

在网页中要使用js需要使用`<script>`标签把js插在网页当中，建议插到最底部。

## 动态加载js使用场景：

1. 当你使用到某个js的时候，你并不确定这个js会在当前的页面上执行。这种情况下你可以把js插入到页面上没什么问题但会增加页面体积，包括下载速度执行速度对会变慢。这种情况下你会考虑优化代码，如何在用户执行某个操作的时候动态的将js插到页面上。
2. 不确定用户加载的是那一种js，需要对用户进行一些判断，根据判断的条件，让不同的js在页面上运行。

## 使用js的两种方式：

先创建`<script>`标签，设置它的type属性

1. 调用远程的js，即使用src属性
2. 把js直接写在`<script>` 标签当中

## 动态插入js的方式：

1. 动态插入远程js

   先创建`<script>`标签，设置它的type属性。设置src属性，把js地址赋值给src属性，可以是相对或绝对路径。然后把创建出来的`<script>`标签插入到文档当中。

   ```js
   function loadScript(url){
       var script = document.createElement("script");
       script.type = "text/javascript";
       script.src = url;
       document.body.appendChild(script);
   }
   ```

2. 将js代码放到`<script>`标签中插入

   先创建`<script>`标签，设置它的type属性。

   * 将js作为文本节点插入到`<script>`标签中。

     ```js
     var script = document.createElement("script");
     script.type = "text/javascript";
     script.appendChild(document.createTextNode("function sayHi(){alert('hi');}"));
     document.body.appendChild(script);
     ```

     IE不支持将文本节点插入到`<script>`中。IE 将`<script>`视为一个特殊的元素，不允许 DOM 访问其子节点

   * 将js代码转换为字符串，赋值给`<script>`标签的text属性

     ```js
     var script = document.createElement("script");
     script.type = "text/javascript";
     script.text = "function sayHi(){alert('hi');}";
     document.body.appendChild(script);
     ```

     safari不支持

   * 兼容版本

     ```js
     var code = "function sayHi(){alert('hi');}";
     function loadScriptString(code){
     	var script = document.createElement("script");
     	script.type = "text/javascript";
         try {
         	script.appendChild(document.createTextNode(code));
         } catch (ex){
         	script.text = code;
         }
         document.body.appendChild(script);
     }
     ```

   > js以文本形式插入到`<script>`中的。js的解析使用了eval() 函数，有性能问题它本身是一个小型的js解释器，会将js的解析变为安全模式。另外try catch 语句也会破坏作用域。


## 如何判断js加载并且运行完成

script上有两个属性： 

* onload="" // 现代浏览器，谷歌
* onreadystatechange="" // IE 

这个方法会在js加载完成加载后调用， 调用的同时上面还会有一个readystate的属性，我们可以判断这个readystate的属性，当他发生变化的时候给他动态的绑定一个回调函数，继续执行后面的代码。

```js
function loadScript(url){
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.body.appendChild(script);
    script.onload = function(e){
        if(e.readystate == "complete" ){
            console.log("script")
            //整个js执行完成了
        }
    }
}
```

jquery 提供了$.getScript()方法，接收两个参数：第一个参数是一个字符串，表示要加载的js文件的地址。第二个参数是一个回调函数，表示js加载成功后要执行的代码。

ajax请求方式。将远程js的内容以字符串的形式请求回来，当你拿到这个代码后就可以使用插入文本的方式创建script后插入script标签中。 

## 归类：

* 同步加载

  先获取js代码然后把js以文本的方式插入到script标签中的方式。当你把script标签插入到文档当中之后js会立即执行，后面当你使用js中的方法和变量可以直接调用。

* 异步加载

  创建script标签设置scr属性后把script标签插入到文档之后，浏览器需要发送一个请求把js请求回来，然后再执行后面的方法。在请求的过程当中是需要时间的。ajax方法和jquery的getScript()方法都是异步加载。（jquery方法也是调用ajax请求）

## 未来方式

ES6中提供了一个语句 import语句，在最新版的ECMA规范当中定义了import语句的两外一种使用方式，你可以导入任意的模块，这个导入任意模块也可以用于动态的导入js。

## 加载与阻塞

通过设置src属性加载远程js的方式。设置src属性的时候浏览器不会发送请求的，只有你把script标签插入到文档当中的时候，插入完成之后浏览器才会去下载这个js文件，下载完js文件之后会立即执行，如果你是把js以字符串的方式插入到script标签的话，当script插入到页面之后js代码会立即执行。

js本身是一种阻塞式语言，对应html本身而言，如果在html中存在js，当js在下载和执行的时候是阻塞的。这也是为什么建议吧script标签放到文档最下面的原因。js的下载和执行的过程当中会停止页面上的其他行为。如果是动态的加载js文件的时候是不会阻塞页面的行为的。而在js执行期间依然会阻塞其他行为。造成这样的根本原因是浏览器的渲染造成的，如果你的js是直接写在html当中的，当浏览器扫描你的html页面的时候，它不知道后面会发生什么事所以把一切的行为都停止掉，等js加载运行完成之后，它再执行后面的过程。但是你是动态的加载js，这个时候浏览器对页面的渲染已经完成了，浏览器已经知道页面是怎么样的结构，所以你下载js这个时候是不回阻塞的，而当执行的时候浏览器会采用时间片段的形式将动态的js插入到事件队列当中。类似setTimeout()方法。动态js下载完成之后它会把js也插入到事件队列当中，然后浏览器会快速的在多事件当中来回切换。在这种情况发生的时候，你就会看到多个js同时执行的现象。

## 回顾：

