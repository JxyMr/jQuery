//trim方法,清除前后空格
console.log($.trim("asdasd  a  ad "));

//map方法，遍历
$.map([4,2,8,2],function (item,index) {
	console.log(item);
	return Math.pow(item - index, 2)
})

//isArray,判断是否是数组，true是数组，false不是数组
console.log($.isArray([1,2,3]));//--->true

//contains方法，判断参数二的dom节点是否在参数一dom节点内
console.log($.contains(document.body,$("p")[0]));//--->false

//编写工具
$.extend({
	max : function (a,b) {
		return Math.max(a,b);
	},
	toStarryTel : function (tel) {
		tel = tel +"";
		len=tel.length;
		return  tel.substring(0, 3)+(function () {
			var strNew="";
			for(var i=0;i<len-6;i++){
				strNew+="*";
			}
			return strNew
		}())+tel.substring(len-3);
	},
	validateUser :function (str) {
		var a=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","i","f","t","u","v","w","x","y","z"];
		var i=0,
			alen=a.length;
		while (i<alen) {
			a.push(a[i++].toUpperCase());
		}
		a=a.concat(["0","1","2","3","4","5","6","7","8","9"]);
		var j=0,
			strLen=str.length;
		while(j<strLen){
			if(!~a.indexOf(str[j++])){
				return 0;
			}
		return 1
		}
	}
})
console.log($.max(2,3));
console.log($.toStarryTel(12345678901123213))
$("input").keyup(function () {
	if(!this.value){
		$(this).css("outline-color","");
		return;
	}
	$(this).css("outline-color",$.validateUser(this.value)?"green":"red");
})

//拓展对象字面量 两个对象组合为一个
console.log($.extend({a:1},{b:1}));

//同名工具(属性)会被覆盖,甚至会重写jq自带的工具
$.extend({
	max :function(a,b){
		return Math.min(a,b);
	},
	trim:1
});

$.max=function () {
	console.log(123);
}
$.map=2;
console.log($.map);
console.log($.max(1,2));

new Array(5).fill("*").join("");

"*".repeat(5);

function People () {
	this.name="人";
}
console.log(new People);
People.prototype.age = 20;

//$.fn.extend方法
$.fn.extend({
	a:1,
	getHTML:function () {
		return this.html();
	},
	setHTML:function (html) {
		this.html(html)
	}
})
$("body").setHTML("<p>23333</p>");
console.log($("body").getHTML());


$.fn.extend({
	validateUser:function () {
		//对象的validate属性被调用，this指向的是调用属性的对象
		this.keyup(function () {
			//因为这是在事件的处理方法中，所以下一行的this指向的是事件的触发者
			if(!this.value){
				//以$()包装this为了执行后返回值能去调用$.fn上的其他方法
				$(this).css("outline-color","");
				return;
			}
			$(this).css("outline-color",$.validateUser(this.value)?"green":"red");
		})
	}
})
$("input").validateUser().css({
	width:300px,
	height:200px,
	fontSize:20px
})