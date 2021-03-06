# 加减乘除和比较赋值

显式类型转换

String() Number() Boolean() Object()

隐式类型转换

## 乘性操作符

都是数字进行数字运算，有一个不是数字就转换为数字进行运算，如果不能转换为数字就会被转为NaN。

* 乘法
* 除法
* 求模
* 减法

注意：

1. 涉及到小数时，也不精确。
2. 求模运算结果不一定是整数，也可以是小数。

## 加性操作符

* 减法

  如果两个都是数字就进行数字运算，如果不是就转换为数字就行运算。不能转换为数字的为NaN。涉及到小数的也不精确。

* 加法（偏向字符串拼接）

  * 两个数字或布尔值相加

    两边都是数字或者布尔类型，布尔会转化为数字，然后相加。

  * 两个字符串拼接

    有一个为字符串就会将另外一个转化为字符串然后拼接。

    ```js
    123 + true //124
    "sdfa" + false  //"sdfafalse"
    {}+{} //"[object Object][object Object]"
    undefined + null //NaN
    [] + [] // ''
    ```

    不确定运算过程是如何转化的就先进行数据类型转换，再进行相加。

## 关系操作符

* 关系运算符（偏向于数字）

  小于（<） 、大于（>） 、小于等于（<=）和大于等于（>=）

  **数字比较**

  **字符串比较**，字符串比较本质是对字符串编码进行比较。

  **对象比较**，将对象转化原始值，先valueOf()后toString()。

  如果有一个是数值就把另外一个也转化为数字类型

  如果有一个NaN 结果为false，NaN不等于任何值。

  关系运算符返回值一定是布尔值。

  关系运算符是二元运算符，从左向右计算。

  ```js
  7>6>5 //false
  //true > 5
  //1 > 5  
  ```

* 结论

  加法运算和比较运算都会进行隐式转换。**加法运算偏向字符串处理，比较运算偏向数字比较。**

* 建议

  不确定先进行显示转换再比较

## 相等操作符

* 判断 == === != !==

  * === 全等，

    * 先进行数据类型比较
      * 数字  比较数值 NaN跟谁都不相等
      * 字符串  判断字符串编码。看着相等不一定相等
      * 布尔类型
      * null 和 undefind 只和自身相等
      * 对象 比较的是对象的引用

  * == 相等

    会进行隐式类型转换

    * null 和 undefind  相等

    * 数字、字符串和布尔 进行混合运算时，先转化为数字再比较

    * 字符串 和 布尔比较，都转化为数字比较 

      ```js
      '1' == true  //true
      ```

    * 对象 比较的是对象的引用

    * 对象跟原始类型比较，先把对象转化为原始类型，先valueOf()后toString()

* 赋值 =

  是二元操作符，有左右两个表达式就行运算。

  赋值运算左侧表达式必须是一个变量或者是对象的某一个属性。

  赋值运算左侧的表达式是一个可以改变的东西，可以改变的值称做**左值**

  右边的表达式可以是任何数据类型。

  ```js
  var num = 10;
  num = num + 10;
  // =优先级最低，所以先num + 10 得到20 然后赋值给num
  var age = 29;
  age++; //age = age + 1
  ```

- 复合赋值(带操作符的赋值)

  ```js
  var num = 10;
  num += 10;
  ```

  只是写法改变性能没有提升。

   乘/赋值（*=）；
   除/赋值（/=）；
   模/赋值（%=）；
   加/赋值（+=）；
   减/赋值（=）；
   左移/赋值（<<=）；
   有符号右移/赋值（>>=）；

  操作符都可以连续操作

  ```js
  //连续赋值问题
  var a = b =1
  //b会成为全局变量
  ```


## +特殊操作

1. 有一个是字符串，另外一个转换为字符串

2. 有undefind、null 、布尔、数字这四种类型混合运算，都会被转为数字然后相加

   ```js
   undefind + undefind //NaN
   null + null //0
   ```

3. 对象到原始值的转换（不确定是数字还是字符串）

   > 复习对象到字符串和数字转换

   - 对象到字符串

     先toString()后valueOf()

   - 对象到数字

     先valueOf() 后toString()

   两个对象相加，不知道结果会是数字或者字符串，就成了对象到原始值的转换

   **先valueOf() 后toString()** 。特殊的Date对象到原始值，直接toString()

   ```js
   []+[]  // ''
   //[].valueOf()>[] 
   //[].toString() ""

   1+[1,2] //"11,2"
   // [1,2].valueOf() > [1, 2]
   // [1, 2].toString() > "1,2"
   // 1+"1,2" > "11,2"

   1+{a: 1} //"1[object Object]"
   // {a: 1}的valueOf() >{a:1}
   // a.toString() > "[object Object]"
   // 1+"[object Object]" > "1[object Object]"

   {a: 1} +1  //1
   //js中 {} 除了表示对象外，还表示一个代码区域。
   // 实际解析如下：
   	{a: 1} 
   	+1 
   // 返回 +1 的值 1。二元加操作符变成了一元加操作符

   {}+{} //NaN 测试为"[object Object][object Object]"
   // 理论解析如下：
   	{}
   	+{}
   // +{} >NaN 对象进行一元加操作，即将对象转化为数字Number({})
   var a ={} 
   a+a //不换行 "[object Object][object Object]"
   ({})+{} //不换行 "[object Object][object Object]"

   []+{} //"[object Object]"
   //[].valueOf(); [].toString() > ""

   {}+[] //0
   //换行
   {}
   +[]
   // +[] > 0
   ```


## 比较==的特殊操作

js的解释器当中== 的转换规则比较复杂

首先判断左右两侧操作数的数据类型是否相同。

如果相同的数据类型 == 和 ===相同

数据类型不相同时：

1. 如果是 null 和 undefined 返回true
2. 数字、字符串和布尔类型，先转换为数字再进行比较
3. 操作数中存在对象，先把对象转化为原始值，再和另外的操作数进行比较
4. **如果上述条件都不满足返回false**

```js
null == false //false
undefined == false //false
```



