(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{242:function(s,t,e){"use strict";e.r(t);var v=e(0),_=Object(v.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"脚本化css"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#脚本化css"}},[s._v("#")]),s._v(" 脚本化css")]),s._v(" "),e("p",[s._v("使用css的方式")]),s._v(" "),e("ol",[e("li",[s._v("外链样式表link标签")]),s._v(" "),e("li",[s._v("嵌入式样式表style标签")]),s._v(" "),e("li",[s._v("内链样式表style属性")])]),s._v(" "),e("h2",{attrs:{id:"内链样式表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内链样式表"}},[s._v("#")]),s._v(" 内链样式表")]),s._v(" "),e("p",[s._v("把css属性以字符串的形式写在DOM节点上的style属性里面。 当我们相对这些样式进行操作的时候首先需要获取这些样式，然后对它进行修改。每一个DOM节点都有一个style属性对应了当前节点的样式。当我们通过DOM节点来获取style属性的时候我们可以得到一个style对象。这个style对象它里面包含了通过style属性设置的所有的样式信息。它只包含内链样式表所对应的信息，不包含外部样式表和嵌入式样式表所提供的信息。")]),s._v(" "),e("ol",[e("li",[s._v("style属性对应的css属性名称包含一个或多个连字符，这时如果你要对当前的属性进行修改的话它所对应的属性名你要进行一些修改。你需要把连字符链接的形式改成驼峰式的命名。比如：background-color 改为backgroundColor")]),s._v(" "),e("li",[s._v("在css属性当中有一些属性是js中的保留字。这时在设置css名称的时候需要在属性前面添加一个css的前缀。比如：float改为 cssFloat （只有它）")]),s._v(" "),e("li",[s._v("所有的这些style对象的属性都是可读可写的，如果你对css的值进行修改的时候一旦修改成功浏览器会立即更新元素的外观。")]),s._v(" "),e("li",[s._v("如果你修改的样式不是一个符合规定的样式，这种情况下浏览器是不会报错的它会默认为失败不执行。")]),s._v(" "),e("li",[s._v("HTML两种模式，标准模式，混合模式。标准模式下所有的度量值都要设置度量单位，在混合模式下是不需要设置度量单位。如：宽度高度")]),s._v(" "),e("li",[s._v("在js中读取一个没有设置过的行内样式这时会返回空字符串")]),s._v(" "),e("li",[s._v("16进制的颜色值，通过js读取有的浏览器会返回rgb结构的值")])]),s._v(" "),e("hr"),s._v(" "),e("h2",{attrs:{id:"style对象的属性和方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#style对象的属性和方法"}},[s._v("#")]),s._v(" style对象的属性和方法")]),s._v(" "),e("p",[s._v("通过DOM节点的style属性可以拿到一个style对象，这个对象是CSSStyleDeclaration对象的实例。于此同时它也是一个伪数组，有langth属性，也可以通过索引的方式进行访问但它实际上是个对象。")]),s._v(" "),e("p",[s._v("三个属性：")]),s._v(" "),e("ul",[e("li",[s._v("cssText：返回的值就是style属性对应的文本的内容。ie8下返回的css属性名称是大写的")]),s._v(" "),e("li",[s._v("length:  返回的是内链样式的个数。ie8不支持")]),s._v(" "),e("li",[s._v("parentRule：返回的还是个对象，称为cssRule对象，ie8不支持。")])]),s._v(" "),e("p",[s._v("6个方法：ie8不支持")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("getPropertyPriority(propertyName)")]),s._v(" "),e("p",[s._v("获取属性优先级，接收css名字的字符串作为参数，返回一个优先级，这个优先级指的就是!important，设置了就返回important，没设置就返回空字符串。")])]),s._v(" "),e("li",[e("p",[s._v("getPropertyValue(propertyName)")])])]),s._v(" "),e("p",[s._v("获取属值，同样接收css名字的字符串作为参数，返回对应属性的值。")]),s._v(" "),e("ul",[e("li",[s._v("item(index)")])]),s._v(" "),e("p",[s._v("接收一个数字作为参数，返回指定位置的css属性。通过[]获取是一样的")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("removeProperty(propertyName)")]),s._v(" "),e("p",[s._v("接收css名字的字符串作为参数，把制定的样式从当前样式表中删除掉，返回的值就是删掉的样式的数值。")])]),s._v(" "),e("li",[e("p",[s._v("setProperty(propertyName,value,priority)")]),s._v(" "),e("p",[s._v("添加属性值，第一个参数是属性名，第二个参数是属性值，第三个参数是是否加上important优先级。")])]),s._v(" "),e("li",[e("p",[s._v("getPropertyCSSValue(propertyName)")]),s._v(" "),e("p",[s._v("获得一个cssRule对象，这个对象包含两个属性。第一个属性cssText")]),s._v(" "),e("p",[s._v("另外一个叫cssValueType它的值是一个数字（0，1，2，3）0代表继承的值，1表示的是基本的值，2表示的是列表值，3表示一个自定义的值。（浏览器兼容性）")])])]),s._v(" "),e("h2",{attrs:{id:"计算样式🧮"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#计算样式🧮"}},[s._v("#")]),s._v(" 计算样式🧮")]),s._v(" "),e("p",[s._v("网页将一个元素渲染成最后的结果，这个是多个css经过计算后的一个最终结果。css叫层叠样式表，在浏览器中最后呈现的效果不是一个css决定的，是多个css混合计算得到的结果。通过style对象拿到的值只是在内链样式当中写进入的值，并不一定是它最终呈现出来的。所以它一般只用来设置而不用来读取，读取出来的可能是不准的。内链样式设置属性优先级比较高，所有一般用来设置属性。")]),s._v(" "),e("p",[s._v("如果想要拿到一个DOM节点它最终计算出来的样式需要用到一个特殊的方法")]),s._v(" "),e("p",[s._v("**getComputedStyle()**方法")]),s._v(" "),e("p",[s._v("第一个参数，要获取样式的元素及DOM节点，第二个参数，是一个伪元素的字符串，比如：:after, :before 想要拿到伪元素的样式就传。返回的也是CSSStyleDeclaration 对象的实例。不同的是它里面包含了当前元素所有计算后的样式。想要获取里面的属性和值通过上面的属性和方法就可以。")]),s._v(" "),e("p",[s._v("调用：getComputedStyle()最开始是win对象上的方法，后来浏览器对整个DOM结构进行升级后把他同时作为了document.defatultView属性。有三种方式调用：")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("window.getComputedStyle()")]),s._v(" "),e("p",[s._v("window可以省略可以直接使用")])]),s._v(" "),e("li",[e("p",[s._v("getComputedStyle()")])]),s._v(" "),e("li",[e("p",[s._v("document.defaultView.getComputedStyle()")])])]),s._v(" "),e("blockquote",[e("p",[s._v("IE8及以下浏览器不支持getComputedStyle方法，在 IE 中，每个具有 style 属性的元素还有一个 currentStyle 属性。currentStyle属性返回的也是一个style对象，使用方式同上。")]),s._v(" "),e("p",[s._v("不同点：getComputedStyle是一个方法，需要把节点传进去，currentStyle是属性，需要在节点上使用")])]),s._v(" "),e("p",[e("strong",[s._v("注意事项：")])]),s._v(" "),e("ol",[e("li",[e("p",[s._v("获取的计算样式是只读的。")])]),s._v(" "),e("li",[e("p",[s._v("符合属性，省略写法，不同浏览器返回不一样。")])]),s._v(" "),e("li",[e("p",[s._v("计算样式的获取需要获取三个步骤，1. 先拿到值，2.进行计算 3.布局计算")])]),s._v(" "),e("li",[e("p",[s._v("如果某个DOM节点你没有对它使用绝对定位这时通过计算样式获取他的top或者left你会得到一个字符串auto")])]),s._v(" "),e("li",[e("p",[s._v("虽然计算样式是浏览器最终呈现出来的样式，但他也不是100%准确的。")]),s._v(" "),e("ul",[e("li",[s._v("它返回的值不会精确的告诉你是什么值，比如字体返回一堆字体不会告诉你当前使用的是哪一种字体")]),s._v(" "),e("li",[s._v("获取的不正确，比如点击链接后颜色的变化，牵涉到隐私，浏览器不会给你返回一个准确的颜色值")])])]),s._v(" "),e("li",[e("p",[s._v("currentStyle和getComputedStyle()都不会输出复合样式，直接输出空字符串。不同点， currentStyle对应颜色和百分比设置它不会进行对应的转换而是直接给你输出出来。")])])]),s._v(" "),e("h2",{attrs:{id:"脚本化css类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#脚本化css类"}},[s._v("#")]),s._v(" 脚本化css类")]),s._v(" "),e("p",[s._v("修改一个元素上面的多个样式，使用脚本化css效率比较低的，后期的维护成本也比较高。针对这种情况我们可以通过js来切换某个元素的不同class获得不同的显示效果。动态的去操作元素class的方式称做脚本化css类。")]),s._v(" "),e("p",[s._v("脚本化css类使用DOM节点上的class属性。class是js的关键字，js调用时候需要使用className属性。调用className属性返回一个字符串，这个字符串就是当前节点的class里面对应的字符串，而且是一个可写的属性。你可以直接把里面的值改掉。相比于修改cssText这种切换class类的方式的性能和体验都会更好一点。")]),s._v(" "),e("p",[s._v("问题：")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("当我们给他赋值的时候只能赋一个字符串，不是字符串会被转换为字符串")])]),s._v(" "),e("li",[e("p",[s._v("赋值的时候原来的class会被替换掉，若果要添加class类，需要先获取当前的calss然后用字符串拼接的方式拼上新的class然后一次性的赋值给它。为了解决这个问题，H5给DOM元素添加了一个classList的属性，它返回的也是一个伪数组。是一个DOMTokenList对象，表示了当前DOM元素所包含的所有类名的合集。")]),s._v(" "),e("p",[s._v("classList方法：")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("add(value)")]),s._v(" "),e("p",[s._v("对当前DOM节点新增一个新的class， 也可以添加多个 。")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("classList"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aa"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bb"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cc"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// IE下一次只能添加一个")]),s._v("\n")])])])]),s._v(" "),e("li",[e("p",[s._v("remove(value)")]),s._v(" "),e("p",[s._v("删除一个class类，一可以删除多个，但IE不支持")])]),s._v(" "),e("li",[e("p",[s._v("toggle(value)")]),s._v(" "),e("p",[s._v("反转css类，有的删，没的加")])]),s._v(" "),e("li",[e("p",[s._v("contains(value)")]),s._v(" "),e("p",[s._v("检查是否存在，返回布尔值")])]),s._v(" "),e("li",[e("p",[s._v("replace(value,value)")]),s._v(" "),e("p",[s._v("替换，接收两个参数，要被替换的class和替换的class")]),s._v(" "),e("p",[s._v("只支持chrome和firefox，safair和IE不支持")])])])])])])}),[],!1,null,null,null);t.default=_.exports}}]);