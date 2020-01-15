# 滚动操作

所有跟DOM相关的滚动操作都被作为HTMLelement类型的拓展来存在，也就是说所有的滚动的属性和方法都可以直接在元素上进行调用。

* scrollIntoView()  滚动到视窗当中。

  对一个元素调用这个方法之后，这个元素就会呈现在你当前的视窗当中。

  接收布尔值，默认为true。元素的顶端给视窗的顶端对齐，为false元素的底端跟视窗的底端对齐。

  **注意：**

  1. 出现在视窗当中有可能被挡到，如有绝对定位，固定定位的元素可能会挡住。
  2.  滚动过程中是没有动画的。IE8以上浏览器都支持

  **火狐扩展：**

  可以传一个Object作为参数，进行一些细节的设置。这个Object里面支持两个属性，第一个属性名behavior，值是一个字符串（instan立即滚动，smooth平滑滚动，auto），默认auto。第二个属性名block，值（start end ）默认start。

  1. scrollIntoView是基于DOM节点在文档流中的存在方式来实现的。如果DOM节点的display:none当你对DOM节点调用scrollIntoView时是没有效果的。因为DOM节点设置为display:none后是不可见的，他会脱离文本流。 如果DOM节点的属性是visibility: hidden 这个DOM节点在当前的文档流中只是不可见，这时调用scrollIntoView时滚动条还是会发生滚动的，会把当前元素放置到当前文档的可视区域。

  2. 如果页面有横向滚动，scrollIntoView对横向的滚动条也还是生效的。

  3. 如果元素已经在可视区域，调用scrollIntoView依然会发生滚动，滚动的结果会让元素出现在顶部或底部，连续调用只会执行一次。

     **如果已经在可视区域不想让它滚动怎么办？**

     * scrollIntoViewIfNeeded()  Safari Chrome浏览器方法。传递参数跟scrollIntoView一样是一个布尔值。不同的是被调用的节点已经在视窗的可视区内，当你调用这个方法的时候浏览器是不会发生滚动的。
     * scrollByLines(lineCount)：将元素的内容滚动指定的行高， lineCount 值可以是正值，也可以是负值。 Safari 和 Chrome 实现了这个方法。
     * scrollByPages(pageCount)：将元素的内容滚动指定的页面高度，具体高度由元素的高度决定。 Safari 和 Chrome 实现了这个方法。

## 定点滚动

让页面向某一个位置或方向滚动，我们称之为定点滚动。

* window.scrollTo()

* window.scrollBy()

  可以接收两个数字作为参数，两个数字是不能省略的。

  scrollTo()的两个数字表示具体滚动到页面的某一个XY坐标。 

  scrollBy()的两个参数表示从你当前位置往某一个方向滚下的像素值。

  这两个方法被作为window的属性存在

## 滚动属性：

* scrollTop

  滚动到顶部，获取和设置某一个元素它的内容的垂直滚动像素。是个可读可写的属性。调用这个属性的容器它里面的滚动条距离这个容器顶部的高度值。

  1. 元素的display:none时他的scrollTop属性设置无效。 

  2. 不同的浏览器在获取整个浏览器滚动条的时候把这个属性绑到了不一样的位置。如果想读取浏览器整个滚动条的距离，需要做一个兼容性的写法:

     ```js
     if(document.documentElement.scrollTop){
     //首先判断html上有没有scrollTop属性
     }else if(window.pageYOffset){
     //window.pageoffset
     }else if(document.body.scrollTop){
     //body元素的scrollTop
     }
     ```

* scrollLeft

  原理同上。DOM属性dir，文字的顺序。会影响scrollLeft

------

* scrollWidth

  滚动条的宽度，只读属性。

* scrollHeight

  滚动条的高度，只读属性。

  返回的值是整个内容的高度，而且这个高度包括overflow样式不可见的区域。

  1. 他们返回这个值是不包括滚动条所占的空间的。
  2. 返回的整个内容的高度包括padding不包括margin。box-size属性回对取值有影响
  3. 不同浏览器取值有差异，不能精确判断，不会超过10个像素，大概6-7个像素差距。

**使用场景**

1. 滚动加载

   移动端开发，图片展示类网站

2. 固定定位

   页面中间的东西滚动后固定在顶部。 

**延展：**

高性能滚动，滚动添加太多监听动作时容易造成页面卡顿。**截流函数**，**防抖函数**

性能最好的滚动加载**lozad** 框架，观察者模式。