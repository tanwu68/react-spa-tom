/**
 * Created by tanwu on 2017/7/20.
 */

//二进制和八进制表示法
//console.log(0b111110111 === 503);
//console.log(0o767 === 503);
//console.log(Number(0b111));

//Number.isFinite()、Number.isNaN()
//isFinite用来检查一个数值是否为有限的
//console.log(Number.isFinite(15));
//console.log(Number.isFinite(Infinity));
//isNaN用来检查一个值是否为NaN
//console.log(Number.isNaN(NaN));
//console.log(Number.isNaN(15));
//它们与传统的全局方法isFinite()和isNaN()的区别在于，传统方法先调用Number()将非数值的值转为数值，再进行判断，
//而这两个新方法只对数值有效，Number.isFinite()对于非数值一律返回false, Number.isNaN()只有对于NaN才返回true，非NaN一律返回false
//console.log(isFinite(25));
//console.log(isFinite('25'));
//console.log(Number.isFinite(25));
//console.log(Number.isFinite('25'));
//console.log(isNaN(NaN));
//console.log(isNaN('NaN'));
//console.log(Number.isNaN(NaN));
//console.log(Number.isNaN('NaN'));

//Number.parseInt()、Number.parseFloat()--跟ES5全局方法完全一致
//console.log(parseInt('12.34'));
//console.log(parseFloat('123.45#'));
//console.log(Number.parseInt('12.34'));
//console.log(Number.parseFloat('123.45#'));

//Number.isInteger()--用来判断一个值是否为整数
//console.log(Number.isInteger(25));

//Number.EPSILON--引入一个这么小的量的目的，在于为浮点数计算，设置一个误差范围。我们知道浮点数计算是不精确的
//console.log(Number.EPSILON);
//console.log(Number.EPSILON.toFixed(20));
//console.log(0.1+0.2);
//console.log((0.1+0.2-0.3).toFixed(20));
//console.log((0.1+0.2-0.3) < Number.EPSILON);

//安全整数和Number.isSafeInteger()
//JavaScript能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值
//console.log(Math.pow(2,53) === Math.pow(2,53)+1);
//ES6引入了Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER这两个常量，用来表示这个范围的上下限
//console.log(Number.MAX_SAFE_INTEGER === Math.pow(2,53)-1);
//console.log(Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER);
//Number.isSafeInteger()则是用来判断一个整数是否落在这个范围之内
//console.log(Number.isSafeInteger('a'));
//console.log(Number.isSafeInteger(3));

//Math对象的扩展
//ES6在Math对象上新增了17个与数学相关的方法。所有这些方法都是静态方法，只能在Math对象上调用
//1、Math.trunc()--去除一个数的小数部分，返回整数部分
//console.log(Math.trunc(4.1));
//console.log(Math.trunc(-4.1));
//对于非数值，Math.trunc内部使用Number方法将其先转为数值
//console.log(Math.trunc('123.456'));
//对于空值和无法截取整数的值，返回NaN
//console.log(Math.trunc(NaN));
//console.log(Math.trunc('foo'));
//console.log(Math.trunc());
//2、Math.sign()--判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值
//它会返回五种值:
//      参数为正数，返回 1；
//      参数为负数，返回 -1；
//      参数为0，返回 0；
//      参数为-0，返回 -0;
//      其他值，返回 NaN
//console.log(Math.sign(5));
//console.log(Math.sign(-5));
//console.log(Math.sign(0));
//console.log(Math.sign(-0));
//console.log(Math.sign('foo'));
//3、Math.cbrt()--计算一个数的立方根
//console.log(Math.cbrt(2));
//4、Math.clz32()--返回一个数的32位无符号整数形式有多少个前导0
//console.log(Math.clz32(0));
//5、Math.imul()--返回两个数以32位带符号整数形式相乘的结果
//console.log(Math.imul(2, 4));
//6、Math.fround()--返回一个数的单精度浮点数形式
//console.log(Math.fround(1.337));
//7、Math.hypot()--返回所有参数的平方和的平方根
//console.log(Math.hypot(3, 4));
//8、对数方法
//9、双曲函数方法

//Math.signbit()--判断一个值的正负，但是如果参数是-0，它会返回-0
//console.log(Math.signbit(2));

//指数运算符--（**）

//Integer数据类型




