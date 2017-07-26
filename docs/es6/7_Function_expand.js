/**
 * Created by tanwu on 2017/7/20.
 */

//函数参数的默认值
//ES6之前，不能直接为函数的参数指定默认值，只能采用变通的方法
//function logMsg(x, y){
//    //如果参数y赋值了，但是对应的布尔值为false，则该赋值不起作用
//    //y = y || 'World!';
//    if(typeof y === undefined){
//        y = 'World';
//    }
//    console.log(x, y);
//}
//console.log(logMsg('Hello'));
//console.log(logMsg('Hello', 'China'));
//console.log(logMsg('Hello', ''));

//ES6--写法简洁，非常自然
//function logMsg(x, y='World'){
//    console.log(x, y);
//}
////console.log(logMsg('Hello'));
////console.log(logMsg('Hello', 'China'));
//console.log(logMsg('Hello', ''));

//好处：1、阅读代码的人，可以立刻意识到哪些参数是可以省略的，不用查看函数体或文档
//2、有利于将来的代码优化，即使未来的版本在对外接口中，彻底拿掉这个参数，也不会导致以前的代码无法运行
//function Point(x=0, y=0){
//    this.x = x;
//    this.y = y;
//}
//let p = new Point();
//console.log(p);

//参数变量是默认声明的，所以不用使用let或const再次声明
//function foo(x=5){
//    let x = 1;
//    //const x = 2;
//}

//一个容易忽略的地方是，参数默认值不是传值的，而是每次都重新计算默认值表达式的值。也就是说，参数默认值是惰性求值的
//let x = 99;
//function foo(p = x+1){
//    console.log(p);
//}
//console.log(foo());
//x = 100;
//console.log(foo());

//与解构赋值默认值结合使用
//function foo({x, y=5}){
//    console.log(x, y);
//}
////console.log(foo({}));
////console.log(foo({x: 1}));
////console.log(foo({x: 1, y: 2}));
//console.log(foo());

//function fetch(url, {body='', method='GET', headers={}}){
//    console.log(method);
//}
////console.log(fetch('http://www.baidu.com', {}));
//console.log(fetch('http://www.baidu.com'));

//结合函数参数的默认值，就可以省略第二个参数，就出现了双重默认值
//function fetch(url, {method='GET'} = {}){
//    console.log(method);
//}
//fetch('http://www.baidu.com');

//两种写法的区别？
//function m1({x=0, y=0} = {}){
//    return [x, y];
//}
//function m2({x, y} = {x: 0, y: 0}){
//    return [x, y];
//}
//console.log(m1());
//console.log(m2());

//参数默认值的位置
//通常情况下，定义了默认值的参数，应该是函数的尾参数。因为这样比较容易看出来，到底省略了哪些参数。如果非尾部的参数设置默认值，实际上这个参数是没法省略的
//function f(x=1, y){
//    return [x, y];
//}
////console.log(f());
////console.log(f(1));
////console.log(f(, 1));
//console.log(f(undefined, 1));

//function f(x, y=5, z){
//    return [x, y, z];
//}
////console.log(f());
////console.log(f(1));
////console.log(f(1 , , 1));
//console.log(f(1, undefined, 2));

//如果传入undefined，将触发该参数等于默认值，null则没有这个效果
//function foo(x=5, y=6){
//    console.log(x, y);
//}
//console.log(foo(undefined, null));

//函数的 length 属性
//指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真
//console.log((function (a){}).length);
//console.log((function (a=5){}).length);
//console.log((function (a,b,c=5){}).length);

//rest
//console.log((function (...args){}).length);

//如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了
//console.log((function(a=0, b, c){}).length);
//console.log((function(a, b=1, c){}).length);

//作用域
//一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）。等到初始化结束，这个作用域就会消失。
//在不设置参数默认值时，是不会出现的。
//var x = 1;
//function f(x, y=x){
//    console.log(y);
//}
//console.log(f(2));

//let x = 1;
//function f(y = x){
//    let x = 2;
//    console.log(y);
//}
//console.log(f());

//-------------------------------------------------×-------------------------------------------------------------------
//let foo = 'outer';
//function bar(func = x => foo){
//    let foo = 'inner';
//    console.log(func());
//}
//console.log(bar());

