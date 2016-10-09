//普通事件 nth-child(even)偶数 nth-child(odd)奇数
$("input").click(function () {
	console.log(23333);
});

$("input").mouseenter(function () {
	console.log("enter even");
});

$(".ipt").focus(function () {//获得焦点时
	$(this).css("outline","1px solid red");
})

$(".ipt").blur(function(){//失去焦点时
	$(this).css("outline","none");
})

$(window).keydown(function (e) {
	console.log(e)
})

$(window).scroll(function () {//滚动滚轮时
	console.log("scroll");
}).resize(function () {//窗口尺寸变化时
	console.log("resize");
}).click(function () {//事件重载
	$(document.body).css("background-color","red");
}).click(function () {
	console.log(23333);
});
//事件重写
onclick=function () {
	console.log(123)
}
onclick=function () {
	console.log(333)
}
//事件重载
window.addEventListener("click", function () {
	console.log(123);
},0);
window.addEventListener("click",function () {
	console.log(321);
},0);

//on事件 事件也会重载
$("p").on("click",function () {
	console.log(123);
}).on("click",function () {
	console.log(321);
}).on("click",function () {
	console.log(this.innerHTML,$(this).html());
});

//后添加到页面里的元素是不会拥有前面添加过的对应事件监听！
$("body").append("<p>6666</p>");

setTimeout(function () {
	$("body").append("<a>哈哈</a>");
	$("a").click(function () {
		console.log($(this).text());
	})
},2000);

//事件代理,此标签的事件只能被其父级或其父级的父级及以上所代理，不能被兄弟或子级代理
$("body").delegate("a","click",function () {
	//this指向触发事件的这个标签的dom对象
	console.log($(this).html()+1);
});

//只触发一次并移除，只移除被触发过的这个标签的事件，不会全部移除
$("p").one("mouseenter",function () {
	console.log($(this).text());
})



