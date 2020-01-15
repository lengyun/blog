# 包装对象

js中只有对象是有属性和方法的。

实际开发过程中，基础数据类型也可以访问它的属性调用它的方法。

原因：对js的解释器而言程序的执行是逐行的扫描并运行相应的代码，当js解释器对一行代码进行扫描的时候遇到了 . 或 [ ] 时。解释器会首先判断 . [] 前面的变量是否是个对象，如果是就会继续运行，如果不是那说明这个变量是基础数据类型，这个时候解释器会创建一个和这个基础数据类型对应的一个对象。然后再去访问这个对象它所对应的属性或者方法。在属性访问结束后这个对象会被立即删除。

基础数据类型被当作对象调用属性或方法时所创建出来的对象叫做**包装对象**

基础属性类型调用方法的过程分三步：创建包装对象，调用方法，删除包装对象。

5种基础数据类型中的 数字，布尔，字符串 有包装对象，null 和undefined没有包装对象。

## 包装对象的属性和方法

包装对象是对象的一种，包装对象都会有对象的基本的方法，toString() valueOf()

* 布尔类型包装对象

  * toString() 返回字符串 “true” 或“false”

  * valueOf() 返回布尔值本身 true false

* 数字类型包装对象

  * toFixed()  接受一个数字参数表示保留几位小数

    注意：

    1. 超过20位报错
    2. IE8及以上使用四舍五入，IE8以下不确定

  * toExponential()  接收一个数字参数，返回采用科学计数法形式的数字表示法

  * toPrecision() 根据需要保留数字数量，并且对应输出数字形式。

    接收一个数字参数，表示输出数字位数。位数不够就用科学记数法。

  **总结：**toFixed() 和 toExponential() 的参数都表示小数点后面的位数，toPrecision() 的参数表示的是所有数字的位数。

* 字符串类型包装对象

  * charAt()  

    查找对应位置的字符，从0开始。

  * charCodeAt()

    获取指定位置字符串它所对应的编码。

  * concat()

    拼接两个字符串，传入的参数就是字符串。一般不用，使用 “+”操作符

  * indexOf() lastIndexOf()

    获取匹配的字符在字符串中的位置索引，没找到返回 -1， indexOf从前找，lastIndexOf从后找。

  * split()

    对字符串进行分隔，可以接收一个参数，参数就是分隔的标识。返回的是一个数组。

    ```js
    var a ="qweqwe"
    a.split("w") // ["q", "eq", "e"]
    a.split("") // ["q", "w", "e", "q", "w", "e"]
    ```

  * slice()  substring() substr() 

    * slice() 截取 接收两个两个参数，一个开始位置一个结束位置进行截取

    * substring() 子字符串 接收两个两个参数，一个开始位置一个结束位置进行截取

      **相同点：**

      ​	都是从第一个参数表示的位置开始截取，截取到第二个位置的前一位。只传一个参数就从参数表示的位置到最后截取。返回的字符串的长度就是两个参数的差。

      **不同点：**

      ​	1.当第二个参数小于第一个参数时，substring会把两个参数调转过来,slice不会它返回空字符。substring把比较小的参数作为开始位置，将比较大的参数作为结束位置。

      ​	2.当参数中存在负数时，substring会把负数当作0来处理。slice会把负数当作倒数第几位来处理。

    * substr()  同substring类似，第二个参数表示的是截取的个数。如果存在负数同substring一样会转化为0来处理，但不会颠倒顺序。

  * toLowerCase()  toUpperCase()

    大小写转换，不需要参数

  * trim()  （ES5） 

    创建一个字符串的副本，删除前置及后缀的所有空格，然后返回结果。

    trimLeft()和 trimRight()分别用于删除字符串开头和末尾的空格。

  ####   ES6方法

  *  padStart() padEnd()

    对字符串进行填充，接收一个数字参数，填充对应数量的空格。

  * startsWith()  endsWith()

    判断字符串是否以某个字符开始或者结束。返回布尔值。

  * includes() （建议用ES5封装）
    看字符串中是否包含某个字符。

  * repeat()

    把字符串重复多少次来运行。

    #### 操作方法应用

  1. 字符串反转：

     把字符串通过split()进行分割，返回一个数组。调用数组的reverse方法反转

     ```js
     var a= "hello"
     var aArray= a.split("") // ["h", "e", "l", "l", "o"]
     aArray.reverse() // ["o", "l", "l", "e", "h"]
     aArray.join('') // "olleh"
     ```

  2. 页面上输出星期几

     ```js
     "今天是星期"+ "日一二三四五六".charAt((new Date).getDay())
     // "今天是星期四"
     ```

  3. 获取URL参数

  4. 获取文件扩展名

  5. 把字符串转换为驼峰命名

  6. 统计各个字符串出现的次数和频率


  #### 字符串和HTML的转换方法

  ```js
  var a = "hello"
  a.big()
  "<big>hello</big>"
  a.bold()
  "<b>hello</b>"
  a.fixed()
  "<tt>hello</tt>"
  a.fontcolor()
  "<font color="undefined">hello</font>"
  a.fontsize()
  "<font size="undefined">hello</font>"
  a.blink()
  "<blink>hello</blink>"
  a.italics()
  "<i>hello</i>"
  a.link("http://www.baidu.com")
  "<a href="http://www.baidu.com">hello</a>"
  ```



  #### 字符串和正则匹配

  * search() 搜索
  * match() 匹配
  * replace() 替换



