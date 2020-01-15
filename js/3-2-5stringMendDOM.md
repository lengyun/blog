# 字符串修改DOM

开发中插入大段的DOM节点或者比较长的DOM结构时比较麻烦。

## 修改DOM节点HTML

* innerHTML
* outerHTML

读写html标记的，可以调用某个节点的这两个属性，这两个属性是可写也是可读的。

* **读模式：** 这两个属性对应的值是一个字符串形式的html文本。 

* **写模式：** 可以把一个字符串赋值给这两个属性，这时浏览器会把这个字符串转换成html文本插入到你对应的节点当中。

* **区别：** 包不包含当前节点

  * innerHTML只会修改或者读取当前节点的内部元素。
  * outerHTML修改或者读取的是当前节点以及它的子元素。

* **注意事项：**

  1. 读模式下，不同的浏览器返回的字符串结果是不一样的：标签是否大小写，是否包含空格，是否包含缩进。HTML不区分大小写。

  2. 写模式下，设置的值跟解析后很有肯能是不一样的。因为浏览器会按照DOM标准去把这些字符串转换成浏览器可以识别的形式，这个过程也叫字符串到DOM树的序列化。

  3. 插入`<script>`和`<style>`,使用者两种方法插入`<script>`标签方式的js代码不能执行的。插入`<style>`标签的方式样式是生效的，但是IE8以下如果你单纯的插入一个字符串而且这个字符是以`<script>`和`<style>`开头的，这种字符串对应的HTML结构会被浏览器认为是无效的。可以在前面加上其他东西，但这些东西会显示到页面上的，需要用css或者插入之后用js删掉，如果使用空div也被认为是无效的。除非div标签要加上内容。

  4. 不是所有的标签都支持这两个属性

     `<col>、 <colgroup>、<frameset>、 <head>、 <html>、 <style>、 <table>、 <tbody>、 <thead>、 <tfoot>和<tr> `

## 读写DOM节点文本

* innerText属性

* outerText 属性

读写DOM节点对应的里面的文本。

* **读模式**

  两个属性相同，都是把当前的标签下所有的文本内容返回回来

* **写模式**

   innerText会把当前的节点下的所有html都删除掉，然后把所要替换的文本放到里面。

  outerText会直接把当前的节点替换成一个文本节点，里面的值就是你写入的文本。

* **注意事项：**

  1. 把一个字符串赋值这两个属性，这时字符串里面的特殊字符会被转换，转换的结果就是你写进去的字符串。

  2. 这两个属性不是html标准

  3. outerText属性基本不用。

  4. firefox浏览器不支持innerText顺序他有个类似的textContent属性。使用的时候要做下判断。

     ```js
     function getInnerText(element){
         return (typeof element.textContent == "string") ?element.textContent : element.innerText;
     }
     function setInnerText(element, text){
         if (typeof element.textContent == "string"){
         	element.textContent = text;
         } else {
         	element.innerText = text;
         }
     }
     ```

     为什么先判断textContent而不是innerText？

## innerText和textContent区别

1. textContent返回的值是包括script标签和style标签的内容，而innerText是不包含的。

2. innerText返回值依赖于页面的显示，textContent依赖于代码内容。

   如果子节点通过样式隐藏的innerText就不会获取这个隐藏的内容，但textContent会返回当前节点下的所有文本内容。

3. innerText是受css影响的，它依赖于页面的显示。所以使用innerText去设置页面值的时候它会触发一个叫回流的操作。而textContent不一定会触发回流，有可能会触发重绘。

   > 看设置的值，比如原来是两个，重新改成两个字，占的面积没有变整个页面也没有排版，这时既不会重绘也不回回流。如果文版长度设置为不一样的长度，对一个小的区域内有影响了，这个时候只会触发重绘，如果设置的值配置设置的样式可能对整个页面都有影响了，这时时候可能会触发回流。

   **回流：**当我们去编写一个html并且让它在网页上显示的时候，浏览器为了把这个HTML文本显示在页面上它会创建两棵树，一颗叫做DOM树，一颗叫做渲染树用于绘制和渲染。当我们使用innerText的时候它是依赖于页面显示的所以它跟渲染树关系紧密。当你为一个节点设置innerText的时候，浏览器会认为你重新设置了innerText会对整个页面的渲染造成影响，所以这个时候它会从当前的那个节点一直往回追溯，从子找父一直找到根节点。然后把整个树渲染一下。我们把这种情况称做回流。

   ** 重绘：** 是指对当前的DOM节点和它的子节点进行重新的排列。

   回流是往根节点找，重绘是往根节点找。重绘只是对页面的某一个区域有影响，回流是对整个页面有影响的。发生了回流一定会引起重绘，发生重绘不会影响回流。

4. 设置值不同，innerText设置值会被格式化而textContent不会。因为innerText是依赖于页面显示的，而textContent只依赖于代码。

   ```html
   <div id="intext"></div>
   <div id="app"></div>
   ```

   ```js
   document.getElementById("intext").innerText="a\na" 
   document.getElementById("app").textContent="a\na"
   ```

   ```html
   <div id="intext">a<br>a</div>
   <div id="app">a a</div>
   ```

   > 想要显示统一使用style="white-space: pre;" 让页面以代码的形式显示。

   ```html
   <div id="app" style="white-space: pre;">a a</div>
   ```

5. 读取值不同，

   innerText会将里面的空标签当成换行来处理，连续多个空标签也会被当成一个换行来处理。因为innerText是依赖于页面显示的，在代码中写了一个空标签最后显示在页面上是一个换行。所以innerText取到的是一个换行。代码中连续多个空标签页面上显示的还是一个换行。所以innerText处理多个空标签的时候也会当作一个换行来处理。 对于一个DOM节点来说它在页面上显示什么样最后取innerText得的值就是什么样。

   textContent对于空标签和多行空标签只会返回一行文本。即使在代码中有`<br/>`标签也会返回一行文本，除非DOM节点下面还有子节点。而且子节点里面还包含文本。这种结构它才会返回多行文本。

   * 如果一个DOM节点存在子节点，而且子节点还有子节点，甚至子节点的下面还包含文本的时候，这个时候他们两个返回的内容都会包含换行。（很难统一不建议）

6. 获取文本节点的另外一种方式：**nodeValue**

   直接找到这个文本节点，然后读取他的nodeValue。使用这种方式它是不能获取DOM元素的内容的，你必须选择的是一个文本节点。

## 自闭合元素的处理

不是成对出现的，是不包含子标签的，称做自闭合元素或无内容元素

```html
<br/>  <hr/>  <img/> <input> 
```

对自闭合元素使用innerText和innerHTML会怎么样？

不会造成错误，但不建议。

对`<br><hr><img/>`使用innerText和innerHTML修改值，浏览器会把这戏标签变成闭合标签结构，`<br>值<br/>`  但在浏览器上不会有什么变化。这种结构不符合规范，不建议使用。

对表单元素 `<input>` 使用innerText和innerHTML修改值的时候，不同浏览器在不同的js执行周期内会对表单里面的value的值造成不同的影响。也就是说这样设置有的时候会影响表单中的value值。