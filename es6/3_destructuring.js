/**
 * Created by tanwu on 2017/7/17.
 */

//数组的解构赋值-----------------------------------------------1--------------------------------------------------------
//let [a, b, c] = [1, 2, 3];
//console.log(a,b,c);

//嵌套数组进行解构赋值
//let [foo, [[bar], baz]] = [1, [[2], 3]];
//console.log(foo, bar, baz);
//let [ , , third] = ["foo", "bar", "baz"];
//console.log(third);
//let [x, , y] = [1, 2, 3];
//console.log(x, y);
//let [head, ...tail] = [1, 2, 3, 4];
//console.log(head, tail);
//let [x, y, ...z] = ['a'];
//console.log(x ,y ,z);

//不完全解构
//let [x, y] = [1, 2, 3];
//let [a, [b], d] = [1, [2, 3], 4];
//console.log(x, y);
//console.log(a, b, d);

//Set
//let [x, y, z] = new Set(['a', 'b', 'c']);
//console.log(x, y, z);

//默认值
//let [foo = true] = [];
//console.log(foo);

//惰性求值
//function f() {
//    console.log('aaa');
//    return 6;
//}
//let [x = f()] = [1];
//console.log(x);

//对象的解构赋值------------------------------------------------2-------------------------------------------------------
//数组的元素是按次序排列的，变量的取值由它的位置决定；
//对象的属性没有次序，变量必须与属性同名，才能取到正确的值
//let { foo, bar } = { foo: "aaa", bar: "bbb" };
//console.log(foo, bar);
//等同于--对象的解构赋值内部机制，是先找到同名属性，然后在赋给对应的变量
//let { foo:foo, bar:bar } = { foo: "aaa", bar: "bbb" };
//console.log(foo, bar);
//foo是匹配的模式，baz才是变量。真正被赋值的是变量baz，而不是模式foo
//let {foo: baz} = {foo: 'aaa', bar: 'bbb'};
//console.log(foo);
//变量没有对应的同名属性，导致取不到值，等于undefined
//let { baz } = { foo: "aaa", bar: "bbb" };
//console.log(baz);

//嵌套解构的对象
//let obj = {
//    p: [
//        'Hello',{y: 'world'}
//    ]
//};
//let {p: [x, {y}], p} = obj;
//console.log(x,y, p);

//let node = {
//    loc: {
//        start: {
//            line: 1,
//            column: 5
//        }
//    }
//};
//let { loc, loc: { start }, loc: { start: { line }} } = node;
//console.log(loc, start, line);

//默认值--生效的条件是，对象的属性值严格等于undefined
//var {x=3} = {};
//console.log(x);
//var {x, y = 5} = {x: 1};
//console.log(x, y);
//var {x: y = 3} = {};
//console.log(y);

//注意：如果要将一个已经声明的变量用于解构赋值，使用（）
//let x;
//({x}={x:1});
//console.log(x);

//数组本质是特殊的对象，可以对数组进行对象属性的解构
//let arr = [1,2,3];
//let {0: first, [arr.length-1]: last} = arr;
//console.log(first, last);

//字符串的解构赋值------------------------------------------------3-----------------------------------------------------
//const [a,b,c,d,e] = 'hello';
//console.log(a,b,c,d,e);

//let {length: len} = 'hello';
//console.log(len);

//数值和布尔值的解构赋值--------------------------------------------4---------------------------------------------------
//解构赋值的规则是：只要等号右边的值不是对象或数组，就先将其转为对象。undefined和null无法转为对象
//let {toString: s}=123;
//console.log(s === Number.prototype.toString);
//let {toString: s}=true;
//console.log(s === Boolean.prototype.toString);

//函数参数的解构赋值-------------------------------------------------5--------------------------------------------------
//function add([x, y]){
//    return x+y;
//}
//console.log(add([1,2]));

//console.log([[1, 2], [3, 4]].map(([a, b]) => a + b));

//默认值
//function move({x=0,y=0}={}){
//    return [x,y];
//}
//console.log(move({x:3,y:8}));

//圆括号问题---------------------------------------------------------6--------------------------------------------------
//解构赋值虽然很方便，但是解析起来并不容易。对于编译器来说，一个式子到底是模式，还是表达式，没有办法从一开始就知道，
// 必须解析到（或解析不到）等号才能知道。
//由此带来的问题是，如果模式中出现圆括号怎么处理。ES6 的规则是，只要有可能导致解构的歧义，就不得使用圆括号。
//但是，这条规则实际上不那么容易辨别，处理起来相当麻烦。因此，建议只要有可能，就不要在模式中放置圆括号。

//1、变量声明语句-不能使用
//let [(a)] = [1];
//2、函数参数
//function f([(z)]){
//    return z;
//}
//3、赋值语句的模式
//({p: a}) = {p: 1};

//赋值语句的非模式部分，可以使用
//[(b)] = [3];
//console.log(b);

//用途-----------------------------------------------------------7------------------------------------------------------
//1、交换变量的值
//let x=1;
//let y=2;
//[x, y] = [y, x];
//console.log(x, y);

//2、从函数返回多个值
// 返回一个数组
//function example() {
//    return [1, 2, 3];
//}
//let [a, b, c] = example();
//console.log(a,b,c);
// 返回一个对象
//function example() {
//    return {
//        foo: 1,
//        bar: 2
//    };
//}
//let { foo, bar } = example();
//console.log(foo, bar);

//3、函数参数定义
//function f([x, y, z]) {
//    return x+y+z;
//}
//console.log(f([1,2,3]));

//4、提取JSON数据
//let jsonData = {
//    id: 1,
//    status: 'ok',
//    data: [2,3]
//};
//let {id, status, data: number}=jsonData;
//console.log(id,status,number);

//5、函数参数的默认值
//6、遍历Map结构
//var map = new Map();
//map.set('first', 'hello');
//map.set('second', 'world');
//for(let [key, value] of map){
//    console.log(key +'is'+ value);
//}

//7、输入模块的指定方法
//const { SourceMapConsumer, SourceNode } = require("source-map");
