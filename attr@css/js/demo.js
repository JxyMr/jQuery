//attr

//获取属性,如果选择器匹配了多个标签，则只会返回首个被匹配的标签的属性
console.log($("meta").attr("charset"));

//设置属性
console.log($("meta").attr("charset","utf-16"));
console.log($("li").attr("name","test"))
var i=0,
	len=$("li").length;
while (i<len) {
	// statement
	$("li").eq(i).attr("name","test"+i);
	i++;
}

console.log($("input").attr("readonly"));
//prop方法，专门处理disabled,readonly,checked,selected特性
$("input").prop("readonly","readonly");

//css方法
console.log($("input").css({"border":"1px solid #ccc"}).css("width","20%").css("width"))
//添加类addClass()
$("p").addClass("blue").addClass("big");
$("p").addClass("blue big");
//删除类removeClass()
$("p").removeClass("blue");
//切换类
$("p").toggleClass("big");
//是否包含类 返回true或false
$("p").hasClass("big");