//var x = 1;
//function foo(x, y=function(){x=2;}){
//    var x = 3;
//    y();
//    console.log(x);
//}
//console.log(foo());
//console.log(x);

//应用--利用参数默认值，可以指定某一个参数不得省略，如果省略就抛出一个错误
//function throwIfMissing(){
//    throw new Error('Missing parameter');
//}
//function foo(mustBeProvided = throwIfMissing()){
//    return mustBeProvided;
//}
//console.log(foo());

//rest 参数
//function add(...values){
//    let sum = 0;
//    for(var val of values){
//        sum += val;
//    }
//    return sum;
//}
//console.log(add(2,5,3));

//rest 参数代替 arguments变量
//function sortNumbers(){
//    return Array.prototype.slice.call(arguments).sort();
//}
//const sortNumbers = (...numbers) => numbers.sort();

//function push(array, ...items){
//    items.forEach(function(item){
//        array.push(item);
//        console.log(item);
//    });
//}
//var a = [];
//console.log(push(a, 1,2,3));

//注意，rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。
//function f(a, ...b, c){
//    //...
//}

//函数的length属性，不包括rest参数
//console.log((function(a){}).length);
//console.log((function(...a){}).length);
//console.log((function(a, ...b){}).length);

//严格模式
//从 ES5 开始，函数内部可以设定为严格模式
//function doSomething(a, b){
//    'use strict';
//    // code
//}

//ES6：规定只有函数参数使用默认值、解构赋值、或者扩展运算符，那么函数内部就不能显示设定为严格模式，否则会报错
//error
//function doSomething(a, b=a){
//    'use strict';
//    // code
//}
//const doSomething = function({a, b}){
//    'use strict';
//    // code
//};
//const doSomething = (...a) => {
//    'use strict';
//    // code
//};
//const obj = {
//    doSomething({a, b}){
//        'use strict';
//        // code
//    }
//};

//第一种是设定全局性的严格模式，这是合法的
//第二种是把函数包在一个无参数的立即执行函数里面

//name 属性
//函数的name属性，返回该函数的函数名
//function foo(){}
//console.log(foo.name);

//注意：如果将一个匿名函数赋值给一个变量，ES5 的name属性，会返回空字符串，而 ES6 的name属性会返回实际的函数名
//var f = function(){}
//console.log(f.name);
//const bar = function baz(){}
//console.log(bar.name);

//console.log((new Function).name);

//箭头函数（=>）---------------------------------------√---------------------------------------------------------------
//var f = v => v;
////等同于
//var f = function(v){
//    return v;
//};

//如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分
//var f = () => 5;
////等同于
//var f = function(){
//    return 5
//};
//
//var sum = (num1, num2) => num1 + num2;
////等同于
//var sum = function(num1, num2){
//    return num1+num2;
//};

//如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回
//var sum = (num1, num2) => {
//    return num1+num2;
//};

//由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号
//var getTempItem = id => ({id: id, name: 'Temp'});

//箭头函数可以与变量解构结合使用
//const full = ({first, last}) => first + ' ' + last;
////等同于
//function full(person){
//    return person.first + ' ' + person.last;
//}

//箭头函数使得表达更加简洁
//const isEven = n => n%2 == 0;
//const square = n => n * n;

//应用--简化回调函数
//[1,2,3].map(function(x){
//    return x*x;
//});
////等同于
//[1,2,3].map(x => x*x);

//下面是 rest 参数与箭头函数结合的例子
//const numbers = (...nums) => nums;
//console.log(numbers(1,2,3,4,5));

//箭头函数有几个使用注意点
//1、函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象（this对象的指向是可变的，但是在箭头函数中，它是固定的）
//function foo(){
//    setTimeout(() => {
//        console.log('id：', this.id);
//    },100);
//}
//var id = 21;
//console.log(foo.call({id: 42}));

//function Timer(){
//    this.s1 = 0;
//    this.s2 = 0;
//    setInterval(() => this.s1++, 1000);
//    setInterval(function(){
//        this.s2++;
//    }, 1000);
//}
//var timer = new Timer();
//setTimeout(() => console.log('s1：', timer.s1), 3100);
//setTimeout(() => console.log('s2：', timer.s2), 3100);

