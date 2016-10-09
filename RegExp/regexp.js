//正则表达式
//Regular Expression
//RegExp

//正则表达式的字面量
var reg1=/a/;

//实例化正则对象
var reg2=new RegExp("a");

//字符串的正则匹配方法search

//类似indexOf,但是参数可接收正则表达式,返回值是正则表达式匹配到的下标
console.log("\tba".search(reg1));

//字符串的replace方法第一个参数也能接收正则表达式，替换被正则匹配到的内容
console.log("cat".replace(reg2,"u"));

//字符串的split方法参数也能接收正则表达式，根据正则表达式的规则进行字符串切割
console.log("\tcat".split(reg2));

//字符串的match方法,返回匹配到的字符串部分的集合
console.log("\tcat".match(reg1));

//正则对象的匹配方法

//test方法去检测字符串是否有匹配到正则表达式,返回值为boolean
console.log(reg1.test("\tcut"));

//正则表达式的规则

console.log(/asdf/.test("asdfasd"))

//标识符

//i
//即ignore case 不区分大小写
console.log(/asdf/i.test("ASDF"));

//g
//即global匹配所有
console.log("asdfasdfasdfasdf".match(/asdf/g));

console.log('asdfASDfasdfasdf'.match(/asdf/ig));

//特殊元字符

//\t匹配制表符
console.log("asdfasdfa\tsdfasdf".match(/\t/));

//\r匹配换行符
console.log("asdfas\rdsad".match(/\r/));

//\s匹配空格及制表符即换行符
console.log("asd fas dfasdfasdf".match(/\s/g));

//\d匹配0-9数字
console.log("123123dad-=das123".match(/\d/g));

//\w匹配0-9的数字及大小写英文字母及下划线
	console.log("dsad@#$!%^$fdsfs1231__23123()".match(/\w/g));

//\b
//即block匹配单词边界
console.log("internationlization".match(/\binter/));
console.log("internationlization".match(/tion\b/));

//.
//匹配所有
console.log("dsadfsad3213ew\rerf\d\w)%$^*)".match(/./g));

//\转义
//[]().\/?+*
console.log("()".match(/\(\)/g));
console.log("\\\\".match(/\\\\/));

//中括号区间
//中括号里的0123即0或1或2或3
console.log("073214515243".match(/[0123]/g));

//0-5即0到5
console.log("2132132134".match(/[0-5]/g));

//a-z
console.log("asdasd".match(/[a-z]/g));

//A-Z
console.log("ADSADAS123".match(/[A-Z]/g));

//中括号里的abc即a或b或c
console.log("asdsadfsd".match(/[asda]/g));

console.log("asdsaf3213".match(/[\d]/g));

console.log("asdas \tsada 2321".match(/[\w]/g));

console.log("dsad\tsadas123 asd_)".match(/[\w\s]/g));
//注意区别
console.log("dasdasf _231dasdfdsaf".match(/\w\s/g));

//^对中括号内规则的去反
console.log(/[^\d]/g.test("123*1adf23"));

//数量级
//*匹配前一个规则任意次，如果这个规则匹配到了0次，也会算作匹配到，匹配的内容为""
console.log("123".match(/\d*/));
console.log("asd123213)(s*^(".match(/\d*/g));
console.log("dsa123213)(d*&^".match(/[\d*]/g));

//?匹配前一个规则0次或一次
console.log("123".match(/\d?/g));

//+匹配前一个规则至少一次
console.log("123".match(/\d+/g));

//{m}匹配前一个规则m次
console.log("123213ada321das13".match(/\d{3}/g));

//{m,}匹配前一个规则至少m次
console.log("12321ada321das13".match(/\d{3,}/g));

//{0,m}匹配前一个规则最多m次
console.log("123ads123ad123das".match(/\d{0,3}/g));

//{m,n}自定义匹配前一个规则的次数，匹配前一个规则m次至N次
console.log("123213dsa213dsa3213sads123".match(/\d{1,4}/g));

//非中括号里的^以后面的规则开始
console.log("123213".match(/^\d/g));
console.log("1ea13".match(/^\d/));
console.log("123dsa213".match(/^\d+/));

//$以前面的规则由字符串结束
console.log("123321".match(/\d$/));
console.log("123dsad".match(/\d$/));
console.log("13adas".match(/\d+$/));

//不是0-2469,正则表达式按单个字符计算规则
console.log(/^1[^0-2469]\d{9}$/.test(123123213123));
//匹配手机号
console.log(/^1[3579]\d{9}$/.test("17232423821"))

//()表示分组
console.log("asdfa12321(^(^)(asdsa8d0".match(/as(d\d)+/g));

//|表示或者
console.log("dsad232dsa".match(/[a-c]|\d/g))


console.log("-------------------------------------");


console.log("123454234222ds13213123213ad".match(/1[1-8]{9}/g))

//匹配身份证号码，不计瑞平年
//小括号里使用?:取消引用，对不必要的小括号?:可以提高正则表达式的运算效率
console.log("330781199211124016".match(/^(?:(?:1[1-5]|2[1-3]|3[1-7]|4[1-6]|5[0-4]|6[1-5]|71|8[12])\d|8(?:86|5[23]))\d{3}(?:19\d{2}|20(?:0\d|1[0-6]))/));


//replace方法中第一个参数如果是正则，又存在分组，则第二个参数可以通过$n使用对应的分组，比如$1找到第一个小括号匹配到的内容
console.log("asdf123asdf".replace(/(\w\d)/,"$1"));
console.log("asdf123asdf".replace(/(\w\d)/,"6$16"));

//正则表达式中使用\n可以获取到前面被小括号分组匹配到的内容
console.log("asdf123asdf".match(/(asdf)123\1/))
console.log("asdf123\1asdf".match(/(?:asdf)123\1/))

//匹配标签
console.log("<h1 title=\"asdf\">asdfwer</h1>".match(/^<([a-z]+[a-z\d]*).*(?:\/>)/))
console.log("asdfasdf>123".match(/[^>]*/));

//前瞻
//?=肯定前瞻
//?!否定前瞻
console.log("asdf123asdf".match(/asdf(?=\d)/));
console.log("asdf123asdf".match())