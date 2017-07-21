/**
 * Created by tanwu on 2017/7/20.
 */

//RegExp--正则表达式（regular expression）的缩写
//语法
//  显示构造函数：let rg = new RegExp(pattern, attributes);
//  隐式构造函数：let rg = /pattern/attributes;
//  pattern：字符串
//  attributes：
//      i,g (i不区分大小写的匹配，g全局匹配，即查询所有匹配项而不是在匹配到第一个后就停止，"ig"不区分大小写且全局检索)可选参数

//RegExp 构造函数
//ES5：第一种情况，参数是字符串，这是第二个参数表示正则表达式的修饰符
//var regex = new RegExp('xyz', 'i');
//第二种情况：参数是一个正则表达式，这是会返回一个原有正则表达式的拷贝
//var regex = new RegExp(/xyz/i);
//等价于
//var regex = /xyz/i;
//console.log(regex);
//ES5不支持
//var regex = new RegExp(/xyz/, 'i');
//ES6支持--返回的正则表达式会忽略原有的正则表达式的修饰符，只使用新指定的修饰符
//let regex = new RegExp(/abc/ig, 'i').flags;
//console.log(regex);

//字符串的正则方法
//match()
//检索指定值，若有匹配项，全局搜索时返回匹配项数组，一般搜索时返回也返回数组，格式与exec()结果一样，没有则返回null
//let str = 'abcb';
//let rg = /b/g;
//console.log(str.match(rg));
//replace()
//替换匹配的字符串并返回新的字符串
//console.log(str.replace(rg, '1'));
//search()
//返回第一次匹配的位置
//console.log(str.search(rg));
//split()
//将字符串分割为字符串数值
//let str = 'The best things in life are free';
//let rg = /e/g;
//console.log(str.split(rg));

//u 修饰符
//ES6 对正则表达式添加了u修饰符，含义为“Unicode模式”，用来正确处理大于\uFFFF的 Unicode 字符。也就是说，会正确处理四个字节的 UTF-16 编码。
//console.log(/^\uD83D/.test('\uD83D\uDC2A'));
//console.log(/^\uD83D/u.test('\uD83D\uDC2A'));
//1、点字符
//let s = '𠮷';
//console.log(/^.$/.test(s));
//console.log(/^.$/u.test(s));
//2、Unicode 字符表示法
//console.log(/\u{61}/.test('a'));
//console.log(/\u{61}/u.test('a'));
//console.log(/\u{20BB7}/u.test('𠮷'));
//3、量词
//console.log(/a{2}/.test('aa'));
//console.log(/a{2}/u.test('aa'));
//console.log(/𠮷{2}/.test('𠮷𠮷'));
//console.log(/𠮷{2}/u.test('𠮷𠮷'));
//4、预定义模式
//console.log(/^\S$/.test('𠮷'));
//console.log(/^\S$/u.test('𠮷'));
//返回字符串长度
//function codePointLength(text) {
//    let result = text.match(/[\s\S]/gu);
//    return result ? result.length : 0;
//}
//var s = '𠮷𠮷';
//console.log(s.length);
//console.log(codePointLength(s));
//5、i 修饰符--识别非规范的字符
//console.log(/[a-z]/i.test('\u212A'));
//console.log(/[a-z]/iu.test('\u212A'));

//y 修饰符--sticky(粘连)
//y 修饰符的作用与g 修饰符类似，也是全局匹配，后一次匹配都从上一次匹配成功的下一个位置开始。不同之处在于，
//g 修饰符只要剩余位置中存在匹配就可
//y 修饰符确保匹配必须从剩余的第一个位置开始。
//let s = 'aaa_aa_a';
//let r1 = /a+/g;
//let r2 = /a+/y;
//console.log(r1.exec(s));
//console.log(r2.exec(s));
//console.log(r1.exec(s));
//console.log(r2.exec(s));
//y
//let s = 'aaa_aa_a';
//let r = /a+_/y;
//console.log(r.exec(s));
//console.log(r.exec(s));
//lastIndex--g
//const REGEX = /a/g;
//REGEX.lastIndex = 2;
//const match = REGEX.exec('xaya');
//console.log(match.index);
//console.log(REGEX.lastIndex);
//console.log(REGEX.exec('xaxa'));
//lastIndex--y
//const REGEX = /a/y;
//REGEX.lastIndex = 2;
//console.log(REGEX.exec('xaya'));
//REGEX.lastIndex = 3;
//const match = REGEX.exec('xaxa');
//console.log(match.index);
//console.log(REGEX.lastIndex);

//console.log(/b/y.exec('abc'));
//在split方法中使用y修饰符，原字符串必须以分隔符开头
//console.log('x##'.split(/#/y));
//console.log('##x'.split(/#/y));

//最后一个a因为不是出现在下一次匹配的头部，所以不会被替换
//const REGEX = /a/gy;
//console.log('aaxa'.replace(REGEX, '-'));
//单单一个y修饰符对match方法，只能返回第一个匹配，必须与g修饰符联用，才能返回所有匹配
//console.log('a1a2a3'.match(/a\d/y));
//console.log('a1a2a3'.match(/a\d/gy));
//y修饰符的一个应用，是从字符串提取 token（词元），y修饰符确保了匹配之间不会有漏掉的字符
//const TOKEN_Y = /\s*(\+|[0-9]+)\s*/y;
//const TOKEN_G  = /\s*(\+|[0-9]+)\s*/g;
//function tokenize(TOKEN_REGEX, str) {
//    let result = [];
//    let match;
//    while (match = TOKEN_REGEX.exec(str)) {
//        result.push(match[1]);
//    }
//    return result;
//}
//console.log(tokenize(TOKEN_Y, '3 + 4'));
//console.log(tokenize(TOKEN_G, '3 + 4'));
//g修饰符会忽略非法字符，而y修饰符不会，这样就很容易发现错误
//console.log(tokenize(TOKEN_Y, '3x + 4'));
//console.log(tokenize(TOKEN_G, '3x + 4'));

//sticky属性--与y修饰符相匹配，ES6 的正则对象多了sticky属性，表示是否设置了y修饰符
//let r = /hello\d/y;
//console.log(r.sticky);

//flags
//ES5 的 source 属性,返回正则表达式的正文
//console.log(/abc/gi.source);
//ES6 的 flags 属性,返回正则表达式的修饰符
//console.log(/abc/gi.flags);

//s 修饰符：dotAll模式
//console.log(/foo.bar/.test('foo\nbar'));
//任意单个字符--这种解决方案不太符合直觉
//console.log(/foo[^]bar/.test('foo\nbar'));
//提案
//console.log(/foo.bar/s.test('foo\n\bar'));

//后行断言--提案阶段

//Unicode 属性类--提案阶段

//具名组匹配