//箭头函数可以让this指向固定化，这种特性很有利于封装回调函数
//var handler = {
//    id: '123456',
//    init: function(){
//        document.addEventListener('click',
//            event => this.doSomething(event.type), false);
//    },
//    doSomething: function(type){
//        console.log('Handling'+type+'for'+this.id);
//    }
//};

//转换后的ES5版本清楚地说明了，箭头函数里面根本没有自己的this，而是引用外层的this
//function foo(){
//    setTimeout(() => {
//        console.log('id：', this.id);
//    }, 1000);
//}
////等同于
//function foo(){
//    var _this = this;
//    setTimeout(function(){
//        console.log('id：', _this.id);
//    }, 1000);
//}

//function foo(){
//    return () => {
//        return () => {
//            return () => {
//                console.log('id:', this.id);
//            }
//        }
//    }
//}
//var f = foo.call({id: 1});
//console.log(f.call({id: 2})()());
//console.log(f().call({id: 3})());
//console.log(f()().call({id: 4}));

//arguments、super、new.target在箭头函数之中也是不存在的
//function foo(){
//    setTimeout(() => {
//        console.log('args:', arguments);
//    }, 1000);
//}
//console.log(foo(2,4,6,8));

//长期以来，JavaScript 语言的this对象一直是一个令人头痛的问题，在对象方法中使用this，必须非常小心。箭头函数”绑定”this，很大程度上解决了这个困扰

//2、不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误
//3、不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替
//4、不可以使用yield命令，因此箭头函数不能用作 Generator 函数

//嵌套的箭头函数
//function insert(value){
//    return {into: function(array){
//        return {after: function(afterValue){
//            array.splice(array.indexOf(afterValue)+1, 0, value);
//            return array;
//        }};
//    }};
//}
//console.log(insert(2).into([1, 3]).after(1));
//等同于
//let insert = (value) => ({into: (array) => ({after: (afterValue) => {
//    array.splice(array.indexOf(afterValue)+1, 0, value);
//    return array;
//}})});
//console.log(insert(2).into([1, 3]).after(1));

//管道机制
//const pipeline = (...funcs) => val => funcs.reduce((a, b) => b(a), val);
//const plus1 = a => a+1;
//const mult2 = a => a*2;
//const addThenMult = pipeline(plus1, mult2);
//console.log(addThenMult(5));

//const plus1 = a => a+1;
//const mult2 = a => a*2;
//console.log(mult2(plus1(5)));

//绑定 this   ES7提案
//foo::bar;
////等同于
//bar.bind(foo);
//
//foo::bar(...arguments);
////等同于
//bar.apply(foo, arguments);

//尾调用优化
// 概念：某个函数的最后一步是调用另一个函数
//function f(x){
//    return g(x);
//}
//尾调用不一定出现在函数尾部，只要是最后一步操作即可
//function f(x){
//    if(x > 0){
//        return m(x);
//    }
//    return n(x);
//}

//优化
// 函数调用会在内存形成一个“调用记录”，又称“调用帧”（call frame），保存调用位置和内部变量等信息。
// 如果在函数A的内部调用函数B，那么在A的调用帧上方，还会形成一个B的调用帧。等到B运行结束，将结果返回到A，B的调用帧才会消失。
// 如果函数B内部还调用函数C，那就还有一个C的调用帧，以此类推。所有的调用帧，就形成一个“调用栈”（call stack）

//尾递归--函数调用自身，称为递归。如果尾调用自身，就称为尾递归
// 递归非常耗费内存，因为需要同时保存成千上百个调用帧，很容易发生“栈溢出”错误（stack overflow）。
// 但对于尾递归来说，由于只存在一个调用帧，所以永远不会发生“栈溢出”错误
//function factorial(n){
//    if(n === 1) {
//        return 1;
//    }
//    return n*factorial(n-1);
//}
//console.log(factorial(5));

//function factorial(n, total){
//    if(n === 1){
//        return total;
//    }
//    return factorial(n-1, n*total);
//}
//console.log(factorial(5, 1));

//function Fibonacci2(n, ac1=1, ac2=1){
//    if(n <= 1){
//        return ac2;
//    }
//    return Fibonacci2(n-1, ac2, ac1+ac2);
//}
//console.log(Fibonacci2(100));




