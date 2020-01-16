module.exports = {
    '/docs/': ['/', ['/docs/', 'api文档']],
    '/js/': [
        ['/js/', 'js简介'],
        ['/js/1-2BasicConcept.md', '基础概念'],
        ['/js/1-3dataType.md', '数据类型'],
        ['/js/1-4expression.md', '表达式'],
        {
            title: '操作符',
            collapsable: false,
            children: [
                ['/js/1-5-1unaryOperator.md', '元操作符'],
                ['/js/1-5-2logicOperation.md', '逻辑运算符'],
                ['/js/1-5-3math.md', '加减乘除和比较赋值']
            ]
        },
        ['/js/1-6statement.md', '流程控制语句'],
        ['/js/1-7varScopeMemory.md', '变量作用域和内存'],
        {
            title: '数组',
            collapsable: false,
            children: [
                ['/js/1-8ArrayUse.md', '数组使用'],
                ['/js/1-8ArrayDedupliation.md', '数组去重']
            ]
        },
        ['/js/1-9date.md', '时间对象'],
        {
            title: '函数',
            collapsable: false,
            children: [
                ['/js/1-10functionCreat.md', '函数的创建'],
                ['/js/1-10scope.md', 'js中的作用域/函数表达式'],
                ['/js/1-10closure.md', '任意门详解闭包']
            ]
        },
        ['/js/1-11packObject.md', '包装对象'],
        ['/js/1-12builtinObject.md', '单体内置对象'],
        ['/js/1-13object-oriented.md', '面向对象的设计模式'],
        ['/js/1-14inherit.md', 'js中的继承'],
        ['/js/1-15summary.md', '综合知识复习'],
        {
            title: 'BOM',
            collapsable: false,
            children: [
                ['/js/2-1BOM.md', 'BOM对象']
            ]
        },
        {
            title: 'DOM',
            collapsable: false,
            children: [
                ['/js/3-1DOM.md', 'DOM概览'],
                ['/js/3-2-1dynamicAddJS.md', '动态加载js'],
                ['/js/3-2-2dynamicAddCSS.md', '动态加载css'],
                ['/js/3-2-3dynamicAndStatic.md', '动态和静态合集'],
                ['/js/3-2-4classAndfocus.md', 'class和焦点管理'],
                ['/js/3-2-5stringMendDOM.md', '使用字符串操作DOM节点'],
                ['/js/3-2-6scroll.md', 'JS的滚动操作'],
                ['/js/3-2-7scriptCss.md', '脚本化CSS'],
                ['/js/3-2-8scriptCss.md', '内链样式和外链样式操作']
            ]
        },
        {
            title: '事件',
            collapsable: false,
            children: [
                ['/js/4-1eventBasic.md', '事件的基本操作'],
                ['/js/4-2eventPriorityObject.md', '事件优先级和事件对象'],
                ['/js/4-3moustEvent.md', '鼠标事件']
            ]
        },
        {
            title: '面试',
            collapsable: false,
            children: [
                ['/js/interview.md', '面试']
            ]
        }
    ]

}