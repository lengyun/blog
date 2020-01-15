# 单体内置对象

**内置对象 **是由 ECMAScript 实现提供的、不依赖于宿主环境的对象，这些对象在 ECMAScript 程序执行之前就已经存在了。
ECMA制定标准的三个原则：
1. 把所有和浏览器有关的代码全部删掉
2. 对象和平台无关
3. 全面支持uncode编码

创建一个对象的最标准过程是使用 new操作符，也被称作实例化。单体内置对象不需要使用new操作符**实例化**，可以直接使用。

Object、 Array、Number、Boolean和 String 都是内置对象，严格上来说他们应该叫做本地对象。这些对象是可以使用new操作符来创建事例对象的。真正的内置对象是不可以使用new操作符来创建实例的，因为他们没有**构建方法**。

真正的两个内置对象：

* Global

  Global对象是无法访问的，它只是个概念，表示了全局环境。在全局环境下定义的变量函数都会作为Global对象的属性。

   isNaN()、isFinite()、parseInt()、 parseFloat() 都是Global对象的属性。

  在不同环境下Global对象表示的东西也不一样，比如浏览器下为window对象。准确的说是浏览器下Global对象是window对象的一部分。

  ## Global对象方法

  * 处理数字方法

    isNaN()    是否是NaN

    isFinite()  是否位于最小和最大的数值之间

    parseInt()  转换为数字

    parseFloat()   转换浮点数

  * 处理URL的方法

    编码：

    ​	encodeURI()  

    ​	encodeURIComponent()

    解码：

    ​	decodeURI() 
    ​	decodeURIComponent()

    主要区别：是否对一些可以正常在URL中使用，但是它本身是特殊字符的字符进行转码。encodeURI()  用于整个URL进行编码，encodeURIComponent() 用于URL一部分进行编码。

  * eval()方法

    eval方式是js的解释器，它可以接收一个字符串当作参数，然后把这字符串当作语句来执行。

    **作用分类：**

    1. 低版本浏览下将字符串形式的json结构转换为对象。
    2. 动态声明大量局部变量。
    3. 代码压缩

    **注意：**

    1. eval声明的变量是不会被提升的
    2. 严格模式下eval定义的变量在eval外面是访问不到的。
    3. eval当中使用的代码，在正常的开发过程是没办法调试的。
    4. eval对性能有影响。使用了eval相当于在js的解释器中有增加了一个解释器。平常所说的解释器在编译过程中有两种模式，快速模式和安全模式。一般情况下都会使用快速模式，但是在解释的扫描过程当中，如果遇到了eval函数，这时解释器在eval运行之前，是不知道它会进行什么样的操作的。解释器没办法对eval进行判断，所以在这种情况下，解释器就会进入到安全模式下进行编译。
    5. 存在安全隐患，eval会把所有的字符串当成真实的代码来运行。尤其是当执行用户输入的数据的时候问题会比较严重。会造成代码攻击

  ## Global对象属性

  大部分属性都是构造函数，Object、 Array、Number、Function、Boolean、String、Date、RegExp、Error

  三个特殊属性 undefined、 NaN 以及 Infinity 


* Math

   Math 对象提供的计算功能。

  是ES3中唯一可以访问的内置对象。ES5中加入了JSON对象。

  * Math 对象的属性

    Math.PI   π的值

  * Math  对象的方法

    * Math.ceil() 执行向上舍入

      比你的值要大的最小的一个整数

    * Math.floor() 执行向下舍入

      比你的值要小的最大的一个整数

    * Math.round() 执行标准舍入

      对现在的数字进行+0.5的操作，然后向下取整

    * Math.min()和 Math.max()

      获取一组数值中最大和最小的值。

      ES3只能接收俩个参数，ES5下可以接收多个参数。

    * Math.abs(num)

      返回num 的绝对值

    * Math.random()

      返回 0 到 1 的一个随机数

      理论上能得到0和1 事实上得不到0和1

      > 生成随机字符串

      ```js
      Math.random().toString(36) 
      // "0.d6mxnprne3c"
      ```

      > toString()除了可以把一个东西转换为字符串以外，还可以接收一个参数，这个参数表示转换后是几进制的数字，默认是10进制。
      >
      > Math.random() 生成的小数一般是16-17位，toString(36) 转换后小数点后的长度22-26位之间。字母数量在10-20个，字母出现的概率比较平均，但i这个字母会比其他字母高50%。