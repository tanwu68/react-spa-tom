/**
 * Created by tanwu on 2017/7/20.
 */

//属性的简洁表示法------------------------------------------------------------------------------------------------------
//ES6允许直接写入变量和函数，作为对象的属性和方法
//ES6允许在对象之中，直接写变量。这时，属性名为变量名，属性值为变量的值
//var foo = 'bar';
//var baz = {foo};
////等同于
////var baz = {foo: foo};
//console.log(baz);

//function f(x, y){
//    return {x, y};
//}
//console.log(f(1, 2));
//等同于
//function f(x, y){
//    return {x: x, y: y};
//}
//console.log(f(1, 2));

//方法的简洁表示法
//var o = {
//    method(){
//        return 'Hello!';
//    }
//};
//console.log(o);
//等同于
//var o = {
//    method: function(){
//        return 'Hello!';
//    }
//};
//console.log(o);

//function getPoint(){
//    var x = 1;
//    var y = 10;
//    return {x, y};
//}
//console.log(getPoint());

//CommonJS模块输出变量，就非常合适使用简洁写法
//var ms = {};
//
//function getItem(key){
//    return key in ms ? ms[key] : null;
//}
//
//function setItem(key, value){
//    ms[key] = value;
//}
//
//function clear(){
//    ms = {};
//}
//
////module.exports = {
////    getItem: getItem,
////    setItem: setItem,
////    clear: clear
////};
////等同于
//module.export = {getItem, setItem, clear};

//属性的赋值器(setter)和取值器(getter)，事实上也是采用这种写法
//var cart = {
//    _wheels: 4,
//    get wheels(){
//        return this._wheels;
//    },
//    set wheels(value){
//        if(value < this._wheels){
//            throw new Error('数值太小了！');
//        }
//        this._wheels = value;
//    }
//};

//注意，简洁写法的属性名总是字符串，这会导致一些看上去比较奇怪的结果
//var obj = {
//    class(){}
//};
////等同于
//var obj = {
//    'class': function(){}
//};

//Generator函数
//var obj = {
//    *m(){yield 'Hello World!';}
//};

//属性名表达式----------------------------------------------------------------------------------------------------------
//JavaScript语言定义对象的属性,有两种方法
//var obj = {};
//obj.foo = true;         //直接用标识符作为属性名
//obj['a' + 'bc'] = 123;  //用表达式作为属性名，要将表达式放在方括号之内
//console.log(obj);

//ES5：如果使用字面量方式定义对象（使用大括号），只能使用标识符定义属性
//var obj = {
//    foo: true,
//    abc: 123
//};
//console.log(obj);

//ES6：允许字面量方式定义对象时，用表达式作为对象的属性名
//let propKey = 'foo';
//let obj = {
//    [propKey]: true,
//    ['a' + 'bc']: 123
//};
//console.log(obj);

//var lastWord = 'last word';
//var a = {
//    'first word': 'hello',
//    [lastWord]: 'world'
//};
//console.log(a['first word']);
//console.log(a[lastWord]);
//console.log(a['last word']);

//表达式还可以用于定义方法名
//let obj = {
//    ['h' + 'ello'](){
//        return 'hi';
//    }
//};
//console.log(obj.hello());

//注意：属性名表达式与简洁表示法，不能同时使用，会报错
//var foo = 'bar';
//var bar = 'abc';
//var baz = {[foo]};
//console.log(baz);
//var foo = 'bar';
//var baz = {[foo]: 'abc'};
//console.log(baz);

//注意：属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串
//const keyA = {a: 1};
//const keyB = {b: 2};
//const myObject = {
//    [keyA]: 'valueA',
//    [keyB]: 'valueB'
//};
//console.log(myObject);

//方法的 name 属性------------------------------------------------------------------------------------------------------
//函数的 name 属性，返回函数名。对象方法也是函数，也有 name 属性
//const person = {
//    sayName(){
//        console.log('hello!');
//    }
//};
//console.log(person.sayName.name);

