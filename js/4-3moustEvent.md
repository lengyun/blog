# 鼠标事件

DOM3定义了12个鼠标事件

## 点击相关事件5

* click 点击 

  mousedown+mouseup=click

* dblclick 双击 

  （mousedown+mouseup = click） + （mousedown+mouseup=click）=dblclick

  IE （mousedown+mouseup = click） + （mouseup）=dblclick

* contextmenu 鼠标右键 

* mousedown 鼠标按下

* mouseup 鼠标抬起

## 移动相关5个

* mousemove 移动

* mouseenter 移入

  存在子节点，鼠标在子节点上移动事件处理程序不会执行

* mouseover 移入

  鼠标在事件节点的子节点上移动时会被多次触发

* mouseleave 移出

  只有当鼠标离开这个节点的时候mouseleave 对应的事件处理程序才会被触发

* mouseout 移出

  当你的鼠标在事件节点的子节点上离开的时候也会触发事件节点所绑定的事件处理程序。

  **原理是**：mouseout会冒泡，鼠标在子节点上离开的时候，子节点产生了mouseout事件，然后子节点的mouseout事件冒泡到了父节点。

  **记忆技巧**：mouseover和mouseout 都有O 所以这两个都会冒泡影响父节点。

  **如何用mouseover模拟mouseenter事件？**

  * event.relatedTarget 是和事件相关的次要节点，有就返回次要节点，没有返回null。8个事件支持次要节点(获得焦点focusin，失去焦点focusout，移入mouseenter/mouseover，移出mouseleave/mouseout，拖拽前dragstart，拖拽后dragend)

    焦点从一个节点移动到另外一个焦点，要移入的焦点叫目标焦点，移入目标焦点前的焦点叫次要焦点。在两个节点之间相互切换的都有一个次要相关节点。想要获取次要相关节点就要用到e.relatedTarget属性。e.relatedTarget和e.target总是相反的。

  * 两个事件最重要的区别，是否处理在子节点上相互移入时候的事件发生。想要用mouseover模拟mouseenter时就是只处理外层移入的情况，不处理在内部移动的情况。

    * 需处理两种情况：

      1. 事件节点向子节点移动。

         次要节点是目标节点

      2. 子节点和子节点之间移动。

         次要节点是子节点

  * 解决方式：为一个节点绑定mouseover事件的时候，只要我们在它的事件处理程序中判断relatedTarget不等于本身也不等于它的子节点时就可以认为它是一个mouseenter事件。

  * 其它思路：

* 事件对象属性

  * 和位置相关

    * **e.screenX**

      鼠标相对于屏幕左上角的位置

    * **e.clientX**

      鼠标相对可视区域的位置即浏览器窗口左上角

    * **e.pageX** （IE9+）

      鼠标相对于整个html文档的位置。非标准属性IE9+

      兼容模式：pageX=e.clientX + e.currentTarget.scrollLeft - event.currentTarget.clientLeft

      鼠标距离可视窗口左侧的距离 + 左侧滚动的距离 - 整个body边框距离整个文档的距离(jquery的pageX处理)

    * e.layerX（非标IE9+）

      当前事件节点本身position: absolute;或者它的父元素有position: absolute/relative;

      此时layerX表示鼠标当前位置和可以定位的那个父元素或者本身的节点他的一个距离。e.layerX是以border为参考点。

    * **e.offsetX**（非标准但通用）

      鼠标事件发生的时候鼠标所在的位置和触发事件的元素之间的一个距离关系。如果绑定的事件处理程序的节点position:absolute/relative，那么在没有设置边框和padding的情况下e.layerX和e.offsetX是相等的，如果设置了边框那么e.layerX是以border为参考点，e.offsetX是以content为参考点。

    * e.movementX（IE不支持）

      跟mousemove一起使用，当鼠标发生mousemove事件时mousemove是连续触发的，连续触发的两个mousemove事件就会产生一个移动的距离，这个移动句距离就用e.movementX表示

  * 和键盘相关

    鼠标按下时是否按下了相应的键盘

    * e.ctrlKey
    * e.shiftKey
    * e.altKey
    * e.metaKey (win键command键)

  * 鼠标按钮相关

    * e.button 鼠标键 

      -1:没有按键，如：移动 

      0:主键 1:辅助键(滚轮和侧键) 2:次键

    * e.buttons 三位二进制值，表示鼠标按下那个键

      000>0代表侧键，1表示左键，2表示右键，4表示中键

      3代表同时按下左右键，7代表同时按下左中右键

    注意点：

    1. 只有主键点击才能产生click事件， 检测其它键的点击可用mousedown或mouseup

    2. 鼠标右键添加事件处理程序用contextmenu事件。默认出现右键菜单，禁用时调用preventDefault()把右键菜单注释掉。

       **自定义右键菜单**：为整个网页绑定contextmenu事件，在网页中点击这个事件的时候自动调用preventDefault()禁用右键菜单，然后判断鼠标当前位置在对应的位置上生成一个新的右键菜单。

    3. win系统键盘上的右键按钮可以同时触发键盘事件和鼠标的右键事件。

       

