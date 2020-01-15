# 事件优先级和事件对象

## 事件优先级

HTML事件（DOM0）：针对一个HTML在他上面直接设置一个事件属性，然后指定对应的事件处理程序。

属性事件（DOM1）：通过js来获取某个节点，然后通过设置这一个节点的某一个事件属性，并指定对应的事件处理程序来实现的。

他们两个的实现方式是一样的，只不过在获取节点绑定事件的过程写法上有区别。一个是把属性和对应的事件写在html上。一个是使用js先获得某一个节点，然后再设置这个节点上面对应的属性。

### html 事件和属性事件的优先级

针对某一个元素同时设置html事件然后又使用了属性事件，那么这个时候html事件会被属性事件覆盖掉。因为在网页的加载过程当中html是优先加载的，所以当html加载完成之后这个html事件已经生成了，接下来你使用js再去获取这个节点然后把上面某一个事件属性给他改掉这个时候属性事件就会覆盖html事件。

### html事件/属性事件/事件监听优先级

**事件传播机制**：html事件/属性事件的事件传播机制里只存在事件冒泡这一种事件传播机制。事件监听同时支持事件捕获和事件冒泡，可以在绑定事件处理程序的时候手动的指定那个阶段触发。

```html
<body>
    <div>
    	<div></div>
    </div>
</body>
```

当一个事件发生的时候，这个事件首先从win对象向目标元素上进行捕获，在捕获的过程当中首先触发这些addEventListener设置为捕获的事件。进入到目标元素的时候以及在冒泡阶段事件的执行是按照js书写的顺序依次执行的。事件的执行是按照事件解析的顺序或者说事件被定义的顺序去依次执行的，如果这个事件是在html中被定义的那么这个事件即是通过属性事件被覆盖了它也会优先执行。

### css是否会影响到事件的传播？**不会**

通过css把内层div移到外层div的外面。如设置了left属性或者其他属性让它看起来是在外层div的外面。这种情况我们点击内层div貌似并没有点击到外层div因为在页面上呈现的效果一个左一个右。 

事件的传播是按照html的结构进行传播的。事件的绑定是浏览器来实现的，浏览器的解析是按照html的结构进行解析的，在解析这些结构的时候它并不关心css是如果处理。

### 事件穿透

在移动设备上是没有点击事件的都是通过手指的touch事件来执行的，touch事件分成三个阶段。在移动设备上onclick事件也是通过touch事件来模拟的。但是这里面有个问题，onclick事件在在移动设备上有300毫秒的延迟，touch事件是没有的。这时就会出现一个问题，如果你弹框关闭的过程在300毫米之内完成了，在这种情况下touch事件就会从你当前的位置穿透到下一层，导致的结果就好像点到了下一层的div。

处理方式：让弹窗慢慢消失，让弹窗在消失的过程当中后面再叠加一层，让事件只是穿透到叠加的这一层上。然后等300毫米结束之后再把叠加的这层给清掉。

## 事件对象

事件发生了在他的事件处理程序中或者回调函数中会有个参数叫做event，这个event参数它里面包含了事件相关的所有信息。IE的event是绑定在win对象上的。

```js
getEvent: function(event) {
    return event ? event : window.event;
},
```

**事件对象的属性**

| 属性    | 类型   | 说明                         |
| ------- | ------ | ---------------------------- |
| bubbles | Boolean | 当前的事件是否是一个冒泡事件 |
| cancelable | Boolean | 当前的事件是否可以取消它的默认行为|
| currentTarget | Element | 当前的事件处理程序正在处理哪一个元素。事件处理程序this指向相同 |
| defaultPrevented | Boolean | 为 true 表 示 已 经 调 用 了 preventDefault()方法|
| detail | Integer | 与事件相关的细节信息|
| eventPhase | Integer | 当前事件是在什么阶段：1表示捕获阶段， 2表示“处于目标”， 3表示冒泡阶段 |
| target | Element | 事件的目标。currentTarget代表了当前的事件发上在那个元素上。target属性代表了当前的事件它的一个目标元素。 |
| trusted | Boolean | 表示当前事件是否是浏览器生成的。事件有两种：人为创建，浏览器内置。 |
| type | String | 被触发的事件的类型 |
| view | AbstractView | 与事件关联的抽象视图。等同于发生事件的window对象 |
currentTarget和target区别：

**事件对象的方法**

* preventDefault()

  取消事件的默认行为。事件对象的cancelable为true表示可以取消默认行为。同时也可以使用passive去优化整个事件的处理程序。

  直接在当前事件处理程序的结尾调用一下return false 同样也会取消默认行为。

* stopPropagation()

* stopImmediatePropagation()

  阻止事件的进一步传播。事件对象属性bubbles为true即是一个冒泡事件时才能调用这两个方法。

  1. 调用stopPropagation()虽然事件不会继续向下传播，但是当前的节点上它绑定的事件仍然会继续执行。
  2. 两者区别在于节点上绑定了两个或者两个以上的事件处理程序时，preventDefault()只会阻止事件向下层传播，在当前节点上绑定的所有事件依然会执行。stopImmediatePropagation() 阻止了事件的传播而且调用这个方法之后绑定在它后面的这些函数就不会去执行了。

  > 阻止事件的传播不会阻止事件的默认行为，阻止事件的默认行为不会阻止事件的传播。