// 如果对象的方法使用了取值函数（getter）和存值函数（setter），则name属性不是在该方法上面，
// 而是该方法的属性的描述对象的get和set属性上面，返回值是方法名前加上get和set
//const obj = {
//    get foo(){},
//    set foo(x){}
//};
////console.log(obj.foo.name);
//const descriptor = Object.getOwnPropertyDescriptor(obj, 'foo');
//console.log(descriptor.get.name);
//console.log(descriptor.set.name);

//有两种特殊情况：bind方法创造的函数，name属性返回bound加上原函数的名字；Function构造函数创造的函数，name属性返回anonymous
//console.log((new Function ()).name);
//var doSomething = function(){
//    //...
//};
//console.log(doSomething.bind().name);

//如果对象的方法是一个 Symbol 值，那么name属性返回的是这个 Symbol 值的描述
//const key1 = Symbol('description');
//const key2 = Symbol();
//let obj = {
//    [key1](){},
//    [key2](){}
//};
//console.log(obj[key1].name);
//console.log(obj[key2].name);

// Object.is()----------------------------------------------------------------------------------------------------------
//ES5比较两个值是否相等，只有两个运算符：相等运算符（==）和严格相等运算符（===）
//它们都有缺点，前者会自动转换数据类型，后者的NaN不等于自身，以及+0等于-0
//console.log(Object.is('foo', 'foo'));
//console.log(Object.is({}, {}));
//不同之处只有两个：一是+0不等于-0，二是NaN等于自身
//console.log(+0 === -0);
//console.log(NaN === NaN);
//console.log(Object.is(+0, -0));
//console.log(Object.is(NaN, NaN));

// Object.assign()------------------------------------------------------------------------------------------------------
//Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）
//var target = {a: 1};
//var source1 = {b: 2};
//var source2 = {c: 3};
//Object.assign(target, source1, source2);//第一个参数是目标对象，后面的参数都是源对象
//console.log(target);

//注意：如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性
//var target = {a: 1, b: 1};
//var source1 = {b: 2, c: 2};
//var source2 = {c: 3};
//Object.assign(target, source1, source2);
//console.log(target);

//如果只有一个参数，Object.assign会直接返回该参数
//var obj = {a: 1};
//console.log(Object.assign(obj) === obj);

//如果该参数不是对象，则会先转换成对象，再返回
//console.log(typeof Object.assign(2));

//undefined和null无法转成对象，如果它们作为参数，就会报错
//console.log(Object.assign(undefined));
//console.log(Object.assign(null));
// 如果非对象参数出现在源对象的位置（即非首参数），那么处理规则有所不同。
// 首先，这些参数都会转成对象，如果无法转成对象，就会跳过。这意味着，如果undefined和null不在首参数，就不会报错
//let obj = {a: 1};
//console.log(Object.assign(obj, undefined) === obj);
//console.log(Object.assign(obj, null) === obj);
//其他类型的值（即数值、字符串和布尔值）不在首参数，也不会报错。但是，除了字符串会以数组形式，拷贝入目标对象，其他值都不会产生效果
//var v1 = 'abc';
//var v2 = true;
//var v3 = 10;
//var obj = Object.assign({}, v1, v2 ,v3);
//console.log(obj);

//注意：Object.assign方法实行的是浅拷贝，而不是深拷贝。如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用
//var obj1 = {a: {b: 1}};
//var obj2 = Object.assign({}, obj1);
//obj1.a.b = 2;
//console.log(obj2.a.b);
//对于这种嵌套的对象，一旦遇到同名属性，Object.assign的处理方法是替换，而不是添加
//var target = {a: {b: 'c', d: 'e'}};
//var source = {a: {b: 'hello'}};
//console.log(Object.assign(target, source));

//Object.assign可以用来处理数组，但是会把数组视为对象
//console.log(Object.assign([1, 2, 3], [4, 5]));

//用途
//1、为对象添加属性
//class Point{
//    constructor(x, y){
//        Object.assign(this, {x, y});
//    }
//}