## 滚动事件

* mousewheel 鼠标滚动

  在任何元素上都可以触发，可以冒泡到document或者win上。如果想让用户在滚动鼠标滚轮的时候去处理一些对应的事件处理程序可以使用这个事件。

  滚动事件对象属性：**e.wheelDelta** 代表网页滚动的距离。返回数值，是120的倍数。操作鼠标让滚动条往上滚这个值就是正120的倍数，滚动条往下滚是负120的倍数。 滚动条的方向而不是鼠标滚轮的方向是因鼠标滚轮可设置。在正常开发时，用到鼠标滚动事件的时候我们通常只关心e.wheelDelta是正数还是负数，也就是只需要判断用户是向上滚动还是向下滚动就可以了。120代表你滚动的距离但不常用。

* Firefox提供**DOMMouseScroll**事件

  滚动事件对象属性：**e.detail**属性，代表网页滚动的距离。返回数值，是3的倍数，新版是1的倍数。区别，向上是-3的倍数。

* wheel事件（H5标准）

  事件对象：

  e.detailX e.detailY e.detailZ 代表三个方向上的移动量。数值在不同浏览器上数值有差别。但上为正数下为负数是统一的。

* 注意：

  1. 不同浏览器下事件名和事件属性都不相同,而且正负也不相同。兼容性参考jquery源码，MDN文档
  2. mousewheel事件的e.wheelDelta属性返回值不一定为120。线性滚轮鼠标，mac触控板数值一般为3的倍数。抛物线式的数值取数
  3. 正常的鼠标操作而言，只要滚轮停止滚动这时滚动事件就会直接停止。mac触控板和鼠标如果触发滚动后，手不离开鼠标或者触控板那么滚动事件处理程序会直接停止。
  4. 鼠标的滚动事件和页面的滚动事件是两个完全不同的事件。鼠标滚动事件只能通过鼠标的滚轮或者触控板的形式来触发。键盘的上下可以滚动页面但不回触发鼠标滚动事件。触摸设备上手指滑动也不回触发鼠标滚动事件。pc上鼠标拖动页面滚动条也不回触发鼠标滚动事件。
  5. mac上双击放大页面不回触发鼠标滚动事件，mac或安卓的触控设备用两个手指去做放大和缩小操作的时候是可以触发滚动设备的。
  6. 鼠标滚动事件是否触发和页面是否滚动到顶部和底部没有任何关系。即便在顶部或底部也照样触发鼠标滚动事件。

* 截流数和防抖函数

  针对连续高频触发的事件如：滚轮事件，鼠标移动事件，拖拽事件，窗口的缩放事件，滑动touchMover事件。

  截流函数：相同的事件处理程序之间的时间间隔是固定的。

  防抖函数：相同的事件处理程序短时间内再次执行就会延后。

  处理方式：设置一个时间戳，当一个事件去执行的时候判断两个事件的时间间隔然后去确定时间处理程序要不要执行。可参考lodash和andesgou

## 选择事件

* sekect 选择

