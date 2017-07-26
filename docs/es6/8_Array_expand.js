/**
 * Created by tanwu on 2017/7/20.
 */

//扩展运算符（...）
//含义
//console.log(...[1, 2, 3]);
//console.log(1,...[2,3,4], 5);
//console.log([...document.querySelectorAll('div')]);

//主要用于函数调用
//function push(array, ...items){
//    array.push(...items);
//}
//function add(x, y){
//    return x + y;
//}
//var numbers = [4, 38];
//console.log(add(...numbers));

//扩展运算符与正常的函数参数可以结合使用，非常灵活
//function f(v, w, x, y, z){
//    console.log(v, w, x, y, z);
//}
//var args = [0, 1];
//console.log(f(-1, ...args, 2, ...[3]));

//扩展运算符后面还可以放置表达式
//const arr = [
//    ...(1 > 0 ? ['a'] : []),
//    'b'
//];
//console.log(arr);

//如果扩展运算符后面是一个空数组，则不产生任何效果
//console.log([...[], 1]);

//替代数组的 apply 方法
//由于扩展运算符可以展开数组，所以不再需要apply方法，将数组转为函数的参数了
//function f(x, y, z){
//    console.log(x, y, z);
//}
//var args = [0, 1,2];
//console.log(f.apply(null, args));
//console.log(f(...args));

//下面是扩展运算符取代apply方法的一个实际的例子
//console.log(Math.max.apply(null, [14, 3, 77]));
//console.log(Math.max(...[14, 3, 77]));
//console.log(Math.max(14, 3, 77));

//通过push函数，将一个数组添加到另一个数组的尾部
//var arr1 = [0, 1, 2];
//var arr2 = [3, 4, 5];
//console.log(Array.prototype.push.apply(arr1, arr2));
//console.log(arr1.push(...arr2));

//扩展运算符的应用
//1、合并数组
//console.log([1, 2].concat(3));
//console.log(1, 2,...[3]);

//var arr1 = ['a', 'b'];
//var arr2 = ['c'];
//var arr3 = ['d', 'e'];
//console.log(arr1.concat(arr2, arr3));
//console.log([...arr1,...arr2,...arr3]);

//2、与解构赋值结合
//如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错
//const [first, ...rest] = [1, 2, 3, 4, 5];
//console.log(first, rest);

//3、函数的返回值
//JavaScript 的函数只能返回一个值，如果需要返回多个值，只能返回数组或对象。扩展运算符提供了解决这个问题的一种变通方法
//var dateFields = readDateFields(database);
//var d = new Date(...dateFields);

//4、字符串
//扩展运算符还可以将字符串转为真正的数组
//console.log([...'hello']);

//能够正确识别32位的Unicode字符
//console.log('x\uD83D\uDE80y'.length);
//console.log([...'x\uD83D\uDE80y'].length);

//5、实现了 Iterator 接口的对象
// querySelectorAll方法返回的是一个nodeList对象。它不是数组，而是一个类似数组的对象。
// 这时，扩展运算符可以将其转为真正的数组，原因就在于NodeList对象实现了 Iterator
//var nodeList = document.querySelectorAll('div');
//var array = [...nodeList];

//let arrayLike = {
//    '0': 'a',
//    '1': 'b',
//    '2': 'c',
//    length: 3
//};
//console.log([...arrayLike]);

//6、Map 和 Set 结构，Generator函数
//let map = new Map([
//    [1, 'one'],
//    [2, 'two'],
//    [3, 'three']
//]);
//let arr = [...map.keys()];
//console.log(arr);

//var go = function*(){
//    yield 1;
//    yield 2;
//    yield 3;
//};
//console.log([...go()]);

//如果对没有 Iterator 接口的对象，使用扩展运算符，将会报错
//var obj = {a: 1, b: 2};
//console.log([...obj]);

// Array.from()--用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）
//let arrayLike = {
//    '0': 'a',
//    '1': 'b',
//    '2': 'c',
//    length: 3
//};
//console.log([].slice.call(arrayLike));
//console.log(Array.from(arrayLike));

//实际应用中，常见的类似数组的对象是DOM操作返回的NodeList集合，以及函数内部的arguments对象。Array.from都可以将它们转为真正的数组
// NodeList对象
//let ps = document.querySelectorAll('p');
//Array.from(ps).forEach(function (p) {
//    console.log(p);
//});
//
//// arguments对象
//function foo() {
//    var args = Array.from(arguments);
//    // ...
//}

//只要是部署了Iterator接口的数据结构，Array.from都能将其转为数组
//console.log(Array.from('hello'));
//let nameSet = new Set(['a', 'b']);
//console.log(Array.from(nameSet));

//如果参数是一个真正的数组，Array.from会返回一个一模一样的新数组
//console.log([1, 2, 3]);

//值得提醒的是，扩展运算符（...）也可以将某些数据结构转为数组
// arguments对象
//function foo() {
//    var args = [...arguments];
//}
//
//// NodeList对象
//[...document.querySelectorAll('div')]

//Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组
//Array.from(arrayLike, x => x * x);
////等同于
//Array.from(arrayLike).map(x => x * x);

//console.log(Array.from([1, 2, 3, 4], x => x * x));
//console.log(Array.from([1, , 2, , 3], n => n || 0));

