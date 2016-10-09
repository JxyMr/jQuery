$("body").append("<div class=\"test\"></div>");

//fadeOut 渐渐消失，参数接收动画时间(单位：毫秒),或者fast快、slow慢
$(".test").fadeOut("slow");

//fadeIn
$(".test").fadeIn("fast");

//slideUp向上收起
$(".test").slideUp();

//slideDown向下伸展
$(".test").slideDown();

//delay动画延迟，参数接收延迟时间(单位：毫秒),只能放在动画链中
$("test").fadeOut().delay(1000).fadeIn();

//animate自定义动画(变换的属性只能是可线性变换的属性),第二个参数接收动画时间(单位：毫秒)
$(".test").after("<div class=\"demo\"></div>");
$(".demo").css("background-color","green").animate({
	width:"400px",
	height:"200px",
	"background-color" : "red"
},2000).delay(8000).slideUp();