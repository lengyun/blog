# 动态加载css

1. 加载远程css文件

   ```js
   function loadStyles(url){
   	var link = document.createElement("link");
       link.rel = "stylesheet";
       link.type = "text/css";
       link.href = url;
       var head = document.getElementsByTagName("head")[0];
       head.appendChild(link);
   }
   ```

2. 使用`<style>`元素来包含嵌入式 CSS

   ```js
   function loadStyleString(css){
   	var style = document.createElement("style");
       style.type = "text/css";
       try{
       	style.appendChild(document.createTextNode(css));
       } catch (ex){
       	style.textContent = css;
       }
       var head = document.getElementsByTagName("head")[0];
       head.appendChild(style);
   }
   loadStyleString("body{background-color:red}");
   ```

    IE 将`<style>`视为一个特殊的、与`<script>`类似的节点，不允许访问其子节点访问元素的 styleSheet 属性，该属性又有一个 cssText 属性，可以接受 CSS 代码

## 与动态加载js的区别

1. 对于动态加载js而言，我们创建出来的script标签最后插入到文档的时候你可以插入到任何位置。但是对于加载css而言要么使用link标签要么使用style标签，虽然可以把创建出来的标签放到文档的任何位置，但为了兼容所有浏览器link标签和style标签放到head当中。
2. 对于动态加载js而言，我们创建出来的标签都是script标签。动态加载远程css使用link标签，动态创建本地样式使用style标签。
3. 对于动态加载js而言，加载完成的js运行完成之后，相关的事件就已经执行完成，换句话说这个js文件已经没有用了。即使把插入的js标签删掉对整个网页是没有影响的。但对于动态加载css而言就完全不一样了。浏览器对js的解析是靠js解释器来完成的。而对css的解析是靠浏览器的渲染器来完成的，这个渲染器是一个实时更新的机制。如果把新插入的link或者style标签删除的话，对应的样式也会被删除。
4. 由于浏览器的渲染器是实时执行的，所以说如果你修改了link标签的harf属性这种修改也会被直接反应到页面上。网页换肤只需修改link上的harf属性即可。

**注意：**

1. 动态加载的远程js，如果修改src属性等同于无效。有的浏览器会下载js但不执行。

2. script标签的src属性可以加载任何后缀的文件。这时就有了动态加载js的两外一种思路。我们可以让scr指向一个动态文件地址，比如php文件jsp文件，然后浏览器会去请求这个文件，在这个文件上你可以进行一些动态操作。比如根据事件的不同返回字符串不一样，或者根据传递的cookies不同做一些判断。

## 如何判断css文件加载完成

 对于动态加载js而言如果说你需要使用回调函数，那么说明你加载的一定是一个远程的js。动态加载css一样如果需要判断css加载完成，你加载的一定也是一个远程文件而且是link标签。link标签上也有 onload和onreadystate属性，他们对应的是一个要运行的函数，这个函数也会在css加载完成之后凋用，在调用的同时你可以拿到readystate属性。

 	 