/**
 * Created by tanwu on 2017/7/18.
 */

//Unicode
//console.log('\u0061');
//console.log('\uD842\uDFB7');
//console.log('\u{20BB7}');

//codePointAt()
//var s = "𠮷a";
//console.log(s.length);
//console.log(s.charAt(0));
//console.log(s.charCodeAt(0));
//console.log(s.codePointAt(0).toString(16));
//for(let ch of s){
//    console.log(ch.codePointAt(0).toString(16));
//}
//codePointAt测试一个字符由两个字节还是由四个字节组成的最简单方法
//function is32Bit(c){
//    return c.codePointAt(0) > 0xFFFF;
//}
//console.log(is32Bit("𠮷"));
//console.log(is32Bit('a'));

//String.fromCodePoint()
//console.log(String.fromCharCode(0x20BB7));
//console.log(String.fromCodePoint(0x20BB7));

//字符串的遍历器接口-----------------------√
//for(let codePoint of 'foo'){
//    console.log(codePoint);
//}

//at()  提案阶段
//console.log('abc'.charAt(0));
//console.log('abc'.at(0));

//normalize()
//处理欧洲语言有语调符号和重音符号，比如：Ǒ

//includes()、startsWith()、endsWith()-----------------------√
//indexOf()
//includes()：返回布尔值，表示是否找到了参数字符串。
//startsWith()：返回布尔值，表示参数字符串是否在源字符串的头部。
//endsWith()：返回布尔值，表示参数字符串是否在源字符串的尾部。
//var s = 'hello world!';
//console.log(s.startsWith('hello'));
//console.log(s.endsWith('!'));
//console.log(s.includes('o'));

//console.log(s.startsWith('world',6));
//console.log(s.endsWith('hello',5));//使用第二个参数时，endsWith的行为与其他两个方法有所不同
//console.log(s.includes('hello',6));

//repeat()----------------------√
//repeat方法返回一个新字符串，表示将原字符串重复n次
//console.log('x'.repeat(3));
//console.log('hello'.repeat(0));//1、0；2、(0,-1);3、NaN;
//console.log('hello'.repeat(-0.9));
//console.log('hello'.repeat(NaN));
//console.log('na'.repeat(2.9));//如果是小数，取整
//console.log('hello'.repeat('2'));//字符串，先转换成数字

//error--负数或者Infinity(∞)
//console.log('x'.repeat(Infinity));
//console.log('x'.repeat(-1));

//padStart(),padEnd()--------------------------------------------√
//ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。
//console.log('x'.padStart(5, 'ab'));
//console.log('x'.padEnd(4, 'ab'));
//如果原字符串的长度，等于或者大于指定的最小长度，则返回原字符串
//console.log('xxx'.padStart(2, 'ab'));
//console.log('xxx'.padEnd(2, 'ab'));
//如果用来补全的字符串与原字符串，两者的长度之和超过了指定的最小长度，则会截去超出位数的补全字符串。
//console.log('abc'.padStart(10, '0123456789'));
//如果省略第二个参数，默认使用空格补全长度。
//console.log('x'.padStart(4));
//console.log('x'.padEnd(4));

//用途--为数值补全指定位数
//console.log('1'.padStart(10, '0'));
//用途--提示字符串格式
//console.log('12'.padStart(10, 'YYYY-MM-DD'));

//模板字符串-----------------------------------------------------------√
//传统写法--缺点：相当繁琐不方便
//let atr = 'big';
//let str = 'This is '+atr+' Apple.';
//console.log(str);
//ES6--反引号
//大括号内部可以放入任意的JavaScript表达式，可以进行运算，以及引用对象属性。还能调用函数。
//let atr = 'big';
//let str = `This is ${atr} Apple.`;
//console.log(str);
//模板字符串是增强版字符串，用反引号标识。它可以当做普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
//如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中。
//console.log(`In JavaScript '\n' is a line-feed.`);
//let str = `In JavaScript this is
//            not legal.`;
//console.log(str);
//如果在模板字符串中使用反引号，则前面要用反斜杠转义
//let str = `\`Yo\` World!`;
//console.log(str);

//模板编译

//标签模板
//过滤HTML字符串，防止用户输入恶意内容
//多语言转换(国际化处理)
//嵌入其它语言


//String.raw()

//
















