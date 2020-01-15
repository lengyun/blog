## 数据类型：

基础数据类型5种：布尔 number string null undefined

复杂数据类型1种：object

ES6新增 Symbol表示独一无二的值 初始化不需要使用new操作符

### 数据类型判断：

普通数据类型使用：typeof   null和object返回的都是object

> typeof是一元操作符不是函数

#### 对象进行判断

#### 数组的判断

```js
var a=[]
Array.isArray(a) //true
a.constructor === Array //true
// 多个iframe使用如下方式
Object.prototype.toString.call(a) === "[object Array]"
```

### 数组

#### 数组的方法

**push() pop() shift() unshift()  reverse() sort()** concat() slice() **splice()** indexOf() lastIndexOf() every() filter()  forEach()  map() some() reduce()  reduceRight() 

#### 数组去重

1. 空数组循环push的方式，一个一个的把原数组push进去。push前indexof判断一下新的值在数组种有没有，没有就push 有就下一个

2. 在原数组上进行去重的操作，对原数组有影响。用splice() 从原系统上一次进行对比，对比的数组项在前面或者后面有的话就删除当前的值，删掉后要吧数组的长度减1

3. 使用对象的属性不能相同的特点去重。

4. 对原数组进行排序，然后循环如果相邻的元素相同就删除

   最短的数组去重

   ```js
   [...] new set(arr)
   ```

#### 伪数组有哪些？

1. DOM选择器选择的节点列表
2. 函数中的 argument对象
3. jq选择器选择的jq对象

#### 伪数组如何转换为数组

1. 新建一个数组把伪数组的每一项循环放入到新数组中。
2. Array.prototype.slice.call(伪数组) 或者 [].slice.call(伪数组)

### 字符串

#### 字符串的方法

charAt()  concat() charCodeAt()  indexOf() lastIndexOf() split() slice()  substring() substr() toLowerCase()  toUpperCase() trim() 

slice()  substring() substr() 的区别

### 数字

如何判断一个东西是否是NaN？

isNaN() 不是用来判断是否是NaN，而是用来判断你传进去的参数是否可以转换为数字。

NaN不全等于自身。ES6的is() 方法。

### 布尔类型

js中哪些类型转化为布尔类型为false？

undefined 0 -0 null "" NaN  

任何对象转化为布尔类型都是true。 new Boolean(false) 转化为布尔类型还是true

快速的将将数据转化为布尔类型 两个!!

## new操作符的执行过程

1. 创建一个空对象
2. 修改this指针指向创建出来的对象
3. 运行构造函数中的所有代码
4. 将创建出来的对象作为返回值进行返回

使用new操作符没有参数的时候()是可以省略的。

###对构造函数来讲里面的返回值应该是什么样的？

返回值分成几个问题：

1. new操作符本身就会创建一个对象然后把他返回一个对象。也就是说new操作符创建出来的一定是一个对象。

   如果你在构造函数里面显示的写了一个返回值，即return **。这时会发生什么情况：
   * 返回的值不





