# 时间对象

GMT 时间 格林威治时间 

UTC 时间 （Coordinated Universal Time，国际协调时间）

js开始时间：1970 年 1 月 1 日午夜（零时）

## 时间对象创建

* 基础对象创建

  * 字符字面量 {}
  * new操作符 new Object()
  * ES5 方法创建 Object.create(原型,对象描述信息)

* 数组对象创建

  * 字符字面量 []
  * new 操作符 new Array()

* 时间对象创建

  * new 操作符

    var now = new Date();

    * 不传参数

      当前系统时间

    * 传入一个数字

      距离1970 年 1 月 1 日午夜（零时）的毫秒数

    * 传入多个参数

      代表年月日时分秒

      ```js
      new Date(2016,10,10)
      // Thu Nov 10 2016 00:00:00 GMT+0800 (CST)
      // 月份从0开始，除了天外都是从0开始
      ```

    * 其他数据类型

      ```js
      new Date(true) //false null true
      //Thu Jan 01 1970 08:00:00 GMT+0800 (CST)
      new Date(undefined)
      //Invalid Date 无效时间
      new Date("2016/10/10") 
      //Mon Oct 10 2016 00:00:00 GMT+0800 (CST)
      // 尽量把字符串转化为对应的时间，能识别数字和英文单词
      new Date("qewqwe")
      // 无意义的字符串返回 Invalid Date 无效时间
      ```

    字符串类型创建时间注意事情：

    1. 通常表示时间是用：年月日时分秒  在js中用 （月日年）中间可以用空格、逗号、斜杠/。月份是从0开始的。

    2. 时间用 ： 冒号分隔

    3. 时间和日期不分先后顺序，通常把时间放后面，用空格、逗号、斜杠/分隔，如果时间放前面必须用空格分隔，而且特殊情况会返回不一样。

    4. (年/月/日)形式也可以识别，最好用标准的（月/日/年）形式。

       > 如果数字和数字之间是使用连字符的形式进行连接，而且小于10的数字使用补零的方式并且后面没有设置具体的时间。这时就会得到一个不是你想要的时间。

       ```js
       new Date("2015-04-15")
       //Wed Apr 15 2015 08:00:00 GMT+0800 (CST) 
       //得到的是早上8点而不是0点
       ```

## 时间对象的方法

* 继承方法

  时间对象也是对象的一种继承了对象的三个基础方法

  * toString()

    返回表示时间的字符串，包括时区信息

  * toLocaleString()

    返回表示时间的字符串，不包括时区信息

  * valueOf()

    返回时间对象所对应的毫秒数，把时间对象转化为数字

    一元加操作符`+Date`也可以吧时间对象转化为数字

    ES5给为了保持语意统一给时间对象增加了no()方法

    关系运算符<>可以对对象进行比较，当你对对象进行比较的时候，系统也会先调用valieOf()方法把它转化为对应的原始类型进行比较。所以**时间对象也可以使用<> 号进行比较**。

* 格式化方法

  * toDateString()

  * toTimeString()

  * toLocaleDateString()

  * toLocaleTimeString()

    基本上没啥用

  * toUTCString() 

    返回**表示标准时间**的字符串。

    cookies设置过期时间

  * toGMTString()

* 自身方法 33个

  去掉get set UTC 剩下9个方法：Time、FullYear、Month、Date、Day、Houts、minutes、Seconds、Milliseconds。 

  * Time  没有UTC方法，

    getTime()把时间转为对应的毫秒数。

    setTime()以一个毫秒数来设置时间。

  * FullYear 的set传入是表示年份的四个数字，get获取的也是表示年份的四位数字。

  * get方法中 只有Date 是从1开始的，其他的事从0开始

  * set方法中 当你设置一个比他应有的数字还大的数字时候，这时你得到的时间对象会对他前一个单位进行加一操作。

  * getDate 得到日期  getDay 得到星期几从0开始

  **总结：**

  年、月、日、时、分、秒、毫秒 （7个） 

  每一个对应一个set 和get （14个） 

  有UTC和没UTC的方法（28）

  day()方法没有set方法 （30）

  time() 方法没有UTC方法（32）

  getTimezoneOffset() 方法 获取时差方法（33）

  所有的get方法返回值都是数字

  所有的set方法入参都是数字，返回都是时间对象

## 补充知识

把时间对象转化为 对应的毫秒数：

`var date = new Date`

1. valueOf()方法 `date.valueOf()`
2. getTime()方法 `date.getTime()`
3. number()方法  `Number(date)`
4. 一元操作符+  `+date`
5. `Date.parse(a)` 效率最慢

 效率比较 valueOf()和 getTime()  》number() 和 一元+  差别不大