//2、为对象添加方法
//Object.assign(SomeClass.prototype, {
//    someMethod(arg1, arg2){
//        //...
//    },
//    anotherMethod(){
//        //...
//    }
//});
////等同于
//SomeClass.prototype.someMethod = function(arg1, arg2){
//    //...
//};
//SomeClass.prototype.anotherMethod = function(){
//    //...
//};

//3、克隆对象
//将原始对象拷贝到一个空对象，就得到了原始对象的克隆
//function clone(origin){
//    return Object.assign({}, origin);
//}
//想要保持继承链，可以采用下面的代码
//function clone(origin){
//    let originProto = Object.getPrototypeOf(origin);
//    return Object.assign(Object.create(originProto), origin);
//}

//4、合并多个对象
//const merge = (target,...source) => Object.assign(target,...source);
//如果希望合并后返回一个新对象，可以改写上面函数，对一个空对象合并
//const merge = (...source) => Object.assign({},...source);

//5、为属性指定默认值
//const defaults = {
//    logLevel: 0,
//    outputFormat: 'html'
//};
//function processContent(options){
//    options = Object.assign({}, defaults, options);
//    console.log(options);
//}

//属性的可枚举性--------------------------------------------------------------------------------------------------------
//对象的每个属性都有一个描述对象（Descriptor）,用来控制该属性的行为
//Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象
//let obj = {foo: 123};
//console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));
//描述对象的 enumerable 属性，称为：可枚举性，如果为false，就表示某些操作会忽略当前属性
//ES5有三个操作会忽略 enumerable 为 false 的属性：
// for...in 循环：只遍历对象自身的和继承的可枚举的属性；---继承的属性
// Object.keys()：返回对象自身的所有可枚举的属性的键名
// JSON.stringify()：只串行化对象自身的可枚举的属性
// ES6新增 Object.assign()：只拷贝对象自身的可枚举的属性

//属性的遍历------------------------------------------------------------------------------------------------------------
//ES6一共有5种方法可以遍历对象的属性
//1、for...in
//2、Object.keys(obj)
//3、Object.getOwnPropertyNames(obj)
//4、Object.getOwnPropertySymbols(obj)
//5、Reflect.ownKeys(obj)

// __proto__ 属性、Object.setPrototypeOf()、Object.getPrototypeOf()-------------×--------------------------------------
//__proto__ 属性：用来读取或设置当前对象的prototype对象
//var obj = {
//    method: function(){
//        //...
//    }
//};
//obj.__proto__ = someOtherObj;
////ES5
//var obj = Object.create(someOtherObj);
//obj.method = function(){
//    //...
//};

// Object.setPrototypeOf()
//用来设置一个对象的prototype对象，返回参数对象本身
//var o = Object.setPrototypeOf({}, null);
//console.log(o);

//let proto = {};
//let obj = {x: 10};
//Object.setPrototypeOf(obj, proto);
//proto.y = 20;
//proto.z = 40;
//console.log(obj.x);
//console.log(obj.y);
//console.log(obj.z);

// Object.getPrototypeOf()
//该方法与Object.setPrototypeOf()方法配套，用于读取一个对象的原型对象
//Object.getPrototypeOf(obj);
//例子
//function Rectangle(){
//    //...
//}
//var rec = new Rectangle();
//console.log(Object.getPrototypeOf(rec) === Rectangle.prototype);
//Object.setPrototypeOf(rec, Object.prototype);
//console.log(Object.getPrototypeOf(rec) === Rectangle.prototype);

//如果参数不是对象，会被自动转为对象
//console.log(Object.getPrototypeOf(1));
//console.log(Object.getPrototypeOf('foo'));
//console.log(Object.getPrototypeOf(true));
//console.log(Object.getPrototypeOf(1) === Number.prototype);
//console.log(Object.getPrototypeOf('foo') === String.prototype);
//console.log(Object.getPrototypeOf(true) === Boolean.prototype);

//如果参数是undefined 和 null，它们无法转为对象，所以会报错
//console.log(Object.getPrototypeOf(null));
//console.log(Object.getPrototypeOf(undefined));

// Object.keys()、Object.values()、Object.entries()-------------------------------×------------------------------------