//Array.of()--用于将一组值，转换为数组
//弥补数组构造函数Array()的不足
//console.log(Array.of(3, 11, 8));
//console.log(Array.of(3));
//console.log(Array.of(3).length);

// Array方法没有参数、一个参数、三个参数时，返回结果都不一样。
// 只有当参数个数不少于2个时，Array()才会返回由参数组成的新数组。参数个数只有一个时，实际上是指定数组的长度
//console.log(Array());
//console.log(Array(3));
//console.log(Array(3, 11, 8));

//数组实例的 copyWithin()--在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组
//Array.prototype.copyWithin(target, start = 0, end = this.length)
// 它接受三个参数
// target（必需）：从该位置开始替换数据。
// start（可选）：从该位置开始读取数据，默认为0。如果为负值，表示倒数。
// end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。
//console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
//console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
//console.log([1, 2, 3, 4, 5].copyWithin(0, -2, -1));
//console.log([].copyWithin.call({length: 5, 3: 1}, 0, 3));

//数组实例的 find() 和 findIndex()
//数组实例的find方法，用于找出第一个符合条件的数组成员
//它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined
//console.log([1, 4, -5, 10].find(n => n < 0));
//console.log(
//    [1, 5, 10, 15].find(function(value, index, arr) {
//        return value > 9;
//    })
//);

//数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1
//console.log(
//    [1, 5, 10, 15].findIndex(function(value, index, arr) {
//        return value > 9;
//    })
//);

//数组实例的 fill()--使用给定值，填充一个数组
//console.log(['a', 'b', 'c'].fill(7));
//fill方法用于空数组的初始化非常方便。数组中已有的元素，会被全部抹去
//console.log(new Array(3).fill(7));

//fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置
//console.log(['a', 'b', 'c'].fill(7, 1, 2));

//数组实例的 entries()、keys()、values()
//keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历
//for (let index of ['a', 'b'].keys()) {
//    console.log(index);
//}
//
//for (let elem of ['a', 'b'].values()) {
//    console.log(elem);
//}
//
//for (let [index, elem] of ['a', 'b'].entries()) {
//    console.log(index, elem);
//}

//如果不使用for...of循环，可以手动调用遍历器对象的next方法，进行遍历
//let letter = ['a', 'b', 'c'];
//let entries = letter.entries();
//console.log(entries.next().value);
//console.log(entries.next().value);
//console.log(entries.next().value);

//数组实例的 includes()--表示某个数组是否包含给定的值，与字符串的includes方法类似
//console.log([1, 2, 3].includes(2));
//console.log([1, 2, 3].includes(4));
//console.log([1, 2, NaN].includes(NaN));

// 第二个参数表示搜索的起始位置，默认为0。
// 如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度（比如第二个参数为-4，但数组长度为3），则会重置为从0开始
//console.log([1, 2, 3].includes(3, 3));
//console.log([1, 2, 3].includes(3, -1));

//没有该方法之前，我们通常使用数组的indexOf方法，检查是否包含某个值
//if (arr.indexOf(el) !== -1) {
//    // ...
//}
// indexOf方法有两个缺点
// 一是不够语义化，它的含义是找到参数值的第一个出现位置，所以要去比较是否不等于-1，表达起来不够直观。
// 二是，它内部使用严格相等运算符（===）进行判断，这会导致对NaN的误判
//console.log([NaN].indexOf(NaN));
//console.log([NaN].includes(NaN));

//数组的空位--数组的空位指，数组的某一个位置没有任何值
//console.log(Array(3));

//注意，空位不是undefined，一个位置的值等于undefined，依然是有值的。空位是没有任何值，in运算符可以说明这一点
//console.log(0 in [undefined, undefined, undefined]);
//console.log(0 in [, , ,]);

//forEach(), filter(), every() 和some()都会跳过空位
//[,'a'].forEach((x,i) => console.log(i));
//console.log(['a',,'b'].filter(x => true));
//console.log([,'a'].every(x => x==='a'));
//console.log([,'a'].some(x => x !== 'a'));

//map()会跳过空位，但会保留这个值
//console.log([,'a'].map(x => 1));

//join()和toString()会将空位视为undefined，而undefined和null会被处理成空字符串
//console.log([,'a',undefined,null].join('#'));
//console.log([,'a',undefined,null].toString());

//Array.from方法会将数组的空位，转为undefined
//console.log(Array.from(['a',,'b']));

//扩展运算符（...）也会将空位转为undefined --------------------×-----------------------------
//console.log([...['a',,'b']]);

//copyWithin()会连空位一起拷贝
//console.log([,'a','b',,].copyWithin(2,0));

//fill()会将空位视为正常的数组位置
//console.log(new Array(3).fill('a'));

//for...of循环也会遍历空位
//let arr = [, ,];
//for (let i of arr) {
//    console.log(1);
//}

//entries()、keys()、values()、find()和findIndex()会将空位处理成undefined
//console.log([...[,'a'].entries()]);
//console.log([...[,'a'].keys()]);
//console.log([...[,'a'].values()]);
//console.log([,'a'].find(x => true));
//console.log([,'a'].findIndex(x => true) );

//由于空位的处理规则非常不统一，所以建议避免出现空